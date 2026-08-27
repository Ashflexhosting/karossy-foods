/**
 * Consolidates Lighthouse mobile audits across public Karossy Foods routes into a site-wide release report.
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const routeAuditDirectory = resolve(projectRoot, "audits/routes");
const routeAudits = readdirSync(routeAuditDirectory)
  .filter((file) => file.endsWith("-mobile.json"))
  .sort()
  .map((file) => ({
    label: file.replace("-mobile.json", "").replaceAll("-", " "),
    report: JSON.parse(readFileSync(resolve(routeAuditDirectory, file), "utf8")),
  }));

const categories = ["performance", "accessibility", "best-practices", "seo"];
const metrics = [
  ["first-contentful-paint", "FCP"],
  ["largest-contentful-paint", "LCP"],
  ["total-blocking-time", "TBT"],
  ["cumulative-layout-shift", "CLS"],
];

const row = (values) => `| ${values.join(" | ")} |`;
const score = (report, category) => Math.round((report.categories[category]?.score ?? 0) * 100);
const failedTitles = (report, category) => (report.categories[category]?.auditRefs ?? [])
  .map(({ id }) => report.audits[id])
  .filter((audit) => audit && audit.score !== null && audit.score < 1)
  .map((audit) => audit.title);

const average = (values) => Math.round(values.reduce((total, value) => total + value, 0) / values.length);
const summary = Object.fromEntries(categories.map((category) => [category, average(routeAudits.map(({ report }) => score(report, category)))]));
const routeFailures = new Map();

for (const { label, report } of routeAudits) {
  for (const category of ["accessibility", "best-practices", "seo"]) {
    for (const title of failedTitles(report, category)) {
      const entry = routeFailures.get(title) ?? { category, routes: [] };
      entry.routes.push(label);
      routeFailures.set(title, entry);
    }
  }
}

const lines = [
  "# Site-wide Mobile Accessibility & Performance Audit",
  "",
  "**Target:** https://ashflexhosting.github.io/karossy-foods/",
  `**Generated:** ${new Date().toISOString()}`,
  `**Scope:** ${routeAudits.length} deployed public routes audited with Lighthouse ${routeAudits[0]?.report.lighthouseVersion ?? "12.6.0"} under the mobile preset.`,
  "",
  "> Lighthouse is an automated signal, not a complete conformance test. Complete keyboard, screen-reader, touch-target, and real-device testing before making an accessibility conformance claim.",
  "",
  "## Average Category Scores",
  "",
  row(["Performance", "Accessibility", "Best practices", "SEO"]),
  row(["---:", "---:", "---:", "---:"]),
  row([summary.performance, summary.accessibility, summary["best-practices"], summary.seo]),
  "",
  "## Route Results",
  "",
  row(["Route", "Performance", "Accessibility", "Best practices", "SEO"]),
  row(["---", "---:", "---:", "---:", "---:"]),
  ...routeAudits.map(({ label, report }) => row([label, score(report, "performance"), score(report, "accessibility"), score(report, "best-practices"), score(report, "seo")])),
  "",
  "## Core Delivery Metrics by Route",
  "",
  row(["Route", ...metrics.map(([, label]) => label)]),
  row(["---", ...metrics.map(() => "---")]),
  ...routeAudits.map(({ label, report }) => row([label, ...metrics.map(([id]) => report.audits[id]?.displayValue ?? "N/A")])),
  "",
  "## Repeated Automated Findings",
  "",
  routeFailures.size
    ? row(["Category", "Finding", "Affected routes"]) : "No automated accessibility, best-practice, or SEO failures were reported across these routes.",
  ...(routeFailures.size ? [row(["---", "---", "---"])] : []),
  ...[...routeFailures.entries()].map(([title, { category, routes }]) => row([category, title, routes.join(", ")])),
  "",
  "## Prioritized Next Steps",
  "",
  "1. Remediate any repeated contrast or viewport-zoom finding first, then test the updated interface using keyboard-only navigation and a screen reader.",
  "2. Optimise the routes with the weakest mobile performance by addressing the largest Lighthouse render-blocking, unused-code, and image-preload opportunities.",
  "3. Re-run the homepage desktop/mobile audits and this full mobile route sweep after the first remediation pass, using the same deployed GitHub Pages URL.",
  "",
  "## Source Files",
  "",
  ...routeAudits.map(({ label }) => `- \`audits/routes/${label.replaceAll(" ", "-")}-mobile.json\``),
];

writeFileSync(resolve(projectRoot, "audits/site-wide-mobile-audit.md"), `${lines.join("\n")}\n`, "utf8");
console.log(`Summarized ${routeAudits.length} route audits.`);

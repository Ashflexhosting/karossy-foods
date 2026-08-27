/**
 * Produces a concise release-audit report from Lighthouse JSON results for the deployed Karossy Foods website.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const auditDirectory = resolve(projectRoot, "audits");
const reportPath = resolve(auditDirectory, "deployed-site-audit.md");

const results = [
  { label: "Mobile", file: resolve(auditDirectory, "lighthouse-mobile.json") },
  { label: "Desktop", file: resolve(auditDirectory, "lighthouse-desktop.json") },
].map(({ label, file }) => ({ label, report: JSON.parse(readFileSync(file, "utf8")) }));

const categories = ["performance", "accessibility", "best-practices", "seo"];
const metricIds = [
  ["first-contentful-paint", "First Contentful Paint"],
  ["largest-contentful-paint", "Largest Contentful Paint"],
  ["total-blocking-time", "Total Blocking Time"],
  ["cumulative-layout-shift", "Cumulative Layout Shift"],
  ["speed-index", "Speed Index"],
];

function score(report, categoryId) {
  return Math.round((report.categories[categoryId]?.score ?? 0) * 100);
}

function failedAudits(report, categoryId) {
  return (report.categories[categoryId]?.auditRefs ?? [])
    .map(({ id }) => report.audits[id])
    .filter((audit) => audit && audit.score !== null && audit.score < 1)
    .map((audit) => ({ title: audit.title, score: audit.score, displayValue: audit.displayValue, description: audit.description }));
}

function opportunities(report) {
  return Object.values(report.audits)
    .filter((audit) => audit.score !== null && audit.score < 1 && audit.details?.overallSavingsMs > 0)
    .sort((a, b) => (b.details?.overallSavingsMs ?? 0) - (a.details?.overallSavingsMs ?? 0))
    .slice(0, 6)
    .map((audit) => ({ title: audit.title, savings: Math.round(audit.details.overallSavingsMs), displayValue: audit.displayValue }));
}

function tableRow(values) {
  return `| ${values.join(" | ")} |`;
}

const [mobile, desktop] = results.map(({ report }) => report);
const mobileA11y = failedAudits(mobile, "accessibility");
const desktopA11y = failedAudits(desktop, "accessibility");
const mobileOpportunities = opportunities(mobile);
const desktopOpportunities = opportunities(desktop);

const lines = [
  "# Deployed Site Accessibility & Performance Audit",
  "",
  `**Target:** ${mobile.finalDisplayedUrl}`,
  `**Generated:** ${new Date().toISOString()}`,
  `**Method:** Lighthouse ${mobile.lighthouseVersion}; mobile and desktop simulated audits of the deployed GitHub Pages homepage.`,
  "",
  "> This automated audit identifies common accessibility, performance, SEO, and best-practice signals. It does not replace manual keyboard, screen-reader, content, or real-device testing.",
  "",
  "## Category Scores",
  "",
  tableRow(["Category", "Mobile", "Desktop"]),
  tableRow(["---", "---:", "---:"]),
  ...categories.map((category) => tableRow([mobile.categories[category].title, `${score(mobile, category)}`, `${score(desktop, category)}`])),
  "",
  "## Core Delivery Metrics",
  "",
  tableRow(["Metric", "Mobile", "Desktop"]),
  tableRow(["---", "---", "---"]),
  ...metricIds.map(([id, name]) => tableRow([name, mobile.audits[id]?.displayValue ?? "N/A", desktop.audits[id]?.displayValue ?? "N/A"])),
  "",
  "## Accessibility Findings",
  "",
  mobileA11y.length || desktopA11y.length
    ? "The following automated Lighthouse accessibility audits did not fully pass. Review them alongside manual keyboard and screen-reader testing."
    : "All automated Lighthouse accessibility audits passed in both profiles. Manual keyboard, screen-reader, focus-order, zoom, and content-review testing remains recommended.",
  "",
  tableRow(["Finding", "Mobile", "Desktop"]),
  tableRow(["---", "---", "---"]),
  ...Array.from(new Set([...mobileA11y, ...desktopA11y].map(({ title }) => title))).map((title) => {
    const mobileFinding = mobileA11y.find((audit) => audit.title === title);
    const desktopFinding = desktopA11y.find((audit) => audit.title === title);
    return tableRow([title, mobileFinding?.displayValue ?? (mobileFinding ? "Needs review" : "Pass"), desktopFinding?.displayValue ?? (desktopFinding ? "Needs review" : "Pass")]);
  }),
  "",
  "## Performance Opportunities",
  "",
  tableRow(["Opportunity", "Mobile estimated savings", "Desktop estimated savings"]),
  tableRow(["---", "---:", "---:"]),
  ...Array.from(new Set([...mobileOpportunities, ...desktopOpportunities].map(({ title }) => title))).map((title) => {
    const mobileFinding = mobileOpportunities.find((audit) => audit.title === title);
    const desktopFinding = desktopOpportunities.find((audit) => audit.title === title);
    return tableRow([title, mobileFinding ? `${mobileFinding.savings} ms` : "—", desktopFinding ? `${desktopFinding.savings} ms` : "—"]);
  }),
  "",
  "## Priority Guidance",
  "",
  "1. Address any failed accessibility audit before relying on the score; confirm fixes with keyboard-only navigation and a screen reader.",
  "2. Prioritise the largest mobile savings opportunity, then re-run this audit on a representative production connection.",
  "3. Keep the built-in `pnpm test:site` route and stylesheet validation in every release workflow; it complements, but does not replace, Lighthouse and manual testing.",
  "",
  "## Source Files",
  "",
  "- `audits/lighthouse-mobile.json`",
  "- `audits/lighthouse-desktop.json`",
];

mkdirSync(auditDirectory, { recursive: true });
writeFileSync(reportPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Wrote ${reportPath}`);

/**
 * Extracts detailed actionable Lighthouse evidence from deployed mobile route audits.
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const auditDirectory = resolve(projectRoot, "audits/routes");
const auditFiles = readdirSync(auditDirectory).filter((file) => file.endsWith(".json")).sort();
const routeReports = auditFiles.map((file) => ({
  route: file.replace("-mobile.json", "").replaceAll("-", " "),
  report: JSON.parse(readFileSync(resolve(auditDirectory, file), "utf8")),
}));

function detailsFor(audit) {
  const items = audit?.details?.items ?? [];
  return items.map((item) => {
    const node = item.node;
    if (node) return node.snippet || node.explanation || JSON.stringify(node);
    if (item.source) return `${item.source}: ${item.description ?? item.message ?? ""}`.trim();
    return item.description ?? item.message ?? JSON.stringify(item);
  });
}

const trackedAudits = ["color-contrast", "viewport", "uses-deprecated-apis", "errors-in-console"];
const lines = [
  "# Lighthouse Audit Evidence",
  "",
  "Detailed automated evidence extracted from the mobile Lighthouse audits of deployed GitHub Pages routes.",
  "",
];

for (const auditId of trackedAudits) {
  const samples = [];
  for (const { route, report } of routeReports) {
    const audit = report.audits[auditId];
    if (!audit || audit.score === null || audit.score === 1) continue;
    samples.push({ route, title: audit.title, details: detailsFor(audit) });
  }
  if (!samples.length) continue;

  lines.push(`## ${samples[0].title}`, "");
  for (const sample of samples) {
    lines.push(`### ${sample.route}`, "");
    if (sample.details.length) lines.push(...sample.details.slice(0, 10).map((detail) => `- ${detail}`));
    else lines.push("- No element-level detail was provided by the automated audit.");
    lines.push("");
  }
}

writeFileSync(resolve(projectRoot, "audits/lighthouse-audit-evidence.md"), `${lines.join("\n")}\n`, "utf8");
console.log(`Extracted detailed findings from ${routeReports.length} route audits.`);

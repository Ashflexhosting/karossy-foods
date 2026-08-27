/**
 * Lists failed network requests recorded by Lighthouse across the deployed route audits.
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const routeDirectory = resolve(projectRoot, "audits/routes");
const files = readdirSync(routeDirectory).filter((file) => file.endsWith(".json")).sort();
const failures = [];

for (const file of files) {
  const route = file.replace("-mobile.json", "");
  const report = JSON.parse(readFileSync(resolve(routeDirectory, file), "utf8"));
  const requests = report.audits["network-requests"]?.details?.items ?? [];
  for (const request of requests) {
    if (request.statusCode >= 400) {
      failures.push({ route, status: request.statusCode, resourceType: request.resourceType, url: request.url });
    }
  }
}

const uniqueFailures = [...new Map(failures.map((failure) => [`${failure.status}|${failure.url}`, failure])).values()];
const lines = [
  "# Lighthouse Network Error Evidence",
  "",
  `**Failed requests found:** ${failures.length}`,
  "",
  "| Status | Type | URL | Routes |",
  "| ---: | --- | --- | --- |",
  ...uniqueFailures.map((failure) => {
    const routes = failures.filter((item) => item.status === failure.status && item.url === failure.url).map((item) => item.route).join(", ");
    return `| ${failure.status} | ${failure.resourceType ?? "Unknown"} | ${failure.url} | ${routes} |`;
  }),
  "",
];

writeFileSync(resolve(projectRoot, "audits/lighthouse-network-errors.md"), lines.join("\n"), "utf8");
console.log(`Found ${failures.length} failed requests across ${files.length} route audits.`);

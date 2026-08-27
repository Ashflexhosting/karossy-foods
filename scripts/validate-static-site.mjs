/**
 * Static-site release validation for Karossy Foods.
 * Checks that internal static links resolve to declared routes and that stylesheet imports point to existing source files.
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve, dirname, extname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = resolve(projectRoot, "client/src");
const appSource = readFileSync(resolve(sourceRoot, "App.tsx"), "utf8");
const sourceExtensions = new Set([".ts", ".tsx"]);
const allSourceFiles = [];

function collectFiles(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const entryPath = resolve(directory, entry.name);
    if (entry.isDirectory()) collectFiles(entryPath);
    else if (sourceExtensions.has(extname(entry.name))) allSourceFiles.push(entryPath);
  }
}

function resolveSourceImport(fromFile, importPath) {
  if (importPath.startsWith("@/")) return resolve(sourceRoot, importPath.slice(2));
  return resolve(dirname(fromFile), importPath);
}

collectFiles(sourceRoot);

const declaredRoutes = new Set(
  [...appSource.matchAll(/<Route\s+path="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((route) => !route.includes(":")),
);
const failures = [];
const observedLinks = new Set();

for (const filePath of allSourceFiles) {
  const content = readFileSync(filePath, "utf8");
  const displayPath = relative(projectRoot, filePath);

  for (const match of content.matchAll(/import\s+[^;]*?["']([^"']+\.css)["']/g)) {
    const stylesheet = resolveSourceImport(filePath, match[1]);
    if (!existsSync(stylesheet)) failures.push(`${displayPath}: missing stylesheet import ${match[1]}`);
  }

  for (const match of content.matchAll(/href="(\/[^"?#]*)"/g)) {
    const target = match[1];
    observedLinks.add(target);
    if (!declaredRoutes.has(target)) failures.push(`${displayPath}: internal link ${target} has no declared static route`);
  }
}

if (failures.length) {
  console.error("Static site validation failed:\n- " + failures.join("\n- "));
  process.exit(1);
}

console.log(`Static site validation passed: ${declaredRoutes.size} static routes and ${observedLinks.size} static internal links checked across ${allSourceFiles.length} source files.`);

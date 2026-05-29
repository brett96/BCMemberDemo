/**
 * Sync BookCover_Admin_Demo_v73_3.html into public demo assets.
 * Run from web/: npm run sync:demo
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, "..");
const mockupPath = path.resolve(
  webRoot,
  "..",
  "BookCover_Admin_Demo_v73_3.html"
);

if (!fs.existsSync(mockupPath)) {
  console.error("Mockup not found:", mockupPath);
  process.exit(1);
}

const html = fs.readFileSync(mockupPath, "utf8");

const styles = [];
let pos = 0;
while (true) {
  const start = html.indexOf("<style>", pos);
  if (start === -1) break;
  const end = html.indexOf("</style>", start);
  styles.push(html.slice(start + 7, end).trim());
  pos = end + 8;
}

const bodyStart = html.indexOf("<body>") + 6;
const bodyEnd = html.indexOf("</body>");
const body = html.slice(bodyStart, bodyEnd);

const htmlParts = [];
const scriptParts = [];
let remaining = body;
while (remaining.length > 0) {
  const scriptIdx = remaining.indexOf("<script>");
  if (scriptIdx === -1) {
    const chunk = remaining.trim();
    if (chunk) htmlParts.push(chunk);
    break;
  }
  if (scriptIdx > 0) {
    const chunk = remaining.slice(0, scriptIdx).trim();
    if (chunk) htmlParts.push(chunk);
  }
  const scriptEnd = remaining.indexOf("</script>", scriptIdx);
  scriptParts.push(remaining.slice(scriptIdx + 8, scriptEnd).trim());
  remaining = remaining.slice(scriptEnd + 9);
}

fs.writeFileSync(
  path.join(webRoot, "src/styles/demo.css"),
  styles.join("\n\n")
);
fs.writeFileSync(
  path.join(webRoot, "public/demo-shell.html"),
  htmlParts.join("\n\n")
);
fs.writeFileSync(
  path.join(webRoot, "public/demo-runtime.js"),
  scriptParts.join("\n\n")
);
fs.copyFileSync(
  mockupPath,
  path.join(webRoot, "public/bookcover-agent-demo.html")
);

console.log(
  `Synced agent demo: ${styles.length} style blocks, ${htmlParts.length} HTML chunks, ${scriptParts.length} script blocks.`
);

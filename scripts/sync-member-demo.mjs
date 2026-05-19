/**
 * Sync BookCover_Interactive_Demo_21 - MEMBER.html into public demo assets.
 * Run from web/: node scripts/sync-member-demo.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, "..");
const mockupPath = path.resolve(
  webRoot,
  "..",
  "BookCover_Interactive_Demo_21 - MEMBER.html"
);

if (!fs.existsSync(mockupPath)) {
  console.error("Mockup not found:", mockupPath);
  process.exit(1);
}

const html = fs.readFileSync(mockupPath, "utf8");
const styleStart = html.indexOf("<style>") + 7;
const styleEnd = html.indexOf("</style>");
const bodyStart = html.indexOf("<body>") + 6;
const bodyEnd = html.indexOf("<script>");
const scriptStart = html.indexOf("<script>") + 8;
const scriptEnd = html.lastIndexOf("</script>");

fs.writeFileSync(
  path.join(webRoot, "src/styles/demo.css"),
  html.slice(styleStart, styleEnd).trim()
);
fs.writeFileSync(
  path.join(webRoot, "public/demo-shell.html"),
  html.slice(bodyStart, bodyEnd).trim()
);
fs.writeFileSync(
  path.join(webRoot, "public/demo-runtime.js"),
  html.slice(scriptStart, scriptEnd).trim()
);
fs.copyFileSync(
  mockupPath,
  path.join(webRoot, "public/bookcover-member-demo.html")
);

console.log("Synced member demo from mockup HTML.");

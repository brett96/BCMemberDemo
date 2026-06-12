/**
 * Sync BookCover_Interactive_Demo_21 - MEMBER.html into public demo assets.
 * Run from web/: npm run sync:demo
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, "..");

function applyDemoRuntimePatches(source) {
  let out = source;

  if (!out.includes("__bcRenderToken")) {
    out = out.replace(
      "let activeFlow=0,cur=0,busy=false;",
      "let activeFlow=0,cur=0,busy=false;\nlet __bcRenderToken=0;"
    );
    out = out.replace(
      "function render(idx,dir){\n  if(busy)return; busy=true;",
      "function render(idx,dir){\n  if(busy)return;\n  if(!document.getElementById('uc'))return;\n  busy=true;"
    );
    out = out.replace(
      `  const scr=document.getElementById('screen');
  scr.style.cssText='transition:opacity .18s ease,transform .18s ease;opacity:0;transform:translateY('+(dir>0?'-7':'7')+'px');
  setTimeout(()=>{
    scr.innerHTML=inner;
    attachListeners(idx);
    scr.style.cssText='transition:none;opacity:0;transform:translateY('+(dir>0?'7':'-7')+'px)';
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      scr.style.cssText='transition:opacity .24s ease,transform .24s ease;opacity:1;transform:translateY(0)';
      setTimeout(()=>{busy=false;},240);
    }));
  },170);`,
      `  const scr=document.getElementById('screen');
  if(!scr){busy=false;return;}
  scr.style.cssText='transition:opacity .18s ease,transform .18s ease;opacity:0;transform:translateY('+(dir>0?'-7':'7')+'px');
  const __rt=++__bcRenderToken;
  setTimeout(()=>{
    if(__rt!==__bcRenderToken)return;
    scr.innerHTML=inner;
    attachListeners(idx);
    scr.style.cssText='transition:none;opacity:0;transform:translateY('+(dir>0?'7':'-7')+'px)';
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      if(__rt!==__bcRenderToken)return;
      scr.style.cssText='transition:opacity .24s ease,transform .24s ease;opacity:1;transform:translateY(0)';
      setTimeout(()=>{if(__rt===__bcRenderToken)busy=false;},240);
    }));
  },170);`
    );
  }

  if (!out.includes("__bcInitDemo")) {
    const lifecyclePath = path.join(__dirname, "demo-runtime-lifecycle.js");
    out = `${out}\n\n${fs.readFileSync(lifecyclePath, "utf8")}`;
  }

  return out;
}

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

const headEnd = html.indexOf("</head>");
const headHtml = headEnd === -1 ? html : html.slice(0, headEnd);

const styles = [];
let pos = 0;
while (true) {
  const start = headHtml.indexOf("<style>", pos);
  if (start === -1) break;
  const end = headHtml.indexOf("</style>", start);
  styles.push(headHtml.slice(start + 7, end).trim());
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
  applyDemoRuntimePatches(scriptParts.join("\n\n"))
);
fs.copyFileSync(
  mockupPath,
  path.join(webRoot, "public/bookcover-member-demo.html")
);

console.log(
  `Synced member demo: ${styles.length} style blocks, ${htmlParts.length} HTML chunks, ${scriptParts.length} script blocks.`
);

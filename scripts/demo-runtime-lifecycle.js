// BookCover demo lifecycle — Next.js embed: remounts, bfcache, and stale render timers.

function __bcResetDemoState() {
  busy = false;
  __bcRenderToken++;
}

function __bcResumeDemo() {
  if (!document.getElementById("screen")) return;
  const flow = activeFlow;
  const idx = cur;
  __bcResetDemoState();
  const scr = document.getElementById("screen");
  if (scr) scr.style.cssText = "opacity:1;transform:none";
  render(idx, 1);
  if (flow === 0) {
    const ip = document.getElementById("info-panel");
    const ic = document.querySelector(".ipad-col");
    if (ip) ip.style.display = "flex";
    if (ic) ic.style.display = "none";
  }
}

function __bcInitDemo() {
  __bcResetDemoState();
  activeFlow = -1;
  cur = 0;
  switchFlow(0);
}

window.__bcInitDemo = __bcInitDemo;
window.__bcResumeDemo = __bcResumeDemo;

window.addEventListener("pageshow", (event) => {
  if (!event.persisted || !document.getElementById("screen")) return;
  if (activeFlow === 0) {
    if (busy) __bcResetDemoState();
    return;
  }
  const scr = document.getElementById("screen");
  const opacity = scr ? parseFloat(getComputedStyle(scr).opacity || "1") : 1;
  if (busy || opacity < 0.5) __bcResumeDemo();
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") return;
  if (!document.getElementById("screen") || !busy) return;
  __bcResumeDemo();
});

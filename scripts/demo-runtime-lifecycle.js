// BookCover demo lifecycle — Next.js embed: remounts, bfcache, and stale render timers.

function __bcResetDemoState() {
  busy = false;
  __bcRenderToken++;
}

function __bcSyncShellLayout() {
  const shell =
    document.querySelector("#bookcover-demo-root .shell") ||
    document.querySelector(".shell");
  if (shell) shell.classList.toggle("flow-overview", activeFlow === 0);
}

function __bcResumeDemo() {
  const root = document.getElementById("bookcover-demo-root");
  if (!root?.querySelector("#screen")) return;
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
  __bcSyncShellLayout();
}

function __bcInitDemo() {
  const root = document.getElementById("bookcover-demo-root");
  if (!root?.querySelector("#uc")) return;
  __bcResetDemoState();
  activeFlow = -1;
  cur = 0;
  switchFlow(0);
  __bcSyncShellLayout();
}

window.nav = nav;
window.render = render;
window.jump = jump;

const __bcSwitchFlow = switchFlow;
switchFlow = function (n) {
  __bcSwitchFlow(n);
  __bcSyncShellLayout();
};
window.switchFlow = switchFlow;

window.__bcInitDemo = __bcInitDemo;
window.__bcResumeDemo = __bcResumeDemo;

window.addEventListener("pageshow", (event) => {
  if (!event.persisted || !document.getElementById("bookcover-demo-root")?.querySelector("#screen")) {
    return;
  }
  if (activeFlow === 0) {
    if (busy) __bcResetDemoState();
    __bcSyncShellLayout();
    return;
  }
  const scr = document.getElementById("screen");
  const opacity = scr ? parseFloat(getComputedStyle(scr).opacity || "1") : 1;
  if (busy || opacity < 0.5) __bcResumeDemo();
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") return;
  if (!document.getElementById("bookcover-demo-root")?.querySelector("#screen") || !busy) {
    return;
  }
  __bcResumeDemo();
});

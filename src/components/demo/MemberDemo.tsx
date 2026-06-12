"use client";

import { useEffect, useRef } from "react";

function waitForDemoRuntime(timeoutMs = 15000): Promise<void> {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const tick = () => {
      if (typeof window.__bcInitDemo === "function") {
        resolve();
        return;
      }
      if (Date.now() - start > timeoutMs) {
        reject(new Error("Demo runtime failed to load"));
        return;
      }
      window.setTimeout(tick, 25);
    };
    tick();
  });
}

async function ensureDemoRuntime(): Promise<void> {
  if (typeof window.__bcInitDemo === "function") return;

  const existing = document.querySelector('script[data-demo-runtime="1"]');
  if (!existing) {
    await new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "/demo-runtime.js";
      script.async = false;
      script.dataset.demoRuntime = "1";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load demo runtime"));
      document.body.appendChild(script);
    });
  }

  await waitForDemoRuntime();
}

function bindDemoControls(root: HTMLElement, signal: AbortSignal) {
  root.addEventListener(
    "click",
    (event) => {
      const target = event.target as Element;

      if (target.closest("#prev")) {
        event.preventDefault();
        window.nav?.(-1);
        return;
      }

      if (target.closest("#next")) {
        event.preventDefault();
        window.nav?.(1);
        return;
      }

      const tab = target.closest(".flow-tab");
      if (tab) {
        const match = tab.id.match(/^ftab-(\d+)$/);
        if (match) window.switchFlow?.(Number(match[1]));
        return;
      }

      const dot = target.closest(".dot");
      if (dot) {
        const dots = root.querySelectorAll("#dots .dot");
        const idx = Array.from(dots).indexOf(dot);
        if (idx >= 0) window.jump?.(idx);
      }
    },
    { signal }
  );
}

function enhanceMobileLayout(root: HTMLElement) {
  if (!window.matchMedia("(max-width: 900px)").matches) return;

  const shell = root.querySelector(".shell");
  const sidebar = root.querySelector(".sidebar");
  if (!shell || !sidebar || root.querySelector(".mobile-details-toggle")) return;

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "mobile-details-toggle";
  btn.textContent = "Presenter notes";
  btn.setAttribute("aria-expanded", "false");
  btn.addEventListener("click", () => {
    const open = shell.classList.toggle("mobile-sidebar-open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.textContent = open ? "Hide presenter notes" : "Presenter notes";
  });

  sidebar.before(btn);
}

function initDemo() {
  if (typeof window.__bcInitDemo === "function") {
    window.__bcInitDemo();
    return;
  }
  window.switchFlow?.(0);
}

/**
 * Loads the BookCover Member Portal demo shell + runtime from /public.
 * Source: BookCover_Interactive_Demo_21 - MEMBER.html (npm run sync:demo).
 */
export function MemberDemo() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function mount() {
      const res = await fetch("/demo-shell.html");
      if (!res.ok || cancelled) return;
      const shellHtml = await res.text();
      if (cancelled || !rootRef.current) return;

      rootRef.current.innerHTML = shellHtml;
      enhanceMobileLayout(rootRef.current);
      bindDemoControls(rootRef.current, controller.signal);

      await ensureDemoRuntime();
      if (!cancelled) initDemo();
    }

    mount().catch((err) => {
      console.error("[MemberDemo]", err);
    });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  return <div ref={rootRef} id="bookcover-demo-root" className="demo-root" />;
}

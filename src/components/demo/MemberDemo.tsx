"use client";

import { useEffect, useRef } from "react";

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
  if (typeof window.switchFlow === "function") {
    window.switchFlow(0);
  } else if (typeof window.render === "function") {
    window.render(0, 1);
  }
}

/**
 * Loads the BookCover Member Portal demo shell + runtime from /public.
 * Source: BookCover_Interactive_Demo_21 - MEMBER.html (npm run sync:demo).
 */
export function MemberDemo() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    async function mount() {
      const res = await fetch("/demo-shell.html");
      if (!res.ok || cancelled) return;
      const shellHtml = await res.text();
      if (cancelled || !rootRef.current) return;

      rootRef.current.innerHTML = shellHtml;
      enhanceMobileLayout(rootRef.current);

      if (document.querySelector('script[data-demo-runtime="1"]')) {
        initDemo();
        return;
      }

      await new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "/demo-runtime.js";
        script.async = false;
        script.dataset.demoRuntime = "1";
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load demo runtime"));
        document.body.appendChild(script);
      });

      if (!cancelled) initDemo();
    }

    mount().catch((err) => {
      console.error("[MemberDemo]", err);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      ref={rootRef}
      id="bookcover-demo-root"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

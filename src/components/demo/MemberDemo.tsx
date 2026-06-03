"use client";

import { useEffect, useRef } from "react";

function initDemo() {
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

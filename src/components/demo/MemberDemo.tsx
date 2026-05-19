"use client";

import { useEffect, useRef } from "react";

/**
 * Loads the BookCover Member Experience Demo shell + runtime from /public.
 * Logic and screen HTML live in demo-runtime.js (from the interactive mockup).
 */
export function MemberDemo() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let cancelled = false;

    async function mount() {
      const res = await fetch("/demo-shell.html");
      if (!res.ok || cancelled) return;
      const html = await res.text();
      if (cancelled || !rootRef.current) return;

      rootRef.current.innerHTML = html;

      if (document.querySelector('script[data-demo-runtime="1"]')) {
        if (typeof window.render === "function") {
          window.render(0, 1);
        }
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
    }

    mount().catch((err) => {
      console.error("[MemberDemo]", err);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return <div ref={rootRef} id="bookcover-demo-root" />;
}

"use client";

import { usePathname } from "next/navigation";
import { SiteNav } from "./SiteNav";
import { PageTabs } from "./PageTabs";

const HIDE_TABS = ["/contact"];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showTabs = !HIDE_TABS.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  return (
    <>
      <SiteNav />
      {showTabs ? <PageTabs /> : null}
      <main>{children}</main>
    </>
  );
}

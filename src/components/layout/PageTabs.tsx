"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GridIcon,
  SmartphoneIcon,
  MonitorIcon,
  UserIcon,
} from "@/components/icons";

const TABS = [
  { href: "/", label: "What is BookCover?", icon: <GridIcon /> },
  { href: "/member-tools", label: "Member Tools", icon: <SmartphoneIcon /> },
  {
    href: "/retention-platform",
    label: "Retention Platform",
    icon: <MonitorIcon />,
  },
  {
    href: "/consultant",
    label: "Your Dedicated Consultant",
    icon: <UserIcon />,
  },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function PageTabs() {
  const pathname = usePathname();

  return (
    <div className="page-tabs" role="tablist" aria-label="Site sections">
      {TABS.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`page-tab${isActive(pathname, tab.href) ? " on" : ""}`}
          role="tab"
          aria-selected={isActive(pathname, tab.href)}
        >
          {tab.icon}
          {tab.label}
        </Link>
      ))}
    </div>
  );
}

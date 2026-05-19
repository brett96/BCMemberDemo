import Link from "next/link";
import { SITE } from "@/lib/site";
import { ShieldIcon } from "@/components/icons";

export function SiteNav() {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        <div className="nav-mark">
          <ShieldIcon />
        </div>
        <div>
          <div className="nav-name">{SITE.name}</div>
          <div className="nav-sub">{SITE.tagline}</div>
        </div>
      </Link>
      <div className="nav-right">
        <Link href={SITE.contactUrl} className="nav-cta">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

type SeeMoreStripProps = {
  label?: string;
  nextLabel: string;
  href: string;
};

export function SeeMoreStrip({
  label = "Continue Exploring",
  nextLabel,
  href,
}: SeeMoreStripProps) {
  return (
    <div className="see-more-strip">
      <div style={{ textAlign: "center" }}>
        <div className="see-more-lbl-upper">{label}</div>
        <Link href={href} className="see-more-btn">
          {nextLabel}
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { MemberDemo } from "@/components/demo/MemberDemo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

export default function HomePage() {
  return <MemberDemo />;
}

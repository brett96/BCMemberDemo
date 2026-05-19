import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { SiteShell } from "@/components/layout/SiteShell";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnalyticsProvider>
      <SiteShell>{children}</SiteShell>
    </AnalyticsProvider>
  );
}

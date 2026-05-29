import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import "@/styles/demo.css";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <AnalyticsProvider>{children}</AnalyticsProvider>
    </div>
  );
}

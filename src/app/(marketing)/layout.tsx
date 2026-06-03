import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import "@/styles/demo.css";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <div style={{ width: "100%", height: "100%" }}>
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </div>
    </>
  );
}

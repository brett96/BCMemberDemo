import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "@/styles/demo.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${dmSans.className} ${jetbrainsMono.variable}`}
      style={{ width: "100%", height: "100%" }}
    >
      <AnalyticsProvider>{children}</AnalyticsProvider>
    </div>
  );
}

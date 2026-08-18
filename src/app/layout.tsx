import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MaMa Education Center — 小朋友私人教育中心",
  description: "MaMa 教育中心 — 專業聲樂、朗誦、演講培訓，啟發孩子潛能",
  icons: {
    icon: "/OpenClaw0804/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
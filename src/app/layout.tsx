import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Johnny Japan 日式餐廳 — 一期一會・旬之味",
  description: "Johnny Japan 日式料理餐廳，由日籍主廚 Johnny Tanaka 主理，築地直送，職人匠心。",
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
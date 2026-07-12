import type { Metadata } from "next";
import { Vazirmatn, Space_Grotesk } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-vazir",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "هما — آموزش زبان انگلیسی و خلبانی",
  description:
    "آموزشگاه هما، خانه‌ی یادگیری زبان انگلیسی و آماده‌سازی خلبانی — با اساتید مجرب، سامانه آموزش آنلاین و دستیار هوشمند یادگیری.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={`${vazir.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}

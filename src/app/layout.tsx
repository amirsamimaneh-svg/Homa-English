import type { Metadata } from "next";
import { Vazirmatn, Inter } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-vazir",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "هما — یادگیری هوشمند زبان انگلیسی",
  description:
    "هما، پلتفرم مدرن یادگیری زبان انگلیسی — دوره‌های هدفمند، تمرین تعاملی و دستیار هوشمند، همه در یک جا.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={`${vazir.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zac Sites",
  description: "Clean, fast websites for people who don’t do tech.",
  openGraph: {
    title: "Zac Sites",
    description: "Clean, fast websites for people who don’t do tech.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}

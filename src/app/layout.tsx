import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personal } from "@/data/personal";
const d = Space_Grotesk({ subsets: ["latin"], variable: "--f-display" });
const b = Inter({ subsets: ["latin"], variable: "--f-body" });
const m = JetBrains_Mono({ subsets: ["latin"], variable: "--f-mono" });
export const metadata: Metadata = {
  title: `${personal.name} | AI & Machine Learning Engineer`,
  description: personal.bio[0],
  openGraph: { title: `${personal.name} | AI & ML Engineer`, description: personal.tagline, type: "website" },
  twitter: { card: "summary_large_image", title: personal.name, description: personal.tagline },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${d.variable} ${b.variable} ${m.variable}`}><body>{children}</body></html>;
}

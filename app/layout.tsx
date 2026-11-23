import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-jb-mono", subsets: ["latin"] });
const pixel = Press_Start_2P({ variable: "--font-press", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Diogo Santana · QA Engineer",
  description: "Senior QA Engineer in Cork. I break things so your users don't.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${pixel.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}

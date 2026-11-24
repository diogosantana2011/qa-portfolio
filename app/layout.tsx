import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-jb-mono", subsets: ["latin"] });
const pixel = Press_Start_2P({ variable: "--font-press", subsets: ["latin"], weight: "400" });

const title = "Diogo Santana · QA Engineer";
const description = "Senior QA Engineer in Cork. I break things so your users don't.";

export const metadata: Metadata = {
  metadataBase: new URL("https://diogosantana.vercel.app"),
  title,
  description,
  openGraph: { title, description, url: "/", type: "profile" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${pixel.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}

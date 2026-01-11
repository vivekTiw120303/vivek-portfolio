import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll"; // Import New
import Spotlight from "@/components/ui/Spotlight"; // Import New

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Vivek Tiwari | Software Engineer",
  description: "Building scalable systems and immersive gaming experiences. View my production-grade projects.",
  openGraph: {
    title: "Vivek Tiwari | Software Engineer",
    description: "Building scalable systems and immersive gaming experiences.",
    url: "https://your-domain.com", // REPLACE THIS with your actual Vercel URL
    siteName: "Vivek Tiwari Portfolio",
    images: [
      {
        url: "/images/og-image.jpg", // You need to create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: "Vivek Tiwari Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Tiwari | Software Engineer",
    description: "Building scalable systems and immersive gaming experiences.",
    images: ["/images/og-image.jpg"], // Same image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="antialiased bg-black selection:bg-cyan-500/30 selection:text-cyan-200">
        <SmoothScroll>
          <Spotlight />
          <div className="bg-noise" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

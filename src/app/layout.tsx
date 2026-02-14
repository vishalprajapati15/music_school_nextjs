import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Music School - Master the Art of Music",
  description: "A premier music education platform offering comprehensive courses in guitar, piano, drums, vocals, music theory, and production. Learn from expert instructors and transform your musical journey.",
  keywords: ["music school", "music courses", "guitar lessons", "piano lessons", "music education", "online music classes"],
  authors: [{ name: "Music School" }],
  openGraph: {
    title: "Music School - Master the Art of Music",
    description: "Transform your musical journey with expert-led courses in guitar, piano, drums, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}

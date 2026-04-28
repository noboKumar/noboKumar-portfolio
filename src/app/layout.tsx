import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import BlobCursor from "../Components/UI/BlobCursor";
import ScrollToTop from "../Components/UI/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nobo Kumar — Full-Stack Developer",
  description:
    "Personal portfolio of Nobo Kumar, a Full-Stack Developer specializing in React.js, Next.js, TypeScript, Node.js and modern web technologies. Based in Khulna, Bangladesh.",
  keywords: [
    "Nobo Kumar",
    "Full-Stack Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Frontend Developer",
    "Backend Developer",
    "Bangladesh",
  ],
  icons: {
    icon: "/NK-logo.png",
  },

  authors: [{ name: "Nobo Kumar" }],
  openGraph: {
    title: "Nobo Kumar — Full-Stack Developer",
    description:
      "Personal portfolio of Nobo Kumar, a Full-Stack Developer specializing in React.js, Next.js, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <BlobCursor />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}

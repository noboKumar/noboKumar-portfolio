import type { Metadata } from "next";
import { Inter, Space_Grotesk, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import BlobCursor from "../Components/UI/BlobCursor";
import ScrollToTop from "../Components/UI/ScrollToTop";
import { Toaster } from "../Components/UI/sonner";

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

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nobo Kumar Portfolio",
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
    title: "Nobo Kumar Portfolio",
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
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${dmSerifDisplay.variable} antialiased`}
      >
        <BlobCursor />
        <Toaster position="top-center" />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}

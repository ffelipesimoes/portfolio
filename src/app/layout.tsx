import type { Metadata } from "next";
import {  Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mdTaquiImam.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "md",
    "taqui",
    "imam",
    "Md",
    "MD",
    "TAQUI",
    "Taqui",
    "Imam",
    "Imam",
    "Md Taqui Imam",
    "md taqui imam",
    "mdtaqui",
    "mdtaquiimam",
    "taqui imam",
    "Taqui Imam",
    "Taquiimam",
    "portfolio",
    "web developer",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER ",
    "programmer ",
    "MD TAQUI IMAM ",
    "website",
    "@Taquiimam",
    "Taquiimam",
    "taqui developer",
  ],
  authors: [
    {
      name: "Felipe Simões",
      url: "https://github.com/ffelipesimoes",
    },
  ],
  creator: "Felipe Simões",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@Taquiimam14",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body className={`${poppins.variable} ${rubik.variable}`}>
  <main
    className={cn(
      "flex relative screen break-words min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 max-sm:pt-20",
      "text-gray-900" // Texto em cinza escuro para contraste
    )}
    style={{
      backgroundImage: "linear-gradient(to right top, #f0f0f0, #e7e7e7, #dedef, #d6d6d6, #cdcdcd, #c4c4c4, #bbbbbb, #b2b2b2, #a9a9a9, #a0a0a0, #979797, #8e8e8e)",
      backgroundSize: "cover",
    }}
  >
    {/* NAVBAR */}
    <Navbar />
    {children}
  </main>
</body>



    </html>
  );
}

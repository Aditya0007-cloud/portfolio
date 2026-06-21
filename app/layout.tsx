import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap"
});

const siteUrl = "https://aditya-pareek.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aditya Pareek | Software Engineer Portfolio",
    template: "%s | Aditya Pareek"
  },
  description:
    "Premium software engineering portfolio for Aditya Pareek, a full-stack developer building AI and web platforms.",
  keywords: [
    "Aditya Pareek",
    "Software Engineer",
    "Full Stack Developer",
    "Full-Stack Developer",
    "AI & Web Platforms",
    "Next.js Portfolio",
    "VIT-AP"
  ],
  authors: [{ name: "Aditya Pareek" }],
  creator: "Aditya Pareek",
  openGraph: {
    title: "Aditya Pareek | Software Engineer Portfolio",
    description:
      "Full-stack developer, VIT-AP CSE student, and AI platform builder with Decode Labs experience.",
    url: siteUrl,
    siteName: "Aditya Pareek Portfolio",
    images: [
      {
        url: "/hero-profile.png",
        width: 1024,
        height: 1024,
        alt: "Futuristic profile visual for Aditya Pareek"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Pareek | Software Engineer Portfolio",
    description:
      "Full-stack developer building AI-powered hiring tools, finance systems, and config-driven web platforms.",
    images: ["/hero-profile.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#030711",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

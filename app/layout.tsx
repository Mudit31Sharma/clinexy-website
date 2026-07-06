import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientEffects from "@/components/ClientEffects";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Clinexy: Patient Growth & Practice Management Platform",
    template: "%s | Clinexy",
  },
  description:
    "The all-in-one patient growth and practice management platform for solo healthcare professionals. Booking, telehealth, website, local SEO, and reviews in one plan. Free trial.",
  metadataBase: new URL("https://www.clinexy.com"),
  openGraph: {
    type: "website",
    siteName: "Clinexy",
    images: [{ url: "/assets/img/og-default.png" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ClientEffects />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

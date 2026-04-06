import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const title = "Advent HealthCare - Redefining Healthcare Delivery";
const description = "Advent HealthCare is a patient-centric consulting group established in 2003, providing strategic advisory and operational services across India and the world.";
const theme = "#6B0F1A";

export const metadata: Metadata = {
    title,
    description,
    abstract: description,
    authors: [{ name: "Advent Healthcare Pvt Ltd" }],
    appleWebApp: {
        title,
        statusBarStyle: "black-translucent",
    },
    applicationName: title,
    category: "Healthcare",
    icons: {
        icon: "/meta.png",
        shortcut: "/meta.png",
        apple: "/meta.png",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: theme,
    colorScheme: "light dark",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <meta name="theme-color" content={theme} />
        <meta name="description" content={description} />
        <meta name="keywords" content="" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content={title} />
        <meta name="author" content={title} />
        <meta property="og:locale" content="en-US" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/meta.png`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
        <meta property="og:title" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/meta.png`} />
        <meta name="twitter:site" content="@adventhcg" />
        <meta name="twitter:creator" content="@adventhcg" />
        <meta name="twitter:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="linkedin:card" content={`${process.env.NEXT_PUBLIC_BASE_URL}/meta.png`} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content={title} />
        <meta name="msapplication-TileColor" content={theme} />
        <meta name="msapplication-TileImage" content={`${process.env.NEXT_PUBLIC_BASE_URL}/meta.png`} />
        <link href="/meta.png" rel="icon" />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

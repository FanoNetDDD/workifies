import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Workifies - Work Smarter, Manage Better",
  description: "Streamline your workforce management with powerful tools for employee tracking, company management, and seamless communication.",
  keywords: ["workforce management", "employee tracking", "company management", "work hours", "team chat"],
  authors: [{ name: "Workifies Team" }],
  creator: "Workifies",
  metadataBase: new URL("https://workifies.com"),
  openGraph: {
    title: "Workifies - Work Smarter, Manage Better",
    description: "Streamline your workforce management with powerful tools for employee tracking, company management, and seamless communication.",
    url: "https://workifies.com",
    siteName: "Workifies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Workifies - Workforce Management App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workifies - Work Smarter, Manage Better",
    description: "Streamline your workforce management with powerful tools for employee tracking, company management, and seamless communication.",
    images: ["/og-image.jpg"],
    creator: "@workifies",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

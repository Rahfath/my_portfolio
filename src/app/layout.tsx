import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fontDisplay = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Rahfath Sarose — Software Engineer",
  description:
    "Software Engineer portfolio of Rahfath Sarose. Building distributed architectures, event driven microservices and applied AI systems.",
  authors: [{ name: "Rahfath Sarose" }],
  creator: "Rahfath Sarose",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rahfath Sarose — Software Engineer",
    description:
      "Building distributed architectures, event driven microservices and applied AI systems.",
    siteName: "Rahfath Sarose Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahfath Sarose — Software Engineer",
    description:
      "Building distributed architectures, event driven microservices and applied AI systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F6F1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable} scroll-smooth`}
    >
      <body className="bg-background text-foreground font-sans antialiased selection:bg-accent selection:text-background min-h-screen">
        {children}
      </body>
    </html>
  );
}

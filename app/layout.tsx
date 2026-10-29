import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rinanda-portfolio.vercel.app";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rinanda — Computer Network & Software Enthusiast",
    template: "%s | Rinanda",
  },
  description:
    "Portfolio of Rinanda, a Computer Network Engineering Technology graduate focused on web development, networking, cybersecurity, and cloud technologies.",
  keywords: [
    "Rinanda",
    "Ilham Rinanda",
    "Computer Network Engineering",
    "Computer Network Engineering Technology",
    "Web Development",
    "Networking",
    "Cybersecurity",
    "Cloud Technology",
    "Next.js",
    "React",
    "Laravel",
    "Portfolio",
  ],
  authors: [{ name: "Rinanda" }],
  creator: "Rinanda",
  publisher: "Rinanda",
  applicationName: "Rinanda Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Rinanda — Computer Network & Software Enthusiast",
    description:
      "Portfolio of Rinanda, a Computer Network Engineering Technology graduate focused on web development, networking, cybersecurity, and cloud technologies.",
    siteName: "Rinanda Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Rinanda — Computer Network & Software Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rinanda — Computer Network & Software Enthusiast",
    description:
      "Portfolio of Rinanda, focused on web development, networking, cybersecurity, and cloud technologies.",
    images: ["/images/profile.jpg"],
    creator: "@ilhamrnd",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#120f0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} font-sans`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
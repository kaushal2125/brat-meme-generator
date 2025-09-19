import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bratmemes.com"),
  title: {
    default: "BratMemes - Create Viral Brat Memes Instantly | Free Meme Generator",
    template: "%s | BratMemes - Viral Meme Generator",
  },
  description:
    "Create hilarious Brat memes with our easy-to-use meme generator. Choose from 100+ trending templates, add custom text anywhere, and share instantly on social media. Join the viral meme revolution!",
  generator: "BratMemes",
  applicationName: "BratMemes",
  referrer: "origin-when-cross-origin",
  keywords: [
    "brat memes",
    "meme generator",
    "viral memes",
    "funny memes",
    "meme maker",
    "social media memes",
    "charli xcx memes",
    "brat summer",
    "trending memes",
    "meme templates",
    "free meme generator",
    "online meme maker",
    "custom memes",
    "drag and drop meme editor",
    "bollywood memes",
    "hindi memes",
  ],
  authors: [{ name: "BratMemes Team" }],
  creator: "BratMemes",
  publisher: "BratMemes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bratmemes.com",
    siteName: "BratMemes",
    title: "BratMemes - Create Viral Brat Memes Instantly",
    description:
      "Create hilarious Brat memes with our easy-to-use meme generator. Choose from trending templates, add custom text, and share instantly on social media.",
    images: [
      {
        url: "https://bratmemes.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BratMemes - Viral Meme Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BratMemes - Create Viral Brat Memes Instantly",
    description:
      "Create hilarious Brat memes with our easy-to-use meme generator. Choose from trending templates, add custom text, and share instantly on social media.",
    images: ["https://bratmemes.com/og-image.jpg"],
    creator: "@bratmemes",
    site: "@bratmemes",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.jpg",
    apple: "/apple-touch-icon.jpg",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    bing: "your-bing-verification-code",
    facebook: "your-facebook-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

import type React from "react"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.valentinagp.ie"), // Replace with your actual domain
  title: {
    default: "Valentia GP Clinic | Dr. Miguel Casali | Family Doctor Cahersiveen Kerry",
    template: "%s | Valentia GP Clinic | Dr. Miguel Casali",
  },
  description:
    "Valentia GP Clinic in Cahersiveen, Co. Kerry. Dr. Miguel Casali provides comprehensive family healthcare services with 30+ years experience. Book appointments: 066 947 3555",
  keywords: [
    "GP Cahersiveen",
    "Doctor Cahersiveen",
    "Family Doctor Kerry",
    "Dr Miguel Casali",
    "Valentia GP",
    "Medical Centre Cahersiveen",
    "Healthcare Kerry",
    "General Practitioner South Kerry",
    "Diabetes Clinic Kerry",
    "Repeat Prescriptions Kerry",
    "Video Consultations Ireland",
  ],
  authors: [{ name: "Dr. Miguel Casali" }],
  creator: "Valentia GP Clinic",
  publisher: "Valentia GP Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.valentinagp.ie",
    siteName: "Valentia GP Clinic",
    title: "Valentia GP Clinic | Dr. Miguel Casali | Family Doctor Cahersiveen Kerry",
    description:
      "Trusted family healthcare in Cahersiveen, Co. Kerry. Dr. Miguel Casali provides comprehensive medical services with 30+ years experience.",
    images: [
      {
        url: "/images/dr-casali-headshot-new.png",
        width: 1200,
        height: 630,
        alt: "Dr. Miguel Casali - Valentia GP Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentia GP Clinic | Dr. Miguel Casali | Family Doctor Cahersiveen Kerry",
    description:
      "Trusted family healthcare in Cahersiveen, Co. Kerry. Dr. Miguel Casali provides comprehensive medical services with 30+ years experience.",
    images: ["/images/dr-casali-headshot-new.png"],
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
  verification: {
    google: "your-google-verification-code", // You'll need to add this from Google Search Console
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IE">
      <head>
        <link rel="canonical" href="https://www.valentinagp.ie" />
        <meta name="geo.region" content="IE-KY" />
        <meta name="geo.placename" content="Cahersiveen, Kerry, Ireland" />
        <meta name="geo.position" content="51.9479;-10.2242" />
        <meta name="ICBM" content="51.9479, -10.2242" />
        <meta name="DC.title" content="Valentia GP Clinic | Dr. Miguel Casali" />
        <meta name="DC.creator" content="Dr. Miguel Casali" />
        <meta name="DC.subject" content="Healthcare, General Practice, Family Medicine" />
        <meta name="DC.description" content="Family healthcare services in Cahersiveen, Kerry" />
        <meta name="DC.publisher" content="Valentia GP Clinic" />
        <meta name="DC.contributor" content="Dr. Miguel Casali" />
        <meta name="DC.date" content="2024" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://www.valentinagp.ie" />
        <meta name="DC.language" content="en-IE" />
        <meta name="DC.coverage" content="Cahersiveen, Kerry, Ireland" />
        <meta name="DC.rights" content="Copyright Valentia GP Clinic" />
      </head>
      <body className={inter.className}>
        <StructuredData />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

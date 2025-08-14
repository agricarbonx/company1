import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  title: "AgriCarbonX - Soil Carbon Intelligence Platform",
  description:
    "Transform your farm into a carbon credit powerhouse with TerraVision. Advanced soil carbon monitoring and verification for sustainable agriculture.",
  generator: "v0.app",
  keywords: "soil carbon, carbon credits, sustainable agriculture, climate tech, TerraVision",
  authors: [{ name: "AgriCarbonX" }],
  openGraph: {
    title: "AgriCarbonX - Soil Carbon Intelligence Platform",
    description: "Transform your farm into a carbon credit powerhouse with TerraVision.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
      <head>
        <style>{`
html {
  font-family: ${sourceSans.style.fontFamily};
  --font-serif: ${playfair.variable};
  --font-sans: ${sourceSans.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}

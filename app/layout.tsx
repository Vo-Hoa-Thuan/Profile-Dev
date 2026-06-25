import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type React from "react"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Vo Hoa Thuan — Full-Stack & Platform Engineer",
  description:
    "Full-Stack Engineer building production-grade web platforms, backend services, and AI-integrated systems. Experienced with NestJS, FastAPI, PostgreSQL, Docker, and Linux infrastructure.",
  keywords: "Vo Hoa Thuan, Full Stack Engineer, Node.js, NestJS, React, Next.js, FastAPI, Docker, AI Integration, Platform Engineering, Portfolio, Vietnam",
  openGraph: {
    title: "Vo Hoa Thuan — Full-Stack & Platform Engineer",
    description: "Building production-grade systems with NestJS, FastAPI, PostgreSQL, Docker, and AI integration.",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
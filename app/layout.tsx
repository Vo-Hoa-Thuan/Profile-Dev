import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Vo Hoa Thuan - Full Stack & Platform Engineer Portfolio",
  description:
    "Personal portfolio of Vo Hoa Thuan, a Full Stack Engineer specializing in Node.js, NestJS, React, AI-integrated systems, and Linux infrastructure.",
  keywords: "Vo Hoa Thuan, Full Stack Engineer, Node.js, NestJS, React, FastAPI, Docker, AI Integration, Platform Engineering, Portfolio",
  generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'
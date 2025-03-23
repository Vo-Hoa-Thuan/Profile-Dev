import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Vo Hoa Thuan - Full Stack Developer Portfolio",
  description:
    "Personal portfolio website of Vo Hoa Thuan, a Full Stack Developer specializing in Node.js, React, and Mobile development.",
  keywords: "Vo Hoa Thuan, Full Stack Developer, Node.js, React, Mobile Development, Portfolio, Web Developer",
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
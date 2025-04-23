import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from '@vercel/analytics/next';
// import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FinTech Pro - Productos Financieros",
  description: "Catálogo de productos financieros digitales",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        
          {children}
          <Analytics />
      </body>
    </html>
  )
}

import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { CartProvider } from "@/context/cart-context"

export const metadata: Metadata = {
  title: "Krusty Burger",
  description: "Las mejores hamburguesas de Springfield",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}

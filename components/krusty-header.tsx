"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ShoppingBag } from "lucide-react"
import { usePathname } from "next/navigation"
import { useCart } from "@/context/cart-context"

export function KrustyHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { totalItems } = useCart()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="bg-white text-gray-800 sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 md:h-14 md:w-14">
                  <Image src="/krusty-burger-logo.png" alt="Krusty Burger Logo" fill className="object-contain" />
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`font-simpsons text-lg hover:text-simpsons-blue transition-colors ${
                isActive("/") ? "text-simpsons-blue font-bold" : "text-gray-700"
              }`}
            >
              INICIO
            </Link>
            <Link
              href="/menu"
              className={`font-simpsons text-lg hover:text-simpsons-blue transition-colors ${
                isActive("/menu") ? "text-simpsons-blue font-bold" : "text-gray-700"
              }`}
            >
              MENÚ
            </Link>
            <Link
              href="/nosotros"
              className={`font-simpsons text-lg hover:text-simpsons-blue transition-colors ${
                isActive("/nosotros") ? "text-simpsons-blue font-bold" : "text-gray-700"
              }`}
            >
              NOSOTROS
            </Link>
            <Link
              href="/pedido"
              className={`font-simpsons text-lg hover:text-simpsons-blue transition-colors ${
                isActive("/pedido") ? "text-simpsons-blue font-bold" : "text-gray-700"
              }`}
            >
              PEDIDO
            </Link>
            <Link href="/pedido">
              <div className="bg-simpsons-yellow text-simpsons-blue font-bold py-2 px-6 rounded-full font-simpsons shadow-sm hover:shadow-md transition-all duration-300 border-2 border-simpsons-yellow hover:border-simpsons-blue flex items-center gap-2">
                <ShoppingBag size={18} />
                ORDENAR
                {totalItems > 0 && (
                  <span className="bg-simpsons-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-2">
            <Link
              href="/"
              className={`font-simpsons text-lg py-2 px-4 rounded hover:bg-gray-50 ${
                isActive("/") ? "text-simpsons-blue font-bold" : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              INICIO
            </Link>
            <Link
              href="/menu"
              className={`font-simpsons text-lg py-2 px-4 rounded hover:bg-gray-50 ${
                isActive("/menu") ? "text-simpsons-blue font-bold" : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              MENÚ
            </Link>
            <Link
              href="/nosotros"
              className={`font-simpsons text-lg py-2 px-4 rounded hover:bg-gray-50 ${
                isActive("/nosotros") ? "text-simpsons-blue font-bold" : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              NOSOTROS
            </Link>
            <Link
              href="/pedido"
              className={`font-simpsons text-lg py-2 px-4 rounded hover:bg-gray-50 ${
                isActive("/pedido") ? "text-simpsons-blue font-bold" : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              PEDIDO
            </Link>
            <Link href="/pedido" onClick={() => setIsMenuOpen(false)}>
              <div className="bg-simpsons-yellow text-simpsons-blue font-bold py-2 px-4 rounded-full font-simpsons shadow-sm text-center my-2 flex items-center justify-center gap-2">
                <ShoppingBag size={18} />
                ORDENAR
                {totalItems > 0 && (
                  <span className="bg-simpsons-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

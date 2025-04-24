"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface CartItem {
  id: string
  name: string
  price: string
  type?: string
  quantity: number
  image: string
  isVegetarian?: boolean
  isSpicy?: boolean
  isGlutenFree?: boolean
  selectedIngredients?: any[]
  extraPrice?: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: any, type: string | null, quantity: number) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (product: any, type: string | null, quantity: number) => {
    // Crear un ID único para el producto (combinación de nombre, tipo y opciones)
    const options = [
      product.isVegetarian ? "veg" : "",
      product.isSpicy ? "spicy" : "",
      product.isGlutenFree ? "gf" : "",
    ]
      .filter(Boolean)
      .join("-")

    const itemId = `${product.name}-${type || "standard"}-${options}-${Date.now()}`

    // Determinar el precio según el tipo (para hamburguesas) o usar el precio estándar
    let price = ""
    if (type && product.prices) {
      price = product.prices[type]
    } else {
      price = product.price
    }

    // Agregar el nuevo producto al carrito
    setItems([
      ...items,
      {
        id: itemId,
        name: product.name,
        price,
        type,
        quantity,
        image: product.image,
        isVegetarian: product.isVegetarian,
        isSpicy: product.isSpicy,
        isGlutenFree: product.isGlutenFree,
        selectedIngredients: product.selectedIngredients,
        extraPrice: product.extraPrice || 0,
      },
    ])
  }

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }

    setItems(items.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

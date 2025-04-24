"use client"

import { useState } from "react"
import Image from "next/image"
import { QuantitySelector } from "./quantity-selector"
import { IngredientSelector } from "./ingredient-selector"

// Función para obtener los ingredientes según el tipo de producto
const getProductIngredients = (productName: string) => {
  if (productName.includes("PAPAS")) {
    return [
      { id: "1", name: "Papas fritas", price: 0, default: true, isAnimal: false },
      { id: "2", name: "Sal", price: 0, default: true, isAnimal: false },
      { id: "3", name: "Pimienta", price: 0, default: true, isAnimal: false },
      { id: "4", name: "Sazonador Krusty", price: 0, default: true, isAnimal: false },
      { id: "5", name: "Cheddar derretido", price: 800, default: false, isAnimal: true },
      { id: "6", name: "Bacon bits", price: 1000, default: false, isAnimal: true },
      { id: "7", name: "Salsa de ajo", price: 500, default: false, isAnimal: false },
    ]
  } else if (productName.includes("AROS DE CEBOLLA")) {
    return [
      { id: "1", name: "Aros de cebolla", price: 0, default: true, isAnimal: false },
      { id: "2", name: "Rebozado especial Krusty", price: 0, default: true, isAnimal: false },
      { id: "3", name: "Salsa BBQ", price: 0, default: true, isAnimal: false },
      { id: "4", name: "Salsa ranch", price: 500, default: false, isAnimal: true },
      { id: "5", name: "Salsa de queso", price: 800, default: false, isAnimal: true },
      { id: "6", name: "Salsa picante", price: 500, default: false, isAnimal: false },
    ]
  } else if (productName.includes("NUGGETS")) {
    return [
      { id: "1", name: "Nuggets de pollo", price: 0, default: true, isAnimal: true },
      { id: "2", name: "Salsa Krusty", price: 0, default: true, isAnimal: false },
      { id: "3", name: "Salsa BBQ", price: 0, default: false, isAnimal: false },
      { id: "4", name: "Salsa de mostaza y miel", price: 0, default: false, isAnimal: false },
      { id: "5", name: "Salsa picante", price: 500, default: false, isAnimal: false },
      { id: "6", name: "Salsa de queso", price: 800, default: false, isAnimal: true },
    ]
  } else if (productName.includes("ENSALADA")) {
    return [
      { id: "1", name: "Lechuga", price: 0, default: true, isAnimal: false },
      { id: "2", name: "Tomate", price: 0, default: true, isAnimal: false },
      { id: "3", name: "Cebolla", price: 0, default: true, isAnimal: false },
      { id: "4", name: "Zanahoria", price: 0, default: true, isAnimal: false },
      { id: "5", name: "Aderezo", price: 0, default: true, isAnimal: false },
      { id: "6", name: "Queso", price: 800, default: false, isAnimal: true },
      { id: "7", name: "Croutones", price: 500, default: false, isAnimal: false },
      { id: "8", name: "Huevo", price: 700, default: false, isAnimal: true },
    ]
  } else if (
    productName.includes("PASTA") ||
    productName.includes("SPAGHETTI") ||
    productName.includes("RAVIOLES") ||
    productName.includes("FIDEOS")
  ) {
    return [
      { id: "1", name: "Pasta", price: 0, default: true, isAnimal: false },
      { id: "2", name: "Salsa", price: 0, default: true, isAnimal: false },
      { id: "3", name: "Queso rallado", price: 0, default: true, isAnimal: true },
      { id: "4", name: "Albóndigas", price: 0, default: false, isAnimal: true },
      { id: "5", name: "Champiñones", price: 800, default: false, isAnimal: false },
      { id: "6", name: "Aceitunas", price: 500, default: false, isAnimal: false },
      { id: "7", name: "Pesto", price: 800, default: false, isAnimal: false },
    ]
  } else if (
    productName.includes("BEBIDA") ||
    productName.includes("COLA") ||
    productName.includes("CERVEZA") ||
    productName.includes("DUFF") ||
    productName.includes("MOE")
  ) {
    return [
      { id: "1", name: "Bebida", price: 0, default: true, isAnimal: false },
      { id: "2", name: "Hielo", price: 0, default: true, isAnimal: false },
      { id: "3", name: "Limón", price: 0, default: false, isAnimal: false },
      { id: "4", name: "Rodaja de naranja", price: 300, default: false, isAnimal: false },
      { id: "5", name: "Pajita", price: 0, default: true, isAnimal: false },
    ]
  } else if (
    productName.includes("POSTRE") ||
    productName.includes("DONA") ||
    productName.includes("TARTA") ||
    productName.includes("HELADO")
  ) {
    return [
      { id: "1", name: "Postre base", price: 0, default: true, isAnimal: false },
      { id: "2", name: "Cobertura", price: 0, default: true, isAnimal: false },
      { id: "3", name: "Chispas de chocolate", price: 500, default: false, isAnimal: false },
      { id: "4", name: "Crema batida", price: 700, default: false, isAnimal: true },
      { id: "5", name: "Salsa de caramelo", price: 500, default: false, isAnimal: false },
    ]
  } else {
    return [
      { id: "1", name: "Ingrediente principal", price: 0, default: true, isAnimal: false },
      { id: "2", name: "Salsa", price: 0, default: true, isAnimal: false },
      { id: "3", name: "Acompañamiento", price: 0, default: true, isAnimal: false },
    ]
  }
}

interface ProductCardProps {
  product: {
    name: string
    image: string
    description: string
    quote?: string
    price: string
    isVegetarianOption: boolean
    isSpicy: boolean
    isGlutenFree: boolean
  }
  onAddToCart: (product: any, quantity: number, options?: any) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [showQuantitySelector, setShowQuantitySelector] = useState(false)
  const [showIngredientSelector, setShowIngredientSelector] = useState(false)
  const [selectedQuantity, setSelectedQuantity] = useState(1)

  const handlePriceClick = () => {
    setShowQuantitySelector(true)
  }

  const handleQuantityConfirm = (quantity: number) => {
    setSelectedQuantity(quantity)
    setShowQuantitySelector(false)
    setShowIngredientSelector(true)
  }

  const handleQuantityCancel = () => {
    setShowQuantitySelector(false)
  }

  const handleIngredientConfirm = (selectedIngredients: any[], extraPrice: number, options: any) => {
    onAddToCart(
      {
        ...product,
        isVegetarian: options.isVegetarian,
        isSpicy: options.isSpicy,
        isGlutenFree: options.isGlutenFree,
        selectedIngredients,
        extraPrice,
      },
      selectedQuantity,
    )
    setShowIngredientSelector(false)
  }

  const handleIngredientCancel = () => {
    setShowIngredientSelector(false)
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full min-h-[450px]">
      <div className="relative h-56">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-6">
          <h3 className="text-xl font-bold font-simpsons text-simpsons-red mb-3">{product.name}</h3>
          <p className="text-gray-700 mb-3 line-clamp-3">{product.description}</p>
          {product.quote && <p className="italic text-gray-600">"{product.quote}"</p>}
        </div>

        <div className="flex justify-center mt-auto">
          <button
            onClick={handlePriceClick}
            className="bg-simpsons-yellow text-simpsons-blue font-bold py-2 px-6 rounded-full font-simpsons text-lg hover:bg-simpsons-yellow/80 transition-colors"
          >
            {product.price}
          </button>
        </div>

        {showQuantitySelector && (
          <div className="mt-4">
            <QuantitySelector onConfirm={handleQuantityConfirm} onCancel={handleQuantityCancel} />
          </div>
        )}

        {showIngredientSelector && (
          <div className="mt-4">
            <IngredientSelector
              ingredients={getProductIngredients(product.name)}
              onConfirm={handleIngredientConfirm}
              onCancel={handleIngredientCancel}
              productName={product.name}
              initialOptions={{
                isVegetarian: false,
                isSpicy: product.isSpicy,
                isGlutenFree: product.isGlutenFree,
              }}
              availableOptions={{
                hasVegetarianOption: product.isVegetarianOption,
                hasSpicyOption: true,
                hasGlutenFreeOption: product.isGlutenFree,
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

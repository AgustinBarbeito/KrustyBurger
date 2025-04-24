"use client"

import { useState } from "react"
import Image from "next/image"
import { QuantitySelector } from "./quantity-selector"
import { IngredientSelector } from "./ingredient-selector"

// Función para obtener los ingredientes según el tipo de hamburguesa
const getBurgerIngredients = (burgerName: string) => {
  switch (burgerName) {
    case "KRUSTY BURGER DELUXE 🍔":
      return [
        { id: "1", name: "Medallón de carne triple", price: 0, default: true, isAnimal: true },
        { id: "2", name: "Queso cheddar", price: 0, default: true, isAnimal: true },
        { id: "3", name: "Panceta crocante", price: 0, default: true, isAnimal: true },
        { id: "4", name: "Cebolla caramelizada", price: 0, default: true, isAnimal: false },
        { id: "5", name: "Salsa secreta Krusty", price: 0, default: true, isAnimal: false },
        { id: "6", name: "Lechuga", price: 0, default: false, isAnimal: false },
        { id: "7", name: "Tomate", price: 0, default: false, isAnimal: false },
        { id: "8", name: "Pepinillos", price: 0, default: false, isAnimal: false },
        { id: "9", name: "Jalapeños", price: 500, default: false, isAnimal: false },
        { id: "10", name: "Queso extra", price: 800, default: false, isAnimal: true },
        { id: "11", name: "Huevo frito", price: 700, default: false, isAnimal: true },
      ]
    case "LA LISA VEGGIE 🌱":
      return [
        { id: "1", name: "Medallón de garbanzos", price: 0, default: true, isAnimal: false },
        { id: "2", name: "Medallón de espinaca", price: 0, default: true, isAnimal: false },
        { id: "3", name: "Tomate", price: 0, default: true, isAnimal: false },
        { id: "4", name: "Palta", price: 0, default: true, isAnimal: false },
        { id: "5", name: "Alioli vegano", price: 0, default: true, isAnimal: false },
        { id: "6", name: "Lechuga", price: 0, default: false, isAnimal: false },
        { id: "7", name: "Cebolla morada", price: 0, default: false, isAnimal: false },
        { id: "8", name: "Rúcula", price: 300, default: false, isAnimal: false },
        { id: "9", name: "Pepinillos", price: 0, default: false, isAnimal: false },
        { id: "10", name: "Salsa de yogurt", price: 500, default: false, isAnimal: true },
      ]
    case "MOE MACABRA 🔥":
      return [
        { id: "1", name: "Medallón de carne picante", price: 0, default: true, isAnimal: true },
        { id: "2", name: "Queso azul", price: 0, default: true, isAnimal: true },
        { id: "3", name: "Pepinos encurtidos", price: 0, default: true, isAnimal: false },
        { id: "4", name: "Jalapeños", price: 0, default: true, isAnimal: false },
        { id: "5", name: "Salsa picante", price: 0, default: true, isAnimal: false },
        { id: "6", name: "Cebolla", price: 0, default: false, isAnimal: false },
        { id: "7", name: "Lechuga", price: 0, default: false, isAnimal: false },
        { id: "8", name: "Medallón veggie picante", price: 1000, default: false, isAnimal: false },
        { id: "9", name: "Extra jalapeños", price: 500, default: false, isAnimal: false },
        { id: "10", name: "Salsa habanero", price: 600, default: false, isAnimal: false },
      ]
    case "LA BARTMAN 🦇":
      return [
        { id: "1", name: "Medallón empanizado", price: 0, default: true, isAnimal: true },
        { id: "2", name: "Queso cheddar", price: 0, default: true, isAnimal: true },
        { id: "3", name: "Nachos triturados", price: 0, default: true, isAnimal: false },
        { id: "4", name: "Barbacoa dulce", price: 0, default: true, isAnimal: false },
        { id: "5", name: "Cebolla crujiente", price: 0, default: true, isAnimal: false },
        { id: "6", name: "Jalapeños", price: 500, default: false, isAnimal: false },
        { id: "7", name: "Guacamole", price: 800, default: false, isAnimal: false },
        { id: "8", name: "Queso extra", price: 800, default: false, isAnimal: true },
        { id: "9", name: "Bacon", price: 1000, default: false, isAnimal: true },
      ]
    case "LA EXCELENTE 💰":
      return [
        { id: "1", name: "Carne de wagyu", price: 0, default: true, isAnimal: true },
        { id: "2", name: "Queso brie", price: 0, default: true, isAnimal: true },
        { id: "3", name: "Rúcula", price: 0, default: true, isAnimal: false },
        { id: "4", name: "Cebolla morada", price: 0, default: true, isAnimal: false },
        { id: "5", name: "Salsa de mostaza y miel", price: 0, default: true, isAnimal: false },
        { id: "6", name: "Tomate", price: 0, default: false, isAnimal: false },
        { id: "7", name: "Medallón veggie premium", price: 1200, default: false, isAnimal: false },
        { id: "8", name: "Trufa rallada", price: 2000, default: false, isAnimal: false },
        { id: "9", name: "Foie gras", price: 2500, default: false, isAnimal: true },
      ]
    case "LA RADIACTIVA REAL 👑":
      return [
        { id: "1", name: "Medallón de carne", price: 0, default: true, isAnimal: true },
        { id: "2", name: "Queso cheddar", price: 0, default: true, isAnimal: true },
        { id: "3", name: "Jalapeños", price: 0, default: true, isAnimal: false },
        { id: "4", name: "Cebolla crocante", price: 0, default: true, isAnimal: false },
        { id: "5", name: "Salsa picante", price: 0, default: true, isAnimal: false },
        { id: "6", name: "Pepinillos", price: 0, default: false, isAnimal: false },
        { id: "7", name: "Bacon", price: 1000, default: false, isAnimal: true },
        { id: "8", name: "Queso extra", price: 800, default: false, isAnimal: true },
        { id: "9", name: "Salsa habanero", price: 600, default: false, isAnimal: false },
      ]
    default:
      return [
        { id: "1", name: "Medallón de carne", price: 0, default: true, isAnimal: true },
        { id: "2", name: "Lechuga", price: 0, default: true, isAnimal: false },
        { id: "3", name: "Tomate", price: 0, default: true, isAnimal: false },
        { id: "4", name: "Cebolla", price: 0, default: true, isAnimal: false },
        { id: "5", name: "Queso cheddar", price: 0, default: true, isAnimal: true },
        { id: "6", name: "Salsa Krusty", price: 0, default: true, isAnimal: false },
      ]
  }
}

interface BurgerCardProps {
  burger: {
    name: string
    image: string
    description: string
    quote?: string
    prices: {
      simple?: string
      doble?: string
      deluxe?: string
      veggie?: string
    }
    isVegetarianOption: boolean
    isSpicy: boolean
    isGlutenFree: boolean
  }
  onAddToCart: (burger: any, type: string, quantity: number, options?: any) => void
}

export function BurgerCard({ burger, onAddToCart }: BurgerCardProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [showQuantitySelector, setShowQuantitySelector] = useState(false)
  const [showIngredientSelector, setShowIngredientSelector] = useState(false)
  const [selectedQuantity, setSelectedQuantity] = useState(1)

  const handlePriceClick = (type: string) => {
    setSelectedType(type)
    setShowQuantitySelector(true)
  }

  const handleQuantityConfirm = (quantity: number) => {
    setSelectedQuantity(quantity)
    setShowQuantitySelector(false)
    setShowIngredientSelector(true)
  }

  const handleQuantityCancel = () => {
    setShowQuantitySelector(false)
    setSelectedType(null)
  }

  const handleIngredientConfirm = (selectedIngredients: any[], extraPrice: number, options: any) => {
    if (selectedType) {
      onAddToCart(
        {
          ...burger,
          isVegetarian: options.isVegetarian,
          isSpicy: options.isSpicy,
          isGlutenFree: options.isGlutenFree,
          selectedIngredients,
          extraPrice,
        },
        selectedType,
        selectedQuantity,
      )
      setShowIngredientSelector(false)
      setSelectedType(null)
    }
  }

  const handleIngredientCancel = () => {
    setShowIngredientSelector(false)
    setSelectedType(null)
  }

  // Determinar si es veggie basado en el tipo seleccionado
  const isVeggieSelected = selectedType === "veggie"

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full min-h-[450px]">
      <div className="relative h-56">
        <Image
          src={burger.image || "/placeholder.svg"}
          alt={burger.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-6">
          <h3 className="text-xl font-bold font-simpsons text-simpsons-red mb-3">{burger.name}</h3>
          <p className="text-gray-700 mb-3 line-clamp-3">{burger.description}</p>
          {burger.quote && <p className="italic text-gray-600">"{burger.quote}"</p>}
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mt-auto">
          {burger.prices.simple && (
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-gray-700">SIMPLE</span>
              <button
                onClick={() => handlePriceClick("simple")}
                className="font-bold text-simpsons-blue hover:text-simpsons-red transition-colors"
              >
                {burger.prices.simple}
              </button>
            </div>
          )}

          {burger.prices.doble && (
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-gray-700">DOBLE</span>
              <button
                onClick={() => handlePriceClick("doble")}
                className="font-bold text-simpsons-blue hover:text-simpsons-red transition-colors"
              >
                {burger.prices.doble}
              </button>
            </div>
          )}

          {burger.prices.deluxe && (
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-gray-700">DELUXE</span>
              <button
                onClick={() => handlePriceClick("deluxe")}
                className="font-bold text-simpsons-blue hover:text-simpsons-red transition-colors"
              >
                {burger.prices.deluxe}
              </button>
            </div>
          )}

          {burger.prices.veggie && (
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-700">VEGGIE</span>
              <button
                onClick={() => handlePriceClick("veggie")}
                className="font-bold text-simpsons-blue hover:text-simpsons-red transition-colors"
              >
                {burger.prices.veggie}
              </button>
            </div>
          )}
        </div>

        {showQuantitySelector && (
          <div className="mt-4">
            <QuantitySelector onConfirm={handleQuantityConfirm} onCancel={handleQuantityCancel} />
          </div>
        )}

        {showIngredientSelector && (
          <div className="mt-4">
            <IngredientSelector
              ingredients={getBurgerIngredients(burger.name)}
              onConfirm={handleIngredientConfirm}
              onCancel={handleIngredientCancel}
              productName={burger.name}
              initialOptions={{
                isVegetarian: isVeggieSelected,
                isSpicy: burger.isSpicy,
                isGlutenFree: burger.isGlutenFree,
              }}
              availableOptions={{
                hasVegetarianOption: burger.isVegetarianOption,
                hasSpicyOption: true,
                hasGlutenFreeOption: burger.isGlutenFree,
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Check } from "lucide-react"

interface Ingredient {
  id: string
  name: string
  price: number
  default: boolean
  isAnimal?: boolean
}

interface IngredientSelectorProps {
  ingredients: Ingredient[]
  onConfirm: (selectedIngredients: Ingredient[], extraPrice: number, options: any) => void
  onCancel: () => void
  productName: string
  initialOptions?: {
    isVegetarian: boolean
    isSpicy: boolean
    isGlutenFree: boolean
  }
  availableOptions: {
    hasVegetarianOption: boolean
    hasSpicyOption: boolean
    hasGlutenFreeOption: boolean
  }
}

export function IngredientSelector({
  ingredients,
  onConfirm,
  onCancel,
  productName,
  initialOptions = { isVegetarian: false, isSpicy: false, isGlutenFree: false },
  availableOptions = { hasVegetarianOption: false, hasSpicyOption: true, hasGlutenFreeOption: false },
}: IngredientSelectorProps) {
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([])
  const [extraPrice, setExtraPrice] = useState(0)
  const [isVegetarian, setIsVegetarian] = useState(initialOptions.isVegetarian)
  const [isSpicy, setIsSpicy] = useState(initialOptions.isSpicy)
  const [isGlutenFree, setIsGlutenFree] = useState(initialOptions.isGlutenFree)

  // Inicializar ingredientes seleccionados basados en opciones
  useEffect(() => {
    let filteredIngredients = [...ingredients]

    // Si es vegetariano, filtrar ingredientes de origen animal
    if (isVegetarian) {
      filteredIngredients = filteredIngredients.filter((ing) => !ing.isAnimal)
    }

    // Seleccionar solo los ingredientes por defecto
    setSelectedIngredients(filteredIngredients.filter((ing) => ing.default))

    // Resetear precio extra
    setExtraPrice(0)
  }, [ingredients, isVegetarian])

  const toggleIngredient = (ingredient: Ingredient) => {
    if (selectedIngredients.some((ing) => ing.id === ingredient.id)) {
      // Si ya está seleccionado, lo quitamos
      setSelectedIngredients(selectedIngredients.filter((ing) => ing.id !== ingredient.id))

      // Si era un ingrediente por defecto, no restamos precio
      if (ingredient.default) {
        setExtraPrice(extraPrice)
      }
    } else {
      // Si no está seleccionado, lo agregamos
      setSelectedIngredients([...selectedIngredients, ingredient])

      // Si no era un ingrediente por defecto, sumamos precio
      if (!ingredient.default) {
        setExtraPrice(extraPrice + ingredient.price)
      }
    }
  }

  const isSelected = (ingredient: Ingredient) => {
    return selectedIngredients.some((ing) => ing.id === ingredient.id)
  }

  const toggleVegetarian = () => {
    if (!availableOptions.hasVegetarianOption) return

    const newValue = !isVegetarian
    setIsVegetarian(newValue)

    // Si se activa vegetariano, filtrar ingredientes de origen animal
    if (newValue) {
      setSelectedIngredients(selectedIngredients.filter((ing) => !ing.isAnimal))
    }
  }

  const toggleSpicy = () => {
    setIsSpicy(!isSpicy)
  }

  const toggleGlutenFree = () => {
    if (!availableOptions.hasGlutenFreeOption) return
    setIsGlutenFree(!isGlutenFree)
  }

  const handleConfirm = () => {
    onConfirm(selectedIngredients, extraPrice, {
      isVegetarian,
      isSpicy,
      isGlutenFree,
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 animate-fadeIn">
      <h3 className="font-bold text-lg mb-3 text-simpsons-blue">Personaliza tu {productName}</h3>

      {/* Opciones dietéticas */}
      <div className="flex justify-center gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
        <button
          onClick={toggleVegetarian}
          className={`relative w-10 h-10 rounded-full p-1 transition-all ${
            availableOptions.hasVegetarianOption
              ? isVegetarian
                ? "bg-green-100 ring-2 ring-green-500"
                : "bg-gray-100 hover:bg-green-50"
              : "opacity-40 cursor-not-allowed"
          }`}
          disabled={!availableOptions.hasVegetarianOption}
          title={
            availableOptions.hasVegetarianOption
              ? "Opción vegetariana disponible"
              : "No disponible en versión vegetariana"
          }
        >
          <Image
            src="/icon-vegetarian.png"
            alt="Vegetariano"
            fill
            className={`object-contain ${isVegetarian ? "" : "opacity-70"}`}
          />
        </button>

        <button
          onClick={toggleSpicy}
          className={`relative w-10 h-10 rounded-full p-1 transition-all ${
            isSpicy ? "bg-red-100 ring-2 ring-red-500" : "bg-gray-100 hover:bg-red-50"
          }`}
          title={isSpicy ? "Picante intenso (activo)" : "Hacer picante"}
        >
          <Image src="/icon-spicy.png" alt="Picante" fill className={`object-contain ${isSpicy ? "" : "opacity-70"}`} />
        </button>

        <button
          onClick={toggleGlutenFree}
          className={`relative w-10 h-10 rounded-full p-1 transition-all ${
            availableOptions.hasGlutenFreeOption
              ? isGlutenFree
                ? "bg-yellow-100 ring-2 ring-yellow-500"
                : "bg-gray-100 hover:bg-yellow-50"
              : "opacity-40 cursor-not-allowed"
          }`}
          disabled={!availableOptions.hasGlutenFreeOption}
          title={availableOptions.hasGlutenFreeOption ? "Opción sin TACC disponible" : "No disponible sin TACC"}
        >
          <Image
            src="/icon-gluten-free.png"
            alt="Sin TACC"
            fill
            className={`object-contain ${isGlutenFree ? "" : "opacity-70"}`}
          />
        </button>
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-gray-700 mb-2">Ingredientes:</h4>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {ingredients.map((ingredient) => {
            // No mostrar ingredientes de origen animal si es vegetariano
            if (isVegetarian && ingredient.isAnimal) return null

            return (
              <div
                key={ingredient.id}
                className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition-colors ${
                  isSelected(ingredient) ? "bg-simpsons-yellow bg-opacity-20" : "hover:bg-gray-100"
                }`}
                onClick={() => toggleIngredient(ingredient)}
              >
                <div className="flex items-center">
                  {isSelected(ingredient) ? (
                    <Check size={16} className="text-simpsons-blue mr-2" />
                  ) : (
                    <div className="w-4 h-4 border border-gray-300 rounded mr-2"></div>
                  )}
                  <span className="text-gray-800">{ingredient.name}</span>
                </div>

                {!ingredient.default && (
                  <span className="text-sm font-medium text-simpsons-red">+${ingredient.price}</span>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {extraPrice > 0 && (
        <div className="mb-4 p-2 bg-gray-50 rounded-md">
          <p className="text-sm text-gray-700">
            Precio extra por ingredientes adicionales:{" "}
            <span className="font-bold text-simpsons-red">${extraPrice}</span>
          </p>
        </div>
      )}

      <div className="flex justify-between gap-2">
        <button
          onClick={handleConfirm}
          className="flex-1 flex items-center justify-center gap-2 bg-green-100 hover:bg-green-200 text-green-700 font-bold py-2 px-3 rounded-lg transition-colors"
        >
          <div className="relative w-5 h-5">
            <Image src="/icon-confirm.png" alt="Confirmar" fill className="object-contain" />
          </div>
          <span className="text-sm">Confirmar</span>
        </button>

        <button
          onClick={onCancel}
          className="flex-1 flex items-center justify-center gap-2 bg-red-100 hover:bg-red-200 text-red-700 font-bold py-2 px-3 rounded-lg transition-colors"
        >
          <div className="relative w-5 h-5">
            <Image src="/icon-cancel.png" alt="Cancelar" fill className="object-contain" />
          </div>
          <span className="text-sm">Cancelar</span>
        </button>
      </div>
    </div>
  )
}

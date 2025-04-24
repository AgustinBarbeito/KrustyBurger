"use client"

import { useState } from "react"
import Image from "next/image"
import { Minus, Plus } from "lucide-react"

interface QuantitySelectorProps {
  onConfirm: (quantity: number) => void
  onCancel: () => void
  initialQuantity?: number
  maxQuantity?: number
}

export function QuantitySelector({
  onConfirm,
  onCancel,
  initialQuantity = 1,
  maxQuantity = 10,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-3 animate-fadeIn">
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={decreaseQuantity}
          className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          disabled={quantity <= 1}
        >
          <Minus size={16} className={quantity <= 1 ? "text-gray-400" : "text-gray-700"} />
        </button>

        <span className="font-bold text-lg font-simpsons text-simpsons-blue mx-3 min-w-[30px] text-center">
          {quantity}
        </span>

        <button
          onClick={increaseQuantity}
          className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          disabled={quantity >= maxQuantity}
        >
          <Plus size={16} className={quantity >= maxQuantity ? "text-gray-400" : "text-gray-700"} />
        </button>
      </div>

      <div className="flex justify-between gap-2">
        <button
          onClick={() => onConfirm(quantity)}
          className="flex-1 flex items-center justify-center gap-2 bg-green-100 hover:bg-green-200 text-green-700 font-bold py-2 px-3 rounded-lg transition-colors"
        >
          <div className="relative w-5 h-5">
            <Image src="/icon-confirm.png" alt="Confirmar" fill className="object-contain" />
          </div>
          <span className="text-sm">Agregar</span>
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

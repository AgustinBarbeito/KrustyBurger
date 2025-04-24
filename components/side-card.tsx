import Image from "next/image"

interface SideCardProps {
  name: string
  image: string
  description: string
  price: number
}

export function SideCard({ name, image, description, price }: SideCardProps) {
  return (
    <div className="rounded-lg overflow-hidden border-2 border-blue-400 bg-white">
      <div className="p-4 text-center">
        <h4 className="text-xl font-bold text-blue-700 mb-2 font-comic">{name}</h4>
        <div className="relative h-[120px] mb-4">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-contain" />
        </div>
        <p className="text-sm text-gray-700 mb-4">{description}</p>

        <div className="bg-blue-500 py-2 px-4 rounded-lg inline-block">
          <span className="font-bold text-white">${price}</span>
        </div>
      </div>
    </div>
  )
}

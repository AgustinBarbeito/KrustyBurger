interface DrinkItemProps {
  name: string
  price: number
}

export function DrinkItem({ name, price }: DrinkItemProps) {
  return (
    <div className="flex justify-between items-center border-b border-dotted border-blue-300 pb-2">
      <span className="font-medium text-blue-800">{name}</span>
      <span className="font-bold text-blue-800">${price}</span>
    </div>
  )
}

import { BurgerCard } from "./burger-card"
import { SideCard } from "./side-card"
import { DrinkItem } from "./drink-item"

interface MenuSectionProps {
  title: string
  titleColor?: string
  bgColor?: string
}

export function MenuSection({ title, titleColor = "text-blue-700", bgColor = "bg-blue-100" }: MenuSectionProps) {
  // Determinar qué componentes renderizar según el título
  const renderContent = () => {
    switch (title) {
      case "HAMBURGUESAS":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BurgerCard
              name="CHEESEBURGER"
              image="/cheeseburger.png"
              description="Carne, queso, ketchup, mayo, cebolla"
              prices={{
                simple: 7000,
                doble: 9000,
                veggie: 7000,
              }}
              bgColor="bg-orange-400"
            />
            <BurgerCard
              name="MELVIN"
              image="/melvin-burger.png"
              description="Carne, queso, panceta ahumada, cebolla crispy, aderezo Krusty"
              prices={{
                simple: 8500,
                doble: 10500,
              }}
              bgColor="bg-yellow-400"
            />
            <BurgerCard
              name="PARK"
              image="/park-burger.png"
              description="Carne, queso, lechuga, tomate, cebolla, aderezo Krusty"
              prices={{
                simple: 7000,
                doble: 10000,
                veggie: 7000,
              }}
              bgColor="bg-blue-400"
            />
          </div>
        )
      case "ACOMPAÑAMIENTOS":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SideCard
              name="KRUSTY BURGER"
              image="/krusty-burger.png"
              description="Chicken nuggets, queso, lechuga, mayo"
              price={6500}
            />
            <SideCard
              name="PAPAS FRITAS"
              image="/papas-fritas.png"
              description="(Opcional sin sazonador)"
              price={3500}
            />
            <SideCard
              name="CHICKEN NUGGETS"
              image="/chicken-nuggets.png"
              description="6 u. (incluye salsa Krusty)"
              price={5000}
            />
          </div>
        )
      case "BEBIDAS":
        return (
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-700 mb-4 font-comic">BEBIDAS</h3>
            <div className="space-y-2">
              <DrinkItem name="AGUA MINERAL" price={2700} />
              <DrinkItem name="GASEOSA LATA" price={2700} />
              <DrinkItem name="BUDWEISER LATA" price={4000} />
              <DrinkItem name="PATAGONIA LATA" price={5500} />
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className={`mb-8 rounded-lg overflow-hidden ${bgColor}`}>
      <h3 className={`text-2xl font-bold ${titleColor} p-4 font-comic text-center`}>{title}</h3>
      <div className="p-4">{renderContent()}</div>
    </div>
  )
}

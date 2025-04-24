import Image from "next/image"

export function KrustyMenu() {
  const burgers = [
    {
      name: "KRUSTY BURGER",
      image: "/krusty-burger-item.png",
      description: "Carne, queso, ketchup, mayo, cebolla",
      prices: {
        simple: "$7000",
        doble: "$9000",
        veggie: "$7000",
      },
      bgColor: "bg-gradient-to-b from-orange-500 to-orange-400",
      borderColor: "border-orange-600",
      textColor: "text-orange-900",
    },
    {
      name: "COSTIBURGER",
      image: "/costiburger.png",
      description: "Costillitas de cerdo, salsa BBQ, cebolla, pepinillos",
      prices: {
        simple: "$8500",
        doble: "$10500",
      },
      bgColor: "bg-gradient-to-b from-amber-500 to-amber-400",
      borderColor: "border-amber-600",
      textColor: "text-amber-900",
    },
    {
      name: "LA BARTMAN",
      image: "/bartman-burger.png",
      description: "Medallón empanizado y frito, cheddar, nachos triturados, barbacoa dulce y cebolla crujiente",
      prices: {
        simple: "$7000",
        deluxe: "$10000",
        veggie: "$7000",
      },
      bgColor: "bg-gradient-to-b from-blue-600 to-blue-500",
      borderColor: "border-blue-700",
      textColor: "text-blue-900",
    },
  ]

  const sides = [
    {
      name: "PAPAS KRUSTY",
      image: "/papas-fritas.png",
      description: "Papas fritas con sal y pimienta",
      price: "$3500",
      bgColor: "bg-gradient-to-b from-green-500 to-green-400",
      borderColor: "border-green-600",
      textColor: "text-green-900",
    },
    {
      name: "AROS DE CEBOLLA",
      image: "/onion-rings.png",
      description: "Aros de cebolla fritos y crujientes",
      price: "$4000",
      bgColor: "bg-gradient-to-b from-purple-500 to-purple-400",
      borderColor: "border-purple-600",
      textColor: "text-purple-900",
    },
    {
      name: "NUGGETS TOMY Y DALY",
      image: "/nuggets.png",
      description: "6 unidades con salsa a elección",
      price: "$5000",
      bgColor: "bg-gradient-to-b from-red-500 to-red-400",
      borderColor: "border-red-600",
      textColor: "text-red-900",
    },
  ]

  const drinks = [
    {
      name: "BUZZ COLA",
      image: "/buzz-cola.png",
      description: "La bebida oficial de Springfield",
      price: "$2700",
      bgColor: "bg-gradient-to-b from-red-600 to-red-500",
      borderColor: "border-red-700",
      textColor: "text-red-900",
    },
    {
      name: "DUFF BEER",
      image: "/duff-beer.png",
      description: "Cerveza Duff, solo para mayores de 18",
      price: "$4000",
      bgColor: "bg-gradient-to-b from-amber-600 to-amber-500",
      borderColor: "border-amber-700",
      textColor: "text-amber-900",
    },
    {
      name: "FLAMING MOE",
      image: "/flaming-moe.png",
      description: "Bebida exclusiva sin alcohol",
      price: "$5500",
      bgColor: "bg-gradient-to-b from-purple-600 to-purple-500",
      borderColor: "border-purple-700",
      textColor: "text-purple-900",
    },
  ]

  return (
    <section id="menu" className="py-12 bg-gradient-to-b from-simpsons-yellow to-yellow-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold font-simpsons text-simpsons-red drop-shadow-[2px_2px_0_#000] inline-block bg-white py-3 px-8 rounded-xl border-4 border-black transform rotate-[-1deg] shadow-brutal">
            NUESTRO MENÚ
          </h2>
          <div className="mt-6 max-w-2xl mx-auto">
            <p className="text-2xl font-simpsons text-simpsons-blue drop-shadow-[1px_1px_0_#fff]">
              "Si no te gusta, demanda a alguien más" - Krusty el Payaso
            </p>
          </div>
        </div>

        {/* Hamburguesas */}
        <div className="mb-16">
          <div className="relative mb-10">
            <h3 className="text-4xl font-bold font-simpsons text-simpsons-blue text-center drop-shadow-[1px_1px_0_#fff]">
              HAMBURGUESAS
            </h3>
            <div className="absolute left-0 right-0 bottom-0 h-1 bg-simpsons-blue opacity-30 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {burgers.map((burger, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105"
                style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}
              >
                <div className={`${burger.bgColor} p-4 text-center border-b-4 border-black`}>
                  <h4 className="text-2xl font-bold text-white font-simpsons drop-shadow-[1px_1px_0_#000]">
                    {burger.name}
                  </h4>
                </div>
                <div className="bg-white p-6 border-4 border-t-0 border-black">
                  <div className="relative h-56 mb-6 mx-auto max-w-[250px]">
                    <Image
                      src={burger.image || "/placeholder.svg"}
                      alt={burger.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="text-center font-simpsons mb-6 text-gray-700 text-lg">{burger.description}</p>

                  <div className="space-y-3 bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
                    {burger.prices.simple && (
                      <div className="flex justify-between items-center">
                        <span className="font-bold font-simpsons text-lg">SIMPLE</span>
                        <div className="flex items-center">
                          <span className="border-b-2 border-dotted border-gray-400 w-16 mx-2"></span>
                          <span className="font-bold font-simpsons text-lg text-simpsons-red">
                            {burger.prices.simple}
                          </span>
                        </div>
                      </div>
                    )}

                    {burger.prices.doble && (
                      <div className="flex justify-between items-center">
                        <span className="font-bold font-simpsons text-lg">DOBLE</span>
                        <div className="flex items-center">
                          <span className="border-b-2 border-dotted border-gray-400 w-16 mx-2"></span>
                          <span className="font-bold font-simpsons text-lg text-simpsons-red">
                            {burger.prices.doble}
                          </span>
                        </div>
                      </div>
                    )}

                    {burger.prices.deluxe && (
                      <div className="flex justify-between items-center">
                        <span className="font-bold font-simpsons text-lg">DELUXE</span>
                        <div className="flex items-center">
                          <span className="border-b-2 border-dotted border-gray-400 w-16 mx-2"></span>
                          <span className="font-bold font-simpsons text-lg text-simpsons-red">
                            {burger.prices.deluxe}
                          </span>
                        </div>
                      </div>
                    )}

                    {burger.prices.veggie && (
                      <div className="flex justify-between items-center">
                        <span className="font-bold font-simpsons text-lg">VEGGIE</span>
                        <div className="flex items-center">
                          <span className="border-b-2 border-dotted border-gray-400 w-16 mx-2"></span>
                          <span className="font-bold font-simpsons text-lg text-simpsons-red">
                            {burger.prices.veggie}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Acompañamientos */}
        <div className="mb-16">
          <div className="relative mb-10">
            <h3 className="text-4xl font-bold font-simpsons text-simpsons-blue text-center drop-shadow-[1px_1px_0_#fff]">
              ACOMPAÑAMIENTOS
            </h3>
            <div className="absolute left-0 right-0 bottom-0 h-1 bg-simpsons-blue opacity-30 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sides.map((side, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105"
                style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}
              >
                <div className={`${side.bgColor} p-4 text-center border-b-4 border-black`}>
                  <h4 className="text-2xl font-bold text-white font-simpsons drop-shadow-[1px_1px_0_#000]">
                    {side.name}
                  </h4>
                </div>
                <div className="bg-white p-6 border-4 border-t-0 border-black">
                  <div className="relative h-48 mb-6 mx-auto max-w-[200px]">
                    <Image
                      src={side.image || "/placeholder.svg"}
                      alt={side.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="text-center font-simpsons mb-6 text-gray-700 text-lg">{side.description}</p>
                  <div className="flex justify-center">
                    <div className="bg-simpsons-red text-white font-bold py-3 px-8 rounded-full border-2 border-black font-simpsons text-xl shadow-md">
                      {side.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bebidas */}
        <div className="mb-16">
          <div className="relative mb-10">
            <h3 className="text-4xl font-bold font-simpsons text-simpsons-blue text-center drop-shadow-[1px_1px_0_#fff]">
              BEBIDAS
            </h3>
            <div className="absolute left-0 right-0 bottom-0 h-1 bg-simpsons-blue opacity-30 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {drinks.map((drink, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105"
                style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}
              >
                <div className={`${drink.bgColor} p-4 text-center border-b-4 border-black`}>
                  <h4 className="text-2xl font-bold text-white font-simpsons drop-shadow-[1px_1px_0_#000]">
                    {drink.name}
                  </h4>
                </div>
                <div className="bg-white p-6 border-4 border-t-0 border-black">
                  <div className="relative h-48 mb-6 mx-auto max-w-[200px]">
                    <Image
                      src={drink.image || "/placeholder.svg"}
                      alt={drink.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="text-center font-simpsons mb-6 text-gray-700 text-lg">{drink.description}</p>
                  <div className="flex justify-center">
                    <div className="bg-simpsons-red text-white font-bold py-3 px-8 rounded-full border-2 border-black font-simpsons text-xl shadow-md">
                      {drink.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-simpsons-yellow py-5 px-10 rounded-xl inline-block transform rotate-[-2deg] border-4 border-black font-simpsons text-2xl shadow-brutal">
            <p className="text-simpsons-blue mb-2">"Nuestras hamburguesas contienen menos de 50% de aserrín"</p>
            <p className="text-xs text-gray-700">*Según lo permitido por la FDA de Springfield</p>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { KrustyHeader } from "@/components/krusty-header"
import { KrustyFooter } from "@/components/krusty-footer"
import Image from "next/image"
import { BurgerCard } from "@/components/burger-card"
import { ProductCard } from "@/components/product-card"
import { useCart } from "@/context/cart-context"
import { useState } from "react"
import { QuantitySelector } from "@/components/quantity-selector"
import { IngredientSelector } from "@/components/ingredient-selector"

// Lista de ingredientes para la Costiburger
const costiburgerIngredients = [
  { id: "1", name: "Costillitas de cerdo", price: 0, default: true, isAnimal: true },
  { id: "2", name: "Salsa BBQ", price: 0, default: true, isAnimal: false },
  { id: "3", name: "Cebolla", price: 0, default: true, isAnimal: false },
  { id: "4", name: "Pepinillos", price: 0, default: true, isAnimal: false },
  { id: "5", name: "Queso cheddar", price: 0, default: false, isAnimal: true },
  { id: "6", name: "Jalapeños", price: 500, default: false, isAnimal: false },
  { id: "7", name: "Salsa picante", price: 300, default: false, isAnimal: false },
  { id: "8", name: "Cebolla caramelizada", price: 600, default: false, isAnimal: false },
]

export default function MenuPage() {
  const { addItem } = useCart()
  const [showCostiburgerQuantity, setShowCostiburgerQuantity] = useState(false)
  const [showCostiburgerIngredients, setShowCostiburgerIngredients] = useState(false)
  const [selectedCostiburgerType, setSelectedCostiburgerType] = useState<string | null>(null)
  const [selectedCostiburgerQuantity, setSelectedCostiburgerQuantity] = useState(1)

  // Definir los productos con sus propiedades dietéticas
  const burgers = [
    {
      name: "KRUSTY BURGER DELUXE 🍔",
      image: "/krusty-burger-deluxe.png",
      description: "Triple carne, queso cheddar, panceta crocante, cebolla caramelizada y salsa secreta Krusty.",
      quote: "¡Tan buena que olvidás la carne contaminada!",
      prices: {
        simple: "$10500",
        doble: "$13000",
      },
      isVegetarianOption: false,
      isSpicy: false,
      isGlutenFree: true,
    },
    {
      name: "LA LISA VEGGIE 🌱",
      image: "/lisa-veggie.png",
      description: "Hamburguesa de garbanzos y espinaca, con tomate, palta y alioli vegano.",
      quote: "Sin sufrimiento animal, ni sufrimiento del paladar.",
      prices: {
        veggie: "$9500",
      },
      isVegetarianOption: true,
      isSpicy: false,
      isGlutenFree: true,
    },
    {
      name: "MOE MACABRA 🔥",
      image: "/moe-macabra.png",
      description: "Medallón de carne picante, queso azul, pepinos encurtidos y jalapeños.",
      quote: "Oscura como el alma de Moe.",
      prices: {
        simple: "$9800",
        doble: "$12000",
      },
      isVegetarianOption: true,
      isSpicy: true,
      isGlutenFree: true,
    },
    {
      name: "LA BARTMAN 🦇",
      image: "/bartman-burger.png",
      description: "Medallón empanizado y frito, cheddar, nachos triturados, barbacoa dulce y cebolla crujiente.",
      quote: "¡Ay caramba!",
      prices: {
        simple: "$9000",
        deluxe: "$12000",
      },
      isVegetarianOption: false,
      isSpicy: false,
      isGlutenFree: false,
    },
    {
      name: "LA EXCELENTE 💰",
      image: "/burns-burger.png",
      description: "Carne de wagyu (o eso dice el menú), queso brie, rúcula y cebolla morada.",
      quote: "Excelente.",
      prices: {
        simple: "$11500",
        doble: "$14500",
      },
      isVegetarianOption: true,
      isSpicy: false,
      isGlutenFree: true,
    },
    {
      name: "LA RADIACTIVA REAL 👑",
      image: "/radiactiva-burger.png",
      description: "Una bomba de cheddar, jalapeños y cebolla crocante, digna del trono nuclear de Springfield.",
      quote: "¡Brilla en la oscuridad!",
      prices: {
        simple: "$10000",
        doble: "$13000",
      },
      isVegetarianOption: false,
      isSpicy: true,
      isGlutenFree: true,
    },
  ]

  const sides = [
    {
      name: "PAPAS KRUSTY 🍟",
      image: "/papas-fritas.png",
      description: "Papas fritas con sal y pimienta. Crujientes por fuera, suaves por dentro.",
      quote: "¡Las favoritas de Springfield!",
      price: "$4500",
      isVegetarianOption: true,
      isSpicy: false,
      isGlutenFree: true,
    },
    {
      name: "AROS DE CEBOLLA 🧅",
      image: "/onion-rings.png",
      description: "Aros de cebolla fritos y crujientes. Con rebozado especial Krusty.",
      quote: "Redondos como las donas de Homero.",
      price: "$5000",
      isVegetarianOption: true,
      isSpicy: false,
      isGlutenFree: false,
    },
    {
      name: "NUGGETS TOMY Y DALY 🐭",
      image: "/nuggets-tomy-daly.png",
      description: "6 unidades con salsa a elección. Forma de ratón o gato según disponibilidad.",
      quote: "¡Violentamente deliciosos!",
      price: "$6000",
      isVegetarianOption: false,
      isSpicy: false,
      isGlutenFree: false,
    },
  ]

  const drinks = [
    {
      name: "BUZZ COLA 🥤",
      image: "/buzz-cola.png",
      description: "La bebida oficial de Springfield. Con cafeína extra y sabor a felicidad.",
      quote: "¡El secreto está en el jarabe!",
      price: "$3500",
      isVegetarianOption: true,
      isSpicy: false,
      isGlutenFree: true,
    },
    {
      name: "DUFF BEER 🍺",
      image: "/duff-beer.png",
      description: "Cerveza Duff, solo para mayores de 18. Refrescante y con tradición.",
      quote: "¡Oh yeah!",
      price: "$5000",
      isVegetarianOption: true,
      isSpicy: false,
      isGlutenFree: true,
    },
    {
      name: "FLAMING MOE 🔥",
      image: "/flaming-moe.png",
      description: "Bebida exclusiva sin alcohol. Mezcla secreta de jarabes y un toque especial.",
      quote: "La receta robada más famosa.",
      price: "$6500",
      isVegetarianOption: true,
      isSpicy: true,
      isGlutenFree: true,
    },
  ]

  const starters = [
    {
      name: "CROQUETAS DE PATTY Y SELMA 🚬",
      image: "/croquetas-patty-selma.png",
      description: "Ahumadas, intensas y con sabor fuerte… como las tías.",
      quote: "Con un toque de tabaco.",
      price: "$5500",
      isVegetarianOption: false,
      isSpicy: false,
      isGlutenFree: false,
    },
    {
      name: "DEDOS DE OTTO 🎸",
      image: "/dedos-otto.png",
      description: "Bastones de mozzarella rebozados, con salsa picante.",
      quote: "Muy, muy chill...",
      price: "$5800",
      isVegetarianOption: true,
      isSpicy: true,
      isGlutenFree: false,
    },
    {
      name: "MINI PANCHOS DE AYUDANTE DE SANTA 🌭",
      image: "/mini-panchos.png",
      description: "Mini hot dogs con ketchup, mostaza y cebolla frita.",
      quote: "¡Guau, guau!",
      price: "$6200",
      isVegetarianOption: false,
      isSpicy: false,
      isGlutenFree: false,
    },
  ]

  const salads = [
    {
      name: "ENSALADA LISA LA VEGETARIANA 🥗",
      image: "/ensalada-lisa.png",
      description: "Orgánica, fresca, con tofu marinado, zanahoria rallada, rúcula y semillas.",
      quote: "Aprobada por activistas.",
      price: "$7500",
      isVegetarianOption: true,
      isSpicy: false,
      isGlutenFree: true,
    },
    {
      name: "CÉSAR FLANDERS 🙏",
      image: "/cesar-flanders.png",
      description: "Tradicional ensalada César, con crutones bendecidos.",
      quote: "¡Hola-Hola vecino saludable!",
      price: "$7000",
      isVegetarianOption: true,
      isSpicy: false,
      isGlutenFree: false,
    },
    {
      name: "SPRINGFIELD MIXTA 🥚",
      image: "/springfield-mixta.png",
      description: "Lechuga, tomate, cebolla morada, huevo duro y aderezo duff-mostaza.",
      quote: "Simple pero efectiva.",
      price: "$6500",
      isVegetarianOption: true,
      isSpicy: false,
      isGlutenFree: true,
    },
  ]

  const pastas = [
    {
      name: "SPAGHETTI A LO LUIGI 🍝",
      image: "/spaghetti-luigi.png",
      description: "Con albóndigas gigantes y salsa pomodoro estilo Springfield.",
      quote: "¡Mamma mia, qué delicia!",
      price: "$8500",
      isVegetarianOption: false,
      isSpicy: false,
      isGlutenFree: false,
    },
    {
      name: "RAVIOLES DEL ABUELO SIMPSON 👴",
      image: "/ravioles-abuelo.png",
      description: "Rellenos de carne, con salsa de crema y queso...",
      quote: "Con historias incluidas.",
      price: "$9000",
      isVegetarianOption: false,
      isSpicy: false,
      isGlutenFree: false,
    },
    {
      name: "FIDEOS DE BART AL PESTO 😈",
      image: "/fideos-bart.png",
      description: "Traviesos, verdes y deliciosos. Con albahaca fresca y piñones.",
      quote: "¡Cómete mis shorts!",
      price: "$8000",
      isVegetarianOption: true,
      isSpicy: false,
      isGlutenFree: false,
    },
  ]

  const desserts = [
    {
      name: "DONA EXPLOSIVA HOMERO 🍩",
      image: "/dona-homero.png",
      description: "Donas XL con glaseado rosa y chispas multicolor.",
      quote: "Mmm... donas.",
      price: "$4000",
      isVegetarianOption: true,
      isSpicy: false,
      isGlutenFree: false,
    },
    {
      name: "TARTA DE MANZANA DE LA ABUELA BOUVIER 🥧",
      image: "/tarta-abuela.png",
      description: "Clásica, tibia y con aroma a nostalgia.",
      quote: "Receta de cinco generaciones.",
      price: "$4500",
      isVegetarianOption: true,
      isSpicy: false,
      isGlutenFree: false,
    },
    {
      name: "HELADO KRUSTY CREAM 🍦",
      image: "/helado-krusty.png",
      description: "Tres sabores, galletitas rotas y una risa grabada.",
      quote: "¡Jajaja! (risa de payaso)",
      price: "$5000",
      isVegetarianOption: true,
      isSpicy: false,
      isGlutenFree: true,
    },
  ]

  const alcoholicDrinks = [
    {
      name: "CERVEZA DUFF CLÁSICA 🍺",
      image: "/duff-beer.png",
      description: "El alma de Springfield. Fría y espumosa.",
      quote: "La cerveza oficial de Homero Simpson.",
      price: "$5000",
      isVegetarianOption: true,
      isSpicy: false,
      isGlutenFree: true,
    },
    {
      name: "DUFF NEGRA LENNY & CARL 🖤",
      image: "/duff-negra.png",
      description: "Más intensa. Para hablar de la vida en la barra.",
      quote: "Para momentos filosóficos.",
      price: "$5500",
      isVegetarianOption: true,
      isSpicy: false,
      isGlutenFree: true,
    },
    {
      name: "LLAMARADA MOE 🔥",
      image: "/llamarada-moe.png",
      description: "¡Arde al servirlo! Mezcla secreta de licores.",
      quote: "Versión sin fuego disponible.",
      price: "$7000",
      isVegetarianOption: true,
      isSpicy: true,
      isGlutenFree: true,
    },
  ]

  const nonAlcoholicDrinks = [
    {
      name: "BUZZ COLA 🥤",
      image: "/buzz-cola.png",
      description: "La bebida oficial de Springfield. Con cafeína extra.",
      quote: "¡El secreto está en el jarabe!",
      price: "$3500",
      isVegetarianOption: true,
      isSpicy: false,
      isGlutenFree: true,
    },
    {
      name: "MALTEADA DE CHOCOLATE RAFITA 🍫",
      image: "/malteada-rafita.png",
      description: "Muy dulce, con extra crema y chispas de chocolate.",
      quote: "¡Sabe a arcoíris!",
      price: "$4800",
      isVegetarianOption: true,
      isSpicy: false,
      isGlutenFree: true,
    },
    {
      name: "AGUA DE FLANDERS 💧",
      image: "/agua-flanders.png",
      description: "Filtrada. Bendecida. Sospechosamente buena.",
      quote: "Hidratación divina.",
      price: "$3000",
      isVegetarianOption: true,
      isSpicy: false,
      isGlutenFree: true,
    },
  ]

  // Manejadores para la Costiburger
  const handleCostiburgerPriceClick = (type: string) => {
    setSelectedCostiburgerType(type)
    setShowCostiburgerQuantity(true)
  }

  const handleCostiburgerQuantityConfirm = (quantity: number) => {
    setSelectedCostiburgerQuantity(quantity)
    setShowCostiburgerQuantity(false)
    setShowCostiburgerIngredients(true)
  }

  const handleCostiburgerQuantityCancel = () => {
    setShowCostiburgerQuantity(false)
    setSelectedCostiburgerType(null)
  }

  const handleCostiburgerIngredientConfirm = (selectedIngredients: any[], extraPrice: number, options: any) => {
    if (selectedCostiburgerType) {
      const costiburger = {
        name: "COSTIBURGER 🐷",
        image: "/costiburger.png",
        prices: { simple: "$10500", doble: "$13000" },
        selectedIngredients,
        extraPrice,
        isVegetarian: options.isVegetarian,
        isSpicy: options.isSpicy,
        isGlutenFree: options.isGlutenFree,
      }
      addItem(costiburger, selectedCostiburgerType, selectedCostiburgerQuantity)
      setShowCostiburgerIngredients(false)
      setSelectedCostiburgerType(null)
    }
  }

  const handleCostiburgerIngredientCancel = () => {
    setShowCostiburgerIngredients(false)
    setSelectedCostiburgerType(null)
  }

  // Componente para renderizar cada sección de productos
  const ProductSection = ({ title, products, type = "standard" }) => (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <div className="w-2 h-8 bg-simpsons-red rounded-full mr-3"></div>
        <h2 className="text-3xl font-bold font-simpsons text-simpsons-blue">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {type === "burger"
          ? products.map((burger, index) => (
              <BurgerCard
                key={index}
                burger={burger}
                onAddToCart={(product, type, quantity, options) => addItem(product, type, quantity)}
              />
            ))
          : products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                onAddToCart={(product, quantity) => addItem(product, null, quantity)}
              />
            ))}
      </div>
    </div>
  )

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <KrustyHeader />

      <main className="flex-1">
        {/* Leyenda de iconos */}
        <section className="py-6 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8">
                  <Image src="/icon-vegetarian.png" alt="Vegetariano" fill className="object-contain" />
                </div>
                <span className="text-gray-700 font-medium">Opción vegetariana</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8">
                  <Image src="/icon-spicy.png" alt="Picante" fill className="object-contain" />
                </div>
                <span className="text-gray-700 font-medium">Picante intenso</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8">
                  <Image src="/icon-gluten-free.png" alt="Sin TACC" fill className="object-contain" />
                </div>
                <span className="text-gray-700 font-medium">Opción sin TACC</span>
              </div>
            </div>
          </div>
        </section>

        {/* Promoción Especial - COSTIBURGER */}
        <section className="py-12 bg-[#FED90F]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <span className="inline-block bg-simpsons-red text-white font-bold py-1 px-4 rounded-full text-sm mb-2">
                PROMOCIÓN ESPECIAL
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-simpsons text-simpsons-red">¡NUEVA COSTIBURGER! 🐷</h2>
              <p className="text-lg text-gray-700 mt-2">Por tiempo limitado</p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 flex items-center justify-center bg-gray-50">
                  {/* Opción 1: Usando Next.js Image con URL externa */}
                  <div className="relative w-full h-[300px] md:h-[400px]">
                    <Image
                      src="https://i.gifer.com/6zVa.gif"
                      alt="Homer disfrutando Ribwich"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                    />
                  </div>

                  {/* Opción 2 (comentada): Usando iframe directamente */}
                  {/* 
                  <div className="w-full h-[300px] md:h-[400px] relative">
                    <iframe 
                      src="https://gifer.com/embed/6zVa" 
                      width="100%" 
                      height="100%" 
                      style={{ position: 'absolute', top: 0, left: 0 }} 
                      frameBorder="0" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  */}
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold font-simpsons text-simpsons-red mb-3">COSTIBURGER 🐷</h3>
                  <p className="text-gray-700 mb-4">
                    Nuestra promoción estrella inspirada en la McRib. Deliciosas costillitas de cerdo, salsa BBQ,
                    cebolla y pepinillos.
                  </p>
                  <p className="italic text-gray-600 mb-6">"Mmm... costillitas!"</p>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-700">SIMPLE</span>
                      <button
                        onClick={() => handleCostiburgerPriceClick("simple")}
                        className="font-bold text-simpsons-blue hover:text-simpsons-red transition-colors"
                      >
                        $10500
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-700">DOBLE</span>
                      <button
                        onClick={() => handleCostiburgerPriceClick("doble")}
                        className="font-bold text-simpsons-blue hover:text-simpsons-red transition-colors"
                      >
                        $13000
                      </button>
                    </div>
                  </div>

                  {showCostiburgerQuantity && (
                    <div className="mt-4">
                      <QuantitySelector
                        onConfirm={handleCostiburgerQuantityConfirm}
                        onCancel={handleCostiburgerQuantityCancel}
                      />
                    </div>
                  )}

                  {showCostiburgerIngredients && (
                    <div className="mt-4">
                      <IngredientSelector
                        ingredients={costiburgerIngredients}
                        onConfirm={handleCostiburgerIngredientConfirm}
                        onCancel={handleCostiburgerIngredientCancel}
                        productName="COSTIBURGER"
                        initialOptions={{
                          isVegetarian: false,
                          isSpicy: false,
                          isGlutenFree: false,
                        }}
                        availableOptions={{
                          hasVegetarianOption: false,
                          hasSpicyOption: true,
                          hasGlutenFreeOption: false,
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contenido del menú */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            {/* Hamburguesas */}
            <ProductSection title="HAMBURGUESAS" products={burgers} type="burger" />

            {/* Entrantes */}
            <ProductSection title="ENTRANTES" products={starters} />

            {/* Acompañamientos */}
            <ProductSection title="ACOMPAÑAMIENTOS" products={sides} />

            {/* Ensaladas */}
            <ProductSection title="ENSALADAS" products={salads} />

            {/* Pastas */}
            <ProductSection title="PASTAS" products={pastas} />

            {/* Bebidas Alcohólicas */}
            <ProductSection title="BEBIDAS ALCOHÓLICAS" products={alcoholicDrinks} />

            {/* Bebidas sin Alcohol */}
            <ProductSection title="BEBIDAS SIN ALCOHOL" products={nonAlcoholicDrinks} />

            {/* Postres */}
            <ProductSection title="POSTRES" products={desserts} />

            <div className="mt-12 text-center">
              <div className="bg-simpsons-yellow py-5 px-10 rounded-xl inline-block transform rotate-[-2deg] border-4 border-black font-simpsons text-2xl shadow-brutal">
                <p className="text-simpsons-blue mb-2">
                  "Si encuentras un dedo en tu comida, ¡felicidades! ¡Has ganado un cupón de descuento!"
                </p>
                <p className="text-xs text-gray-700">
                  *Krusty Burger no se hace responsable por dedos, uñas, dientes u otros apéndices encontrados en sus
                  productos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <KrustyFooter />
    </div>
  )
}

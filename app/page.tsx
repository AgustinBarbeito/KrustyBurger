import Image from "next/image"
import { KrustyHeader } from "@/components/krusty-header"
import { KrustyFooter } from "@/components/krusty-footer"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <KrustyHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 font-simpsons text-simpsons-red">KRUSTY BURGER</h1>
              <p className="text-xl md:text-2xl font-simpsons mb-6 text-gray-700">
                Las mejores hamburguesas de Springfield, ahora en tu ciudad.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/menu">
                  <div className="bg-simpsons-yellow text-simpsons-blue font-bold py-3 px-8 rounded-full inline-block font-simpsons text-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-simpsons-yellow hover:border-simpsons-blue">
                    VER MENÚ
                  </div>
                </Link>
                <Link href="/nosotros">
                  <div className="bg-white text-simpsons-blue font-bold py-3 px-8 rounded-full inline-block font-simpsons text-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-simpsons-blue">
                    CONÓCENOS
                  </div>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full h-[400px] md:h-[500px]">
                <Image src="/krusty-burger-hero.png" alt="Krusty Burger" fill className="object-contain" priority />
              </div>
            </div>
          </div>
        </section>

        {/* Promoción Section - Diseño mejorado */}
        <section className="py-16 bg-gradient-to-b from-white to-simpsons-yellow/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-simpsons text-simpsons-red drop-shadow-[1px_1px_0_#fff] inline-block bg-white py-2 px-6 rounded-lg border-2 border-simpsons-blue transform rotate-[-1deg] shadow-brutal">
                NUESTRAS ESPECIALIDADES
              </h2>
              <div className="w-24 h-1 bg-simpsons-blue mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch max-w-5xl mx-auto">
              {/* Primera parte - Invitación al menú */}
              <div className="bg-white rounded-xl overflow-hidden shadow-xl flex flex-col h-full transform hover:translate-y-[-5px] transition-all duration-300">
                <div className="relative h-64 overflow-hidden border-b-4 border-simpsons-red">
                  <Image src="/krusty-menu-board.png" alt="Menú Krusty Burger" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold font-simpsons text-simpsons-blue mb-4">
                    DESCUBRE NUESTRO MENÚ COMPLETO
                  </h2>
                  <p className="text-gray-700 mb-6 flex-grow">
                    Disfruta de nuestras Krusty Burgers, Papas Krusty, Nuggets Tomy y Daly y Buzz Cola. Como dice
                    Krusty: "Si no te da un ataque al corazón, ¡te devolvemos tu dinero!" (Oferta no válida en
                    Springfield ni alrededores).
                  </p>
                  <Link href="/menu" className="mt-auto">
                    <div className="bg-simpsons-blue text-white font-bold py-3 px-6 rounded-lg inline-flex items-center gap-2 transition-all duration-300 hover:bg-simpsons-red">
                      <span>VER MENÚ COMPLETO</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Segunda parte - Promoción de COSTIBURGER */}
              <div className="bg-white rounded-xl overflow-hidden shadow-xl flex flex-col h-full transform hover:translate-y-[-5px] transition-all duration-300">
                <div className="bg-[#FED90F] p-5 border-b-4 border-simpsons-red relative">
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className="bg-simpsons-red text-white font-bold py-1 px-6 text-center text-xs transform rotate-45 translate-y-5 translate-x-2 shadow-md">
                      NUEVO
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold font-simpsons text-simpsons-red flex items-center">
                    <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-2">🐷</span>
                    COSTIBURGER
                  </h2>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="relative h-56 mb-6 overflow-hidden rounded-lg">
                    <Image
                      src="/costiburger.png"
                      alt="CostiBurger"
                      fill
                      className="object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow">
                    Nuestra promoción estrella inspirada en la McRib. Deliciosas costillitas de cerdo, salsa BBQ,
                    cebolla y pepinillos. ¡Una experiencia gastronómica que Homero Simpson aprobaría!
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center mt-auto">
                    <div>
                      <span className="text-sm text-gray-500 block">PRECIO ESPECIAL</span>
                      <span className="font-bold font-simpsons text-2xl text-simpsons-red">$8500</span>
                    </div>
                    <Link href="/menu">
                      <div className="bg-simpsons-red text-white font-bold py-2 px-4 rounded-lg hover:bg-simpsons-blue transition-colors duration-300">
                        ORDENAR AHORA
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Nosotros - Previa */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold font-simpsons text-simpsons-blue mb-4">NUESTRA HISTORIA</h2>
              <p className="text-lg max-w-3xl mx-auto mb-8">
                Desde 1989, Krusty Burger ha sido parte de la vida de Springfield. Descubre nuestra historia, nuestros
                éxitos y algunos fracasos memorables como la legendaria "Burger²".
              </p>
              <Link href="/nosotros">
                <div className="bg-simpsons-red text-white font-bold py-3 px-8 rounded-full inline-block font-simpsons text-xl shadow-md hover:shadow-lg transition-all duration-300">
                  CONOCE MÁS
                </div>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/homer-bart-milhouse.png"
                  alt="Clientes disfrutando en Krusty Burger"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image src="/krusty-exterior.png" alt="Krusty Burger Original" fill className="object-cover" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image src="/krusty-familia.png" alt="Experiencia familiar" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <KrustyFooter />
    </div>
  )
}

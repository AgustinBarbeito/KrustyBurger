import Image from "next/image"

export function KrustyPromo() {
  return (
    <section id="promociones" className="py-12 bg-simpsons-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold font-simpsons text-simpsons-yellow drop-shadow-[1px_1px_0_#000] inline-block bg-white py-2 px-6 rounded-lg border-4 border-black transform rotate-[1deg] shadow-brutal">
            PROMOCIONES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-simpsons-yellow rounded-lg overflow-hidden border-4 border-black shadow-brutal transform rotate-[-1deg]">
            <div className="bg-simpsons-red p-3 border-b-4 border-black">
              <h3 className="text-2xl font-bold text-center text-white font-simpsons drop-shadow-[1px_1px_0_#000]">
                ¡MARTES DE RIBWICH!
              </h3>
            </div>
            <div className="p-6 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <div className="relative h-48 w-48 mx-auto">
                  <Image src="/ribwich-homer.gif" alt="Ribwich Promo" fill className="object-contain" />
                </div>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-xl font-simpsons mb-4">
                  ¡Todos los martes Ribwich a mitad de precio! Aprovecha esta oferta por tiempo limitado.
                </p>
                <div className="bg-simpsons-red text-white font-bold py-2 px-6 rounded-full border-2 border-black font-simpsons text-xl shadow-md inline-block">
                  $1.99
                </div>
              </div>
            </div>
          </div>

          <div className="bg-simpsons-yellow rounded-lg overflow-hidden border-4 border-black shadow-brutal transform rotate-[1deg]">
            <div className="bg-simpsons-red p-3 border-b-4 border-black">
              <h3 className="text-2xl font-bold text-center text-white font-simpsons drop-shadow-[1px_1px_0_#000]">
                COMBO FAMILIAR
              </h3>
            </div>
            <div className="p-6 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <div className="relative h-48 w-48 mx-auto">
                  <Image src="/family-combo.png" alt="Family Combo" fill className="object-contain" />
                </div>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-xl font-simpsons mb-4">
                  4 Krusty Burgers, 2 porciones de papas y 4 bebidas. ¡Ideal para toda la familia!
                </p>
                <div className="bg-simpsons-red text-white font-bold py-2 px-6 rounded-full border-2 border-black font-simpsons text-xl shadow-md inline-block">
                  $15.99
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white text-simpsons-red font-bold py-4 px-8 rounded-lg inline-block transform rotate-[-2deg] border-4 border-black font-simpsons text-2xl shadow-brutal">
            ¡DESCARGA NUESTRA APP Y OBTÉN UN KRUSTY BURGER GRATIS!
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"

export function KrustyNosotros() {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-simpsons text-simpsons-red drop-shadow-[1px_1px_0_#000] inline-block bg-white py-2 px-6 rounded-lg border-4 border-black transform rotate-[1deg] shadow-brutal">
            NUESTRA HISTORIA
          </h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-xl font-simpsons">
              "Donde la comida es tan graciosa como un ataque al corazón" - Krusty el Payaso
            </p>
          </div>
        </div>

        {/* Historia principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-3xl font-bold font-simpsons text-simpsons-blue mb-6">
              Desde 1989, alimentando a Springfield
            </h3>
            <p className="text-lg mb-6">
              Krusty Burger abrió sus puertas en 1989 como parte del imperio comercial de Krusty el Payaso. Lo que
              comenzó como una pequeña hamburguesería en Springfield se ha convertido en una cadena internacional con
              más de 300 locales en todo el país.
            </p>
            <p className="text-lg mb-6">
              Nuestra receta secreta, desarrollada por el propio Krusty (y varios químicos alimentarios), ha permanecido
              prácticamente sin cambios durante décadas. ¿Por qué cambiar algo que ya es perfectamente mediocre?
            </p>
            <div className="bg-simpsons-yellow inline-block px-4 py-2 rounded-lg border-2 border-black transform -rotate-1">
              <p className="text-sm italic font-bold">
                "Los ingredientes pueden contener pedazos de payaso" - Advertencia legal
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl transform rotate-2">
            <Image src="/krusty-exterior.png" alt="Krusty Burger Original" fill className="object-cover" />
          </div>
        </div>

        {/* Sección Burger al Cuadrado */}
        <div className="mb-16 bg-gray-50 p-8 rounded-3xl">
          <h3 className="text-3xl font-bold font-simpsons text-simpsons-blue mb-8 text-center">
            BURGER² - NUESTRO MAYOR ÉXITO (Y FRACASO)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 items-center">
            <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/kent-burger-cuadrado.png"
                alt="Kent Brockman reportando el lanzamiento de Burger al Cuadrado"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold font-simpsons text-simpsons-red mb-4">
                El lanzamiento que hizo historia
              </h4>
              <p className="text-lg mb-4">
                En 1994, Krusty Burger revolucionó la industria con el lanzamiento de la "Burger²" (Burger al Cuadrado),
                un concepto innovador que prometía "el doble de sabor con la misma cantidad de carne".
              </p>
              <p className="text-lg mb-4">
                El evento fue cubierto por Kent Brockman de Canal 6, quien describió la hamburguesa como "un avance
                culinario que desafía tanto a la lógica como a las leyes de la física".
              </p>
              <div className="bg-white p-3 rounded-lg border-2 border-simpsons-blue">
                <p className="italic text-gray-700">
                  "Es como comer dos hamburguesas, pero solo pagas por una y media... ¡y solo comes una!" - Krusty el
                  Payaso
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 items-center">
            <div>
              <h4 className="text-2xl font-bold font-simpsons text-simpsons-red mb-4">El concepto revolucionario</h4>
              <p className="text-lg mb-4">
                La Burger² utilizaba un proceso patentado donde la carne de vaca se usaba como alimento para otra vaca,
                que luego era procesada en hamburguesa. Esto creaba una hamburguesa "al cuadrado" - dos vacas en una.
              </p>
              <p className="text-lg mb-4">
                Según los científicos de Krusty Burger, este proceso "duplicaba el sabor a vaca" sin necesidad de usar
                más carne, ahorrando millones en costos de producción.
              </p>
              <div className="bg-white p-3 rounded-lg border-2 border-simpsons-red">
                <p className="italic text-gray-700">
                  "La FDA aún está investigando cómo logramos alimentar vacas con carne de vaca sin violar las leyes de
                  la naturaleza. Nosotros también queremos saberlo." - Departamento Legal de Krusty Burger
                </p>
              </div>
            </div>
            <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/burger-cuadrado-explicacion.png"
                alt="Explicación de Burger al Cuadrado"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-2xl font-bold font-simpsons text-simpsons-red mb-4">El resultado inesperado</h4>
              <p className="text-lg mb-4">
                Aunque inicialmente fue un éxito de ventas, la Burger² tuvo que ser retirada del mercado después de que
                varios clientes reportaran efectos secundarios como "sabor a déjà vu" y "sensación de estar comiendo la
                misma hamburguesa dos veces".
              </p>
              <p className="text-lg mb-4">
                A pesar de las controversias, algunos clientes como Homer Simpson se convirtieron en fanáticos leales de
                la Burger².
              </p>
              <div className="bg-white p-3 rounded-lg border-2 border-simpsons-yellow mb-4">
                <p className="italic text-gray-700">
                  "Después de 15 demandas y una investigación del Departamento de Salud, decidimos que era mejor volver
                  a nuestras hamburguesas tradicionales, que solo causan problemas cardíacos normales." - Krusty el
                  Payaso
                </p>
              </div>
            </div>
            <div className="col-span-1 md:col-span-3 mt-4">
              <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/homer-burger.gif"
                  alt="Homer comiendo hamburguesa"
                  fill
                  className="object-contain bg-white"
                />
              </div>
              <p className="text-center text-gray-700 mt-4 text-lg">
                La reacción de los clientes fue mixta, pero las imágenes de Homer disfrutando la hamburguesa se
                volvieron virales en Springfield.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image src="/krusty-fila.png" alt="Fila en Krusty Burger" fill className="object-cover" />
            </div>
            <p className="text-center text-lg mt-4">
              A pesar de los escándalos, la gente sigue haciendo fila para probar nuestras creaciones.
            </p>
          </div>
        </div>

        {/* Sección de experiencias */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold font-simpsons text-simpsons-blue mb-8 text-center">
            UNA EXPERIENCIA ÚNICA
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 transform hover:scale-105 transition-transform">
              <div className="relative h-64">
                <Image src="/krusty-familia.png" alt="Experiencia familiar" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold font-simpsons text-simpsons-red mb-3">PARA TODA LA FAMILIA</h4>
                <p className="text-gray-700">
                  Un lugar donde las familias pueden disfrutar de comidas económicas en un ambiente lleno de colores y
                  personajes divertidos. ¡Incluso Marge aprueba nuestras ensaladas!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 transform hover:scale-105 transition-transform">
              <div className="relative h-64">
                <Image src="/krusty-juegos.png" alt="Área de juegos" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold font-simpsons text-simpsons-red mb-3">DIVERSIÓN GARANTIZADA</h4>
                <p className="text-gray-700">
                  Nuestras áreas de juegos están diseñadas para que los niños se diviertan mientras los adultos
                  disfrutan de un momento de paz. ¡Piscina de pelotas desinfectada mensualmente!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 transform hover:scale-105 transition-transform">
              <div className="relative h-64">
                <Image src="/krusty-autoservicio.png" alt="Autoservicio" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold font-simpsons text-simpsons-red mb-3">SERVICIO RÁPIDO</h4>
                <p className="text-gray-700">
                  Nuestro autoservicio te permite disfrutar de tu Krusty Burger sin salir del auto. Ideal para cuando
                  tienes prisa o simplemente no quieres que te vean comiendo aquí.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de curiosidades */}
        <div className="bg-gray-50 rounded-3xl p-8 mb-16">
          <h3 className="text-3xl font-bold font-simpsons text-simpsons-blue mb-8 text-center">¿SABÍAS QUE...?</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-simpsons-red rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h4 className="text-xl font-bold font-simpsons text-simpsons-blue mb-2">CLIENTES ILUSTRES</h4>
                <p className="text-gray-700 mb-4">
                  El ex-presidente Bush visitó nuestro local en 1992, declarando que nuestras hamburguesas eran "tan
                  americanas como el pastel de manzana".
                </p>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image src="/krusty-bush.png" alt="Ex-presidente Bush" fill className="object-cover" />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-simpsons-red rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h4 className="text-xl font-bold font-simpsons text-simpsons-blue mb-2">PERSONAL COMPROMETIDO</h4>
                <p className="text-gray-700 mb-4">
                  Nuestros empleados son seleccionados entre los mejores... disponibles. Incluso Moe Szyslak trabajó con
                  nosotros antes de abrir su taberna.
                </p>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image src="/empleados-krusty.png" alt="Empleados Krusty Burger" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cita final */}
        <div className="text-center">
          <div className="inline-block bg-simpsons-blue text-white font-bold py-4 px-8 rounded-lg transform rotate-[-2deg] border-4 border-black font-simpsons text-2xl shadow-brutal max-w-2xl">
            "Si no te gusta nuestra comida, tenemos un formulario de quejas que va directo a la trituradora" - Krusty el
            Payaso
          </div>
        </div>
      </div>
    </section>
  )
}

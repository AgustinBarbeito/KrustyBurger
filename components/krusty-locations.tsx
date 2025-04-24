import Image from "next/image"

export function KrustyLocations() {
  const locations = [
    {
      name: "Krusty Burger Springfield",
      address: "742 Evergreen Terrace, Springfield",
      phone: "555-KRUSTY",
      image: "/springfield-location.png",
    },
    {
      name: "Krusty Burger Centro Comercial",
      address: "Springfield Mall, Local 42",
      phone: "555-BURGER",
      image: "/mall-location.png",
    },
    {
      name: "Krusty Burger Shelbyville",
      address: "Shelbyville Plaza, Shelbyville",
      phone: "555-KRUST",
      image: "/shelbyville-location.png",
    },
  ]

  return (
    <section id="ubicaciones" className="py-12 bg-simpsons-yellow">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold font-simpsons text-simpsons-red drop-shadow-[1px_1px_0_#000] inline-block bg-white py-2 px-6 rounded-lg border-4 border-black transform rotate-[-1deg] shadow-brutal">
            UBICACIONES
          </h2>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-xl font-simpsons">"Estamos en todas partes, como la culpa" - Krusty el Payaso</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden border-4 border-black shadow-brutal transform hover:scale-105 transition-transform"
              style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}
            >
              <div className="bg-simpsons-blue p-3 border-b-4 border-black">
                <h3 className="text-xl font-bold text-center text-simpsons-yellow font-simpsons drop-shadow-[1px_1px_0_#000]">
                  {location.name}
                </h3>
              </div>
              <div className="p-4">
                <div className="relative h-40 mb-4 bg-simpsons-light-blue rounded-lg border-2 border-black">
                  <Image
                    src={location.image || "/placeholder.svg"}
                    alt={location.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="text-center font-simpsons">
                  <p className="mb-1">{location.address}</p>
                  <p className="mb-4">Tel: {location.phone}</p>
                  <div className="bg-simpsons-red text-white font-bold py-2 px-6 rounded-full border-2 border-black font-simpsons shadow-md inline-block">
                    CÓMO LLEGAR
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

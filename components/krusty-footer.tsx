import Image from "next/image"
import Link from "next/link"

export function KrustyFooter() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center gap-3 mb-4">
              <div className="relative h-12 w-12">
                <Image src="/krusty-burger-logo.png" alt="Krusty Burger Logo" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold font-simpsons text-simpsons-red">Krusty Burger</h3>
            </div>
            <p className="text-gray-600">"No es solo una hamburguesa, es una Krusty Burger"</p>
          </div>

          <div>
            <h3 className="text-lg font-bold font-simpsons text-simpsons-blue mb-4">MENÚ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-gray-600 hover:text-simpsons-blue transition-colors">
                  Hamburguesas
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-600 hover:text-simpsons-blue transition-colors">
                  Acompañamientos
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-600 hover:text-simpsons-blue transition-colors">
                  Bebidas
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-600 hover:text-simpsons-blue transition-colors">
                  Postres
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-simpsons text-simpsons-blue mb-4">HORARIOS</h3>
            <p className="text-gray-600 mb-2">Lunes a Viernes: 10:00 - 22:00</p>
            <p className="text-gray-600 mb-2">Sábados y Domingos: 11:00 - 23:00</p>
            <p className="text-gray-600">Feriados: 12:00 - 21:00</p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold font-simpsons text-simpsons-blue mb-4">CONTACTO</h3>
            <p className="text-gray-600 mb-2">Teléfono: 555-KRUSTY</p>
            <p className="text-gray-600 mb-4">Email: info@krustyburger.com</p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link href="#" className="bg-gray-100 p-2 rounded-full hover:bg-simpsons-yellow transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="bg-gray-100 p-2 rounded-full hover:bg-simpsons-yellow transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="bg-gray-100 p-2 rounded-full hover:bg-simpsons-yellow transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Krusty Burger. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            "Los ingredientes pueden contener pedazos de payaso" - Advertencia legal
          </p>
        </div>
      </div>
    </footer>
  )
}

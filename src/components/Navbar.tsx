
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Icono menú y título */}
        <div className="flex items-center gap-4">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <h1
            className="text-xl font-bold text-gray-800 cursor-pointer"
            onClick={() => handleScroll("hero")}
          >
            Casa Pinito
          </h1>
        </div>

        {/* Botón "Reservar" fijo a la derecha */}
        <button
          onClick={() => handleScroll("availability")}
          className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-md"
        >
          Reservar
        </button>
      </div>

      {/* Menú desplegable lateral */}
      {menuOpen && (
        <div className="absolute left-0 top-full bg-white shadow-md border w-fit min-w-[220px] px-4 py-2 space-y-1 text-base">
          <button
            onClick={() => handleScroll("availability")}
            className="block w-full text-left px-4 py-2 bg-amber-600 text-white font-semibold"
          >
            Reservar
          </button>
          <button
            onClick={() => handleScroll("caracteristicas")}
            className="block w-full text-left px-4 py-2 hover:bg-amber-100 text-gray-700 transition font-medium"
          >
            Descubre nuestra casa
          </button>
          <button
            onClick={() => handleScroll("entorno")}
            className="block w-full text-left px-4 py-2 hover:bg-amber-100 text-gray-700 transition font-medium"
          >
            Entorno y actividades
          </button>
          <button
            onClick={() => {
              setActiveTab("rooms");
              handleScroll("espacios");
            }}
            className="block w-full text-left px-4 py-2 hover:bg-amber-100 text-gray-700 transition font-medium"
          >
            Habitaciones
          </button>
          <button
            onClick={() => {
              setActiveTab("common");
              handleScroll("espacios");
            }}
            className="block w-full text-left px-4 py-2 hover:bg-amber-100 text-gray-700 transition font-medium"
          >
            Espacios comunes
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="block w-full text-left px-4 py-2 hover:bg-amber-100 text-gray-700 transition font-medium"
          >
            Contacto
          </button>
        </div>
      )}
    </nav>
  );
}

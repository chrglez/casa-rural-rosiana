
// src/RosianaRuralHouse.tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  BedDouble,
  Sun,
  Sprout,
  Waves,
  MapPin,
  Users,
  Ruler,
  BedSingle,
} from "lucide-react";
import { CalendarDays } from "lucide-react";
import Navbar from "@/components/Navbar";

// Datos de la casa
const houseFeatures = [
  { icon: <Home className="h-10 w-10" />, title: "Casa Típica Canaria", description: "Arquitectura tradicional canaria restaurada con cuidado" },
  { icon: <BedDouble className="h-10 w-10" />, title: "4 Habitaciones", description: "Capacidad para hasta 8 personas con todas las comodidades" },
  { icon: <Sun className="h-10 w-10" />, title: "Terraza panorámica", description: "Vistas al barranco de Tirajana y el macizo de Amurga" },
  { icon: <Sprout className="h-10 w-10" />, title: "Patio Canario", description: "Un espacio tradicional para disfrutar" },
  { icon: <Waves className="h-10 w-10" />, title: "Piscina", description: "Con vistas panorámicas a los paisajes canarios" },
  { icon: <MapPin className="h-10 w-10" />, title: "Ubicación privilegiada", description: "En Santa Lucía de Tirajana, Gran Canaria" },
];

const rooms = [
  { id: 1, name: "Dormitorio junto a terraza", people: 2, size: 30, bed: "doble", image: "/habitaciones/habitacion_terraza.jpg" },
  { id: 2, name: "Dormitorio superior", people: 2, size: 40, bed: "doble", image: "/habitaciones/habitacion_cocina.jpg" },
  { id: 3, name: "Dormitorio junto a patio", people: 2, size: 30, bed: "doble", image: "/habitaciones/habitacion_patio.jpg" },
  { id: 4, name: "Dormitorio junto a salón", people: 2, size: 30, bed: "individuales", image: "/habitaciones/habitacion_salon.jpg" },
];

const commonAreas = [
  { id: 1, name: "Salón", size: 50, image: "/comunes/salon.jpg" },
  { id: 2, name: "Terraza panorámica", size: 70, image: "/comunes/terraza.jpg" },
  { id: 3, name: "Patio Canario", size: 50, image: "/comunes/patio.png" },
  { id: 4, name: "Piscina", size: 0, image: "/comunes/piscina.jpg" },
];

export default function RosianaRuralHouse() {

  const [activeTab, setActiveTab] = useState("common");
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="w-full font-sans bg-white text-gray-900 scroll-smooth">

    <Navbar setActiveTab={setActiveTab} />
      {/* Hero */}
      <header id="hero" className="relative w-screen h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/availability.jpg')" }}>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-black/20 to-black/30 z-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 text-white">
          <div className="bg-black/30 p-6 rounded-md max-w-3xl">
            <h1 className="text-white text-5xl md:text-6xl font-bold drop-shadow mb-4">Casa Pinito</h1>
            <p className="text-white text-xl md:text-2xl mb-6">Una auténtica casa canaria con vistas al barranco de Tirajana y el macizo de Amurga</p>
            <Button className="bg-amber-600 hover:bg-amber-700 text-lg py-3 px-8 text-white">Ver disponibilidad</Button>
          </div>
        </div>
      </header>

      {/* Características */}
      <section id="caracteristicas" className="py-16 px-6 bg-blue-100">
        <h2 className="text-3xl font-bold text-center mb-12">Descubre nuestra casa rural</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {houseFeatures.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg">
              <div className="text-amber-600 mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disponibilidad */}
      <section id="availability" className="relative bg-cover bg-center bg-no-repeat text-white py-24 px-6" style={{ backgroundImage: "url('/banner.jpg')" }}>
        <div className="absolute inset-0 bg-black/70 "></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Consulta disponibilidad</h2>
          <p className="mb-8 text-lg">Pronto podrás comprobar fechas disponibles y reservar directamente desde nuestra web.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-gray-900 opacity-50 pointer-events-none">
            <input type="date" className="w-full p-4 rounded-md shadow-sm border" disabled />
            <input type="date" className="w-full p-4 rounded-md shadow-sm border" disabled />
            <button className="bg-amber-600 text-white font-semibold py-4 rounded-md cursor-not-allowed">Consultar</button>
          </div>
          <p className="mt-4 text-sm italic text-white/80">Funcionalidad en desarrollo · Disponible próximamente</p>
          <div className="mt-8">
            <button className="bg-white text-amber-700 font-semibold py-3 px-6 rounded-md hover:bg-amber-100 transition">Avísame cuando esté disponible</button>
          </div>
        </div>
      </section>

      {/* Entorno y actividades */}
      <section id="entorno" className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Entorno y actividades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="w-full h-64 overflow-hidden rounded-xl">
            <img src="/entorno/entorno1.jpg" alt="Paisaje cercano" className="w-full h-full object-cover object-center" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center text-center">
            <p className="text-gray-700 text-lg">Nuestra casa rural está situada entre los encantadores pueblos de <strong>Santa Lucía de Tirajana</strong> y <strong>Tunte</strong>, en el corazón de la isla de Gran Canaria.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center text-center">
            <p className="text-gray-700 text-lg">El entorno natural permite actividades como <strong>senderismo</strong>, rutas en <strong>bicicleta</strong>, y momentos de relax en nuestra <strong>piscina</strong>.</p>
          </div>
          <div className="w-full h-64 overflow-hidden rounded-xl">
            <img src="/entorno/entorno2.jpg" alt="Actividades al aire libre" className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </section>

      {/* Espacios */}
      <section id="espacios" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Nuestros espacios</h2>
          <div className="flex justify-center mb-8">
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <button onClick={() => setActiveTab("rooms")} className={`px-6 py-3 font-medium ${activeTab === "rooms" ? "bg-amber-600 text-white" : "bg-white text-gray-700"}`}>Habitaciones</button>
              <button onClick={() => setActiveTab("common")} className={`px-6 py-3 font-medium ${activeTab === "common" ? "bg-amber-600 text-white" : "bg-white text-gray-700"}`}>Espacios comunes</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeTab === "rooms"
              ? rooms.map((room) => (
                  <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                      <div className="flex gap-4 text-gray-500 text-sm">
                        <div className="flex items-center gap-1"><Users className="h-4 w-4" /> {room.people} personas</div>
                        <div className="flex items-center gap-1"><Ruler className="h-4 w-4" /> {room.size} m²</div>
                        <div className="flex items-center gap-1">{room.bed === "doble" ? <BedDouble className="h-4 w-4" /> : <BedSingle className="h-4 w-4" />} {room.bed}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              : commonAreas.map((area) => (
                  <Card key={area.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <img src={area.image} alt={area.name} className="w-full h-64 object-cover" />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{area.name}</h3>
                      {area.size > 0 && <p className="text-gray-500 text-sm flex items-center gap-1"><Ruler className="h-4 w-4" /> {area.size} m²</p>}
                    </CardContent>
                  </Card>
                ))}
          </div>
        </div>
      </section>

{/* Contacto y localización */}
<section id="contact" className="relative bg-gray-100 py-16 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    {/* Formulario */}
    <div>
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      <p className="text-gray-700 mb-6">
        ¿Tienes alguna duda? Escríbenos y te responderemos lo antes posible.
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Nombre"
          className="w-full p-3 rounded-md border border-gray-300"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full p-3 rounded-md border border-gray-300"
        />
        <textarea
          rows={4}
          placeholder="Mensaje"
          className="w-full p-3 rounded-md border border-gray-300"
        />
        <button
          type="submit"
          className="bg-amber-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-amber-700 transition"
        >
          Enviar mensaje
        </button>
      </form>
    </div>

    {/* Mapa y datos */}
    <div>
      <div className="w-full h-64 rounded-md overflow-hidden mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3525.4847347211607!2d-15.548800646276115!3d27.917781371841293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1744718774274!5m2!1ses!2ses"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="text-gray-700 text-sm space-y-2">
        <p><strong>Dirección:</strong> Santa Lucía de Tirajana, Gran Canaria</p>
        <p><strong>Teléfono:</strong> +34 600 123 456</p>
        <p><strong>Email:</strong> info@rosianarural.com</p>
        <p><strong>Check-in:</strong> 14:00 · <strong>Check-out:</strong> 11:00</p>
      </div>
    </div>
  </div>
</section>

<div className="fixed bottom-6 right-6 z-50 group">
  <button
    onClick={() => {
      const section = document.getElementById("availability");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }}
    className={`bg-amber-600 text-white p-3 rounded-full shadow-lg hover:bg-amber-700 transition-opacity duration-300 ${
      showScrollButton ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
    aria-label="Ir a disponibilidad"
  >
    <CalendarDays className="h-6 w-6" />
  </button>

  {/* Tooltip centrado arriba */}
  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 text-sm text-white bg-gray-800 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
    Ver disponibilidad
  </div>
</div>

    </div>
  );
}

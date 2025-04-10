
// src/RosianaRuralHouse.tsx
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar, Star, MapPin, Home, Coffee, Users, Droplets, Sun } from "lucide-react";

interface Room {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface Area {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface Feature {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
}

const houseFeatures: Feature[] = [
  { id: 1, icon: <Home className="h-6 w-6" />, title: "Casa Típica Canaria", description: "Arquitectura tradicional canaria restaurada con cuidado" },
  { id: 2, icon: <Users className="h-6 w-6" />, title: "4 Habitaciones", description: "Capacidad para hasta 8 personas con todas las comodidades" },
  { id: 3, icon: <Sun className="h-6 w-6" />, title: "Terraza panorámica", description: "Vistas al barranco de Tirajana y el macizo de Amurga" },
  { id: 4, icon: <Coffee className="h-6 w-6" />, title: "Patio Canario", description: "Un espacio tradicional para disfrutar al aire libre" },
  { id: 5, icon: <Droplets className="h-6 w-6" />, title: "Piscina", description: "Con vistas panorámicas a los paisajes canarios" },
  { id: 6, icon: <MapPin className="h-6 w-6" />, title: "Ubicación privilegiada", description: "En Santa Lucía de Tirajana, Gran Canaria" },
];

const rooms: Room[] = [
  { id: 1, name: "Habitación Principal", description: "Amplia con cama doble y vistas a la montaña", image: "/api/placeholder/500/300" },
  { id: 2, name: "Habitación Doble", description: "Dos camas individuales y decoración rústica", image: "/api/placeholder/500/300" },
  { id: 3, name: "Habitación Familiar", description: "Espaciosa con acceso a la terraza", image: "/api/placeholder/500/300" },
  { id: 4, name: "Habitación Acogedora", description: "Interior acogedor con vistas al jardín", image: "/api/placeholder/500/300" },
];

const commonAreas: Area[] = [
  { id: 1, name: "Patio Canario", description: "Patio tradicional canario con plantas autóctonas y techo abierto", image: "/api/placeholder/500/300" },
  { id: 2, name: "Terraza Panorámica", description: "Impresionantes vistas al barranco de Tirajana y el macizo de Amurga", image: "/api/placeholder/500/300" },
  { id: 3, name: "Piscina", description: "Piscina al aire libre con tumbonas y fabulosas vistas panorámicas", image: "/api/placeholder/500/300" },
  { id: 4, name: "Sala de Estar", description: "Amplio espacio común con elementos decorativos canarios", image: "/api/placeholder/500/300" },
];

const reviews: Review[] = [
  { id: 1, name: "María García", comment: "Una experiencia única en un entorno natural increíble. Las vistas desde la terraza son impresionantes.", rating: 5 },
  { id: 2, name: "Juan Rodríguez", comment: "Casa con mucho encanto y perfectamente equipada. El patio canario es un espacio maravilloso para desayunar.", rating: 5 },
  { id: 3, name: "Laura Martínez", comment: "Lugar perfecto para desconectar y disfrutar de la naturaleza. La piscina con vistas al barranco es espectacular.", rating: 4 },
];

export default function RosianaRuralHouse() {
  const [activeTab, setActiveTab] = useState<string>("rooms");

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
    ));
  };

  return (
    <div className="font-sans bg-white text-gray-900 scroll-smooth">
      {/* Aquí insertas el JSX completo como lo tenías en tu diseño anterior */}
      {/* Banner, navegación, secciones de características, tabs, galería, opiniones, mapa, contacto y footer */}
    </div>
  );
}

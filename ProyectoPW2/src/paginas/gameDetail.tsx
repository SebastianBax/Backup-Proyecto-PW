import React from "react";
import { useParams } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import "../paginas/style.css";

type JuegoDetalle = {
  id: number;
  titulo: string;
  descripcion: string;
  estrellas: number;
  imagenes: string[];
  trailer: string;
  resenas: string[];
  precio: number;
};

const juegos: Record<number, JuegoDetalle> = {
  1: {
    id: 1,
    titulo: "Elden Ring",
    descripcion: "Un RPG de acción en mundo abierto creado por FromSoftware y George R. R. Martin.",
    estrellas: 5,
    imagenes: [
      "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_9f3810a9025f2fcfc57be38bb9cd64e9e13d7e7d.1920x1080.jpg",
      "https://images.cgames.de/images/gamestar/279/elden-ring-test_6196079.jpg",
    ],
    trailer: "https://www.youtube.com/embed/E3Huy2cdih0",
    resenas: [
      "Una obra maestra desafiante y hermosa.",
      "Exploración asombrosa, combate intenso.",
      "Uno de los mejores juegos de su generación.",
    ],
    precio: 59,
  },
  2: {
    id: 2,
    titulo: "God of War (2018)",
    descripcion: "Kratos viaja con su hijo Atreus en una aventura mitológica nórdica llena de acción y emoción.",
    estrellas: 4,
    imagenes: [
      "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
      "https://i.ytimg.com/vi/K0u_kAWLJOA/maxresdefault.jpg",
    ],
    trailer: "https://www.youtube.com/embed/K0u_kAWLJOA",
    resenas: [
      "Historia poderosa y emotiva.",
      "Excelente combate y presentación visual.",
      "Kratos como nunca lo habías visto.",
    ],
    precio: 49,
  },
  3: {
    id: 3,
    titulo: "Minecraft",
    descripcion: "Juego de construcción y supervivencia...",
    estrellas: 5,
    imagenes: [
      "/Minecraft-Logo.png"
    ],
    trailer: "https://www.youtube.com/embed/MmB9b5njVbA",
    resenas: [
      "Creatividad sin límites.",
      "Ideal para todas las edades.",
      "Un clásico moderno."
    ],
    precio: 20,
  }
};

const DetalleJuego: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { agregarJuego } = useCarrito();

  // Convertimos el id de string a number
  const juegoId = Number(id);
  const juego = juegos[juegoId];

  if (!juego) {
    return <p className="p-4 text-red-500">Juego no encontrado.</p>;
  }

  const handleAgregarCarrito = () => {
    agregarJuego({
      id: juego.id,
      nombre: juego.titulo,
      imagen: juego.imagenes[0],
      precio: juego.precio,
    });
  };

  return (
    <div className="container mt-4 text-white">
      <h1 className="text-3xl font-bold mb-2">{juego.titulo}</h1>
      <p className="mb-4 text-gray-300">{juego.descripcion}</p>
      <p className="text-yellow-500 text-lg mb-4">{"★".repeat(juego.estrellas)}</p>

      <h2 className="text-xl font-semibold mb-2">Imágenes</h2>
      <div className="flex flex-wrap gap-4 mb-4">
        {juego.imagenes.map((img, idx) => (
          <img key={idx} src={img} alt="screenshot" className="w-48 rounded shadow" />
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-2">Tráiler</h2>
      <div className="ratio ratio-16x9 mb-4" style={{ maxWidth: 700 }}>
        <iframe
          src={juego.trailer}
          title="Tráiler"
          allowFullScreen
          style={{ width: "100%", height: "100%" }}
        ></iframe>
      </div>

      <h2 className="text-xl font-semibold mb-2">Reseñas</h2>
      <ul className="list-disc list-inside text-gray-300 mb-4">
        {juego.resenas.map((resena, idx) => (
          <li key={idx}>{resena}</li>
        ))}
      </ul>

      <div className="d-flex align-items-center gap-3 mb-4">
        <span className="fw-bold fs-4">${juego.precio}</span>
        <button className="btn btn-acento fw-bold" onClick={handleAgregarCarrito}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default DetalleJuego;
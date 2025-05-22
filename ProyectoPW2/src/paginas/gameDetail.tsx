import React from "react";
import { useParams } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import { useJuegos } from "../context/GameContext";
import Navbar from "../componentes/Navbar";
import "../paginas/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const DetalleJuego: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { juegos } = useJuegos();
  const { agregarJuego } = useCarrito();

  const juegoId = Number(id);
  const juego = juegos.find(j => j.id === juegoId);

  if (!juego) {
    return <p className="p-4 text-red-500">Juego no encontrado.</p>;
  }

 const handleAgregarCarrito = () => {
  console.log("Agregando al carrito", juego);
  agregarJuego({
    id: juego.id,
    nombre: juego.titulo,
    imagen: juego.imagenes[0],
    precio: juego.precio,
  });
};

  return (
    <>
      <Navbar />
      <div className="container mt-4 text-white">
        <h1 className="text-3xl font-bold mb-2">{juego.titulo}</h1>
        <p className="mb-4 text-gray-300">{juego.descripcion}</p>
        <p className="text-yellow-500 text-lg mb-4">{"★".repeat(juego.estrellas)}</p>

        <h2 className="text-xl font-semibold mb-2">Imágenes</h2>
        <div className="d-flex flex-wrap gap-4 justify-content-center mb-4">
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
    </>
  );
};

export default DetalleJuego;
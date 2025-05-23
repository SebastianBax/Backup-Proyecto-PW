import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import { useJuegos } from "../context/GameContext";
import Navbar from "../componentes/Navbar";
import "../paginas/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const DetalleJuego: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { juegos, agregarResena } = useJuegos();
  const { agregarJuego } = useCarrito();

  const juegoId = Number(id);
  const juego = juegos.find(j => j.id === juegoId);

  // Estado para nueva reseña
  const [textoResena, setTextoResena] = useState("");
  const [estrellasResena, setEstrellasResena] = useState(5);

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

  const handleAgregarResena = (e: React.FormEvent) => {
    e.preventDefault();
    if (textoResena.trim() === "") return;
    agregarResena(juego.id, { texto: textoResena, estrellas: estrellasResena });
    setTextoResena("");
    setEstrellasResena(5);
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
        <div className="d-flex justify-content-center">
        <div className="ratio ratio-16x9 mb-4" style={{ maxWidth: 700 }}>
          <iframe
            src={juego.trailer}
            title="Tráiler"
            allowFullScreen
            style={{ width: "100%", height: "100%" }}
          ></iframe>
        </div>
        </div>

        {/* Área de reseñas */}
        <h2 className="text-xl font-semibold mb-2">Reseñas</h2>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          {juego.resenas.length === 0 && <li>No hay reseñas aún.</li>}
          {juego.resenas.map((resena, idx) => (
            <li key={idx}>
              <span className="text-warning">{"★".repeat(resena.estrellas)}</span>
              <span className="ms-2">{resena.texto}</span>
            </li>
          ))}
        </ul>

        {/* Formulario para agregar reseña */}
        <form className="mb-4" onSubmit={handleAgregarResena}>
          <div className="mb-2">
            <label className="form-label me-2">Tu reseña:</label>
            <input
              type="text"
              className="form-control d-inline-block"
              style={{ width: "300px" }}
              value={textoResena}
              onChange={e => setTextoResena(e.target.value)}
              maxLength={100}
              required
            />
          </div>
          <div className="mb-2">
            <label className="form-label me-2">Calificación:</label>
            <select
              className="form-select d-inline-block"
              style={{ width: "100px" }}
              value={estrellasResena}
              onChange={e => setEstrellasResena(Number(e.target.value))}
            >
              {[5, 4, 3, 2, 1].map(n => (
                <option key={n} value={n}>{n} ★</option>
              ))}
            </select>
          </div>
          <button className="btn btn-acento btn-sm" type="submit">
            Agregar reseña
          </button>
        </form>

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
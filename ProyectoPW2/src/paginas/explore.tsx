import React, { useState } from 'react';
import Navbar from '../componentes/Navbar';
import CardJuego from '../componentes/CardJuego';
import { useNavigate } from 'react-router-dom';
import { useJuegos } from '../context/GameContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../paginas/style.css';

export default function Explore() {
  const [filtroOferta, setFiltroOferta] = useState(false);
  const navigate = useNavigate();
  const { juegos } = useJuegos();
  const juegosFiltrados = filtroOferta ? juegos.filter(j => j.oferta) : juegos;

  return (
    <>
      <Navbar />

      <div className="container mt-4 text-white">
        <h3 className="texto-acento mb-3">Explore</h3>

        {/* Filtro */}
        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="filtroOferta"
            checked={filtroOferta}
            onChange={() => setFiltroOferta(!filtroOferta)}
          />
          <label className="form-check-label" htmlFor="filtroOferta">
            Solo ofertas
          </label>
        </div>

        {/* Listado juegos */}
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {juegosFiltrados.map((juego) => (
            <div className="col" key={juego.id}>
              <CardJuego
                nombre={juego.titulo}
                imagen={juego.imagenes[0]}
                precio={juego.precio}
                onDetalles={() => navigate(`/game/${juego.id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
import React, { useState } from 'react';
import Navbar from '../componentes/Navbar';
import CardJuego from '../componentes/CardJuego';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../paginas/style.css';


const juegosMock = [
  { id: 1, nombre: 'Minecraft', imagen: '/Minecraft-Logo.png', precio: 20, oferta: false },
  { id: 2, nombre: 'Rimworld', imagen: '/Rimworld_Logo.png', precio: 15, oferta: true },
  { id: 3, nombre: 'God of War', imagen: '/GodofWar_Logo.jpg', precio: 25, oferta: false },
  // juegos aquí
];

export default function Explore() {
  const [filtroOferta, setFiltroOferta] = useState(false);
  const navigate = useNavigate();

  const juegosFiltrados = filtroOferta
    ? juegosMock.filter((j) => j.oferta)
    : juegosMock;

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
                nombre={juego.nombre}
                imagen={juego.imagen}
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

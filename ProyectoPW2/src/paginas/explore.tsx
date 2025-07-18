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

        {/* Formulario de filtros */}
        <form className="bg-dark p-4 rounded text-white mb-4" onSubmit={(e) => e.preventDefault()}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="categoria" className="form-label">Categoría</label>
              <select className="form-select" id="categoria" name="categoria">
                <option value="">Todas</option>
                <option value="Acción">Acción</option>
                <option value="Aventura">Aventura</option>
                <option value="Estrategia">Estrategia</option>
                <option value="RPG">RPG</option>
                <option value="Deportes">Deportes</option>
                <option value="Simulación">Simulación</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Terror">Terror</option>
                <option value="Mundo Abierto">Mundo Abierto</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="plataforma" className="form-label">Plataforma</label>
              <select className="form-select" id="plataforma" name="plataforma">
                <option value="">Todas</option>
                <option value="PlayStation 4">PlayStation 4</option>
                <option value="PlayStation 5">PlayStation 5</option>
                <option value="Nintendo Switch">Nintendo Switch</option>
                <option value="Windows">Windows</option>
                <option value="macOS">macOS</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="precioMin" className="form-label">Precio mínimo</label>
              <input type="number" className="form-control" id="precioMin" name="precioMin" />
            </div>
            <div className="col-md-6">
              <label htmlFor="precioMax" className="form-label">Precio máximo</label>
              <input type="number" className="form-control" id="precioMax" name="precioMax" />
            </div>
          </div>

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
</form>

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

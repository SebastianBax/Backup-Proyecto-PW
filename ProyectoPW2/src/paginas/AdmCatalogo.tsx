import React from 'react';
import Navbar from '../componentes/Navbar';
import CardJuego from '../componentes/CardJuego';
import { useNavigate } from 'react-router-dom';
import { useJuegos } from '../context/GameContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function AdminCatalogo() {
  const navigate = useNavigate();
  const { juegos } = useJuegos();

  return (
    <div className="fondo-oscuro">
      <Navbar />

      <div className="container mt-5">
        <h3 className="texto-acento mb-3">Catálogo de Juegos</h3>
        <div className="row row-cols-1 row-cols-md-5 g-4 mt-3">
          {juegos.map((juego) => (
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
    </div>
  );
}
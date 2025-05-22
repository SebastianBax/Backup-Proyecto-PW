import React from 'react';
import Navbar from './Navbar';
import CardJuego from './CardJuego';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const juegosCatalogo = [
  { id: 1, nombre: 'Minecraft', imagen: '/Minecraft-Logo.png' },
  { id: 2, nombre: 'Rimworld', imagen: '/Rimworld_Logo.png' },
  { id: 3, nombre: 'God of War', imagen: '/GodofWar_Logo.jpg' },
  { id: 4, nombre: 'Company of Heroes 2', imagen: '/COH2.PNG' },
  { id: 5, nombre: 'Helldivers 2', imagen: '/HD2_Logo.png' },
  { id: 6, nombre: 'Kingdom Come deliverance 2', imagen: '/KCD2_Logo.png' },
  { id: 7, nombre: 'Farming Simulator 22', imagen: '/FS22_Logo.avif' },
  { id: 8, nombre: 'Outlast', imagen: '/Outlast.avif' },
  { id: 9, nombre: 'GTA V', imagen: '/GTAV_Logo.png' },
];

export default function AdminCatalogo() {
  const navigate = useNavigate();

  return (
    <div className="fondo-oscuro">
      <Navbar />

      <div className="container mt-5">
        <h3 className="texto-acento mb-3">Catálogo de Juegos</h3>
        <div className="row row-cols-1 row-cols-md-5 g-4 mt-3">
          {juegosCatalogo.map((juego) => (
            <div className="col" key={juego.id}>
              <CardJuego
                nombre={juego.nombre}
                imagen={juego.imagen}
                onDetalles={() => navigate(`/game/${juego.id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
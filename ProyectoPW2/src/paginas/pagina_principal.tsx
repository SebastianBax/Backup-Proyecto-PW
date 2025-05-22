import React from 'react';
import Navbar from '../componentes/Navbar';
import CardJuego from '../componentes/CardJuego';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../paginas/style.css';

const juegosDestacados = [
  { id:1, nombre: 'Minecraft', imagen: '/Minecraft-Logo.png' },
  { id:2, nombre: 'Rimworld', imagen: '/Rimworld_Logo.png' },
  { id:3, nombre: 'God of War', imagen: '/GodofWar_Logo.jpg' },
  { id:4, nombre: 'Farming Simulator 22', imagen: '/FS22_Logo.avif' },
  { id:5, nombre: 'Company of Heroes 2', imagen: '/COH2.PNG' },
  { id:6, nombre: 'Helldivers 2', imagen: '/HD2_Logo.png' },
  { id:7, nombre: 'Kingdom Come Deliverance 2', imagen: '/KCD2_Logo.png' },
  { id:8, nombre: 'Outlast', imagen: '/Outlast.avif' },
  { id:9, nombre: 'Grand Theft Auto V', imagen: '/GTAV_Logo.png' },
  { id:10, nombre: 'Smash Bros Melee', imagen: '/Smashbros.png' },
];

export default function PaginaPrincipal() {
   const navigate = useNavigate();
  return (
    <div className="fondo-oscuro">
      <Navbar />

      {/* Carrusel - creo que lo podemos hacer un componente aparte */}
      <div id="mainCarousel" className="carousel slide mt-4 container" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/Minecraft_banner.png" className="d-block w-100" alt="Minecraft" />
            <div className="carousel-caption">
              <button className="btn btn-acento">Detalles</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Rimworld_banner.jpg" className="d-block w-100" alt="Rimworld" />
            <div className="carousel-caption">
              <button className="btn btn-acento">Detalles</button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Juegos Destacados */}
      <div className="container mt-5">
        <h3 className="texto-acento mb-3">Featured Games</h3>
        <div className="row row-cols-1 row-cols-md-5 g-4 mt-3">
          {juegosDestacados.map((juego, idx) => (
            <div className="col" key={idx}>
              <CardJuego 
                nombre={juego.nombre} 
                imagen={juego.imagen}
                onDetalles={() => navigate(`/game/${juego.id}`)} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

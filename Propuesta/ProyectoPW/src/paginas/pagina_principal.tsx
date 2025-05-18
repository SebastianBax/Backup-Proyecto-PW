import React from 'react';
import Navbar from '../componentes/Navbar';
import CardJuego from '../componentes/CardJuego';

const juegosDestacados = [
  { nombre: 'Minecraft', imagen: '/Minecraft-Logo.png' },
  { nombre: 'Rimworld', imagen: '/Rimworld_Logo.png' },
  { nombre: 'God of War', imagen: '/GodofWar_Logo.jpg' },
  // Agrega más juegos
];

export default function PaginaPrincipal() {
  return (
    <>
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
              <CardJuego nombre={juego.nombre} imagen={juego.imagen} />
            </div>
          ))}
        </div>
      </div>

     
      <style>{`
        body {
          background-color: #1a1a1d;
          color: white;
        }
        .bg-dark-2 {
          background-color: #2d2d30;
        }
        .btn-acento {
          background-color: hsl(259, 90%, 50%);
          color: white;
          border: none;
        }
        .btn-acento:hover {
          background-color: hsl(259, 90%, 40%);
        }
        .texto-acento {
          color: #00c9ff;
        }
      `}</style>
    </>
  );
}

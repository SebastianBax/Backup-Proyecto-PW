import React from 'react';
import { useParams } from 'react-router-dom';
import '../paginas/style.css';

export default function GameDetail() {
  const { id } = useParams<{ id: string }>();

  
  const juegoMock = {
    nombre: 'Minecraft',
    descripcion: 'Juego de construcción y supervivencia...',
    imagen: '/Minecraft-Logo.png',
    trailer: "https://www.youtube.com/embed/MmB9b5njVbA",
  };

  return (
    <div className="container mt-4 text-white">
      <h3 className="texto-acento">{juegoMock.nombre}</h3>
      <img src={juegoMock.imagen} alt={juegoMock.nombre} className="img-fluid my-3" />
      <p>{juegoMock.descripcion}</p>
      <div className="ratio ratio-16x9">
        <iframe
          src={juegoMock.trailer}
          title="Trailer"
          allowFullScreen
        ></iframe>
      </div>
      <button className="btn btn-acento mt-3">Agregar al carrito</button>
    </div>
  );
}
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../componentes/Navbar'; // Ajusta si tu path es distinto

const Categories: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Acción', path: '/categoria/accion' },
    { name: 'Aventura', path: '/categoria/aventura' },
    { name: 'Estrategia', path: '/categoria/estrategia' },
    { name: 'RPG', path: '/categoria/rpg' },
    { name: 'Deportes', path: '/categoria/deportes' },
    { name: 'Simulación', path: '/categoria/simulacion' },
    { name: 'Puzzle', path: '/categoria/puzzle' },
    { name: 'Terror', path: '/categoria/terror' },
    { name: 'Mundo Abierto', path: '/categoria/mundo-abierto' }
  ];

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h2 className="text-center mb-4 text-white">Categorías de Juegos</h2>
        <div className="row">
          {categories.map((cat, idx) => ( 
            <div className="col-md-4 mb-4 d-flex justify-content-center" key={idx}>
              <button
                className="btn btn-primary w-100"
                style={{ maxWidth: '250px' }}
                onClick={() => navigate(cat.path)}
              >
                {cat.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;

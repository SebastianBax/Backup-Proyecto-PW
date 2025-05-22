import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Navbar() {
  const navigate = useNavigate(); // 1. Inicializa la función de navegación

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand texto-acento">GameStore</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/explore">Explorar</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/categories">Categorías</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/plataformas">Plataforma</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/offers">Ofertas especiales</Link></li>
            
            <li className="nav-item"><Link className="nav-link" to="/configuracion">Configuración</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/adminpag">Admin</Link></li>
          </ul>

          {/* Filtro de precio máximo */}
          <div className="d-flex align-items-center me-3">
            <label htmlFor="precioMax" className="text-white me-2 mb-0">Precio máx:</label>
            <input
              type="number"
              id="precioMax"
              className="form-control form-control-sm"
              placeholder="$100"
              style={{ width: '100px' }}
            />
          </div>

          {/* Buscador */}
          <input type="text" className="form-control form-control-sm me-3" placeholder="Buscar juego" style={{ maxWidth: '160px' }} />

          {/* Botón perfil */}
          <button className="btn btn-outline-light me-3" onClick={() => navigate('/login')}>
            <i className="bi bi-person-circle"></i>
          </button>

          {/* Botón carrito */}
          <button className="btn btn-outline-light me-3" onClick={() => navigate('/cart')}>
            <i className="bi bi-cart"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

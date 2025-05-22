import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../paginas/style.css';

const Registro: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: 500, width: '100%', backgroundColor: '#1e1e1e' }}>
        <div className="text-end w-100 mb-3">
          <button onClick={() => navigate('/login')} className="btn btn-sm btn-light rounded-circle">←</button>
        </div>
        <h2 className="text-center mb-3 fw-bold text-white">Crear cuenta</h2>
        <p className="text-center text-light mb-4">Explora el catálogo de juegos nuevos y fascinantes retros</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-light">Correo:</label>
            <input type="email" className="form-control rounded-pill" id="email" required />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label text-light">Contraseña:</label>
            <input type="password" className="form-control rounded-pill" id="password" required />
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label text-light">Usuario:</label>
            <input type="text" className="form-control rounded-pill" id="username" required />
          </div>

          <div className="mb-4">
            <label htmlFor="region" className="form-label text-light">País</label>
            <select id="region" className="form-select rounded-pill" required>
              <option value="">Seleccionar...</option>
              <option value="PE">Perú</option>
              <option value="CL">Chile</option>
              <option value="AR">Ecuador</option>
              <option value="CO">Colombia</option>
              <option value="MX">Argentina</option>
            </select>
          </div>

          <div className="d-grid">
            <button type="submit"className="btn rounded-pill fw-bold"style={{ backgroundColor: '#6500ff', color: 'white' }}>
              Continuar →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registro;

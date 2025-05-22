import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../paginas/style.css';

const Registro: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="bg-secondary text-white vh-100 d-flex flex-column flex-md-row">
      <div className="d-none d-md-flex flex-column justify-content-center align-items-center w-100 w-md-50 p-5">
        <h2 className="mb-3 fw-semibold">Crear su cuenta de manera gratuita</h2>
        <p className="text-center">Explore el catálogo de juegos nuevos y fascinantes retros</p>
      </div>

      <div className="bg-dark bg-opacity-50 p-4 rounded-4 shadow w-100 w-md-50 d-flex flex-column justify-content-center align-items-center">
        <div className="text-end w-100">
          <button onClick={() => navigate('/')} className="btn btn-sm btn-light rounded-circle">←</button>
        </div>
        <h2 className="text-center mb-4 fw-bold">Sign up to GameStore</h2>

        <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: 400 }}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo:</label>
            <input type="email" className="form-control rounded-pill" id="email" required />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña:</label>
            <input type="password" className="form-control rounded-pill" id="password" required />
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">Usuario:</label>
            <input type="text" className="form-control rounded-pill" id="username" required />
          </div>

          <div className="mb-4">
            <label htmlFor="region" className="form-label">País</label>
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
            <button type="submit" className="btn btn-light rounded-pill text-dark fw-bold">
              Continuar →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registro;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../paginas/style.css';

const NuevaContra: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes validar las contraseñas antes de redirigir
    navigate('/');
  };

  return (
    <div className="bg-secondary text-white d-flex justify-content-center align-items-center vh-100">
      <div
        className="bg-dark bg-opacity-50 p-4 rounded-4 shadow text-center"
        style={{ maxWidth: '400px', width: '100%' }}
      >
        <h2 className="fw-bold mb-3">Reestablece tu contraseña</h2>
        <p className="mb-4">
          Introduzca el código de uso único que se envió al correo verificado de la cuenta.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="code" className="form-label">Código:</label>
            <input
              type="text"
              className="form-control rounded-pill"
              id="code"
              name="code"
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="newPassword" className="form-label">Nueva contraseña:</label>
            <input
              type="password"
              className="form-control rounded-pill"
              id="newPassword"
              name="newPassword"
              required
            />
          </div>

          <div className="mb-4 text-start">
            <label htmlFor="confirmPassword" className="form-label">Confirme su nueva contraseña:</label>
            <input
              type="password"
              className="form-control rounded-pill"
              id="confirmPassword"
              name="confirmPassword"
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-light rounded-pill text-dark fw-bold">
              Reestablecer contraseña
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NuevaContra;

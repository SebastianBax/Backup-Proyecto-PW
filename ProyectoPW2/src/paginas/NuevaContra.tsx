import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../paginas/style.css';

const NuevaContra: React.FC = () => {
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje('¡Contraseña reestablecida!');
    setTimeout(() => {
      navigate('/login');
    }, 10000);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: 400, width: '100%', backgroundColor: '#1e1e1e' }}>
        <div className="text-end">
          <button onClick={() => navigate('/login')} className="btn btn-sm btn-light rounded-circle">←</button>
        </div>
        <h2 className="fw-bold mb-3 text-white">Reestablece tu contraseña</h2>
        <p className="mb-4 text-white">
          Introduzca el código de uso único que se envió al correo verificado de la cuenta.
        </p>

        {mensaje && (
          <div className="alert alert-success text-center py-2" role="alert">
            {mensaje}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="code" className="form-label text-light">Código:</label>
            <input
              type="text"
              className="form-control rounded-pill"
              id="code"
              name="code"
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="newPassword" className="form-label text-light">Nueva contraseña:</label>
            <input
              type="password"
              className="form-control rounded-pill"
              id="newPassword"
              name="newPassword"
              required
            />
          </div>

          <div className="mb-4 text-start">
            <label htmlFor="confirmPassword" className="form-label text-light">Confirme su nueva contraseña:</label>
            <input type="password" className="form-control rounded-pill" id="confirmPassword" name="confirmPassword" required />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn rounded-pill fw-bold" style={{ backgroundColor: '#6500ff', color: 'white' }}>
              Reestablecer contraseña
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NuevaContra;
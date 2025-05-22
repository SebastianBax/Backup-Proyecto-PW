import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../paginas/style.css';

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/resetPassword');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: 400, width: '100%', backgroundColor: '#1e1e1e' }}>
        <div className="text-end">
          <button onClick={() => navigate('/login')} className="btn btn-sm btn-light rounded-circle">←</button>
        </div>

        <h2 className="fw-bold mb-3 text-white">¿Olvidaste tu contraseña?</h2>
        <p className="mb-4 text-white">
          Ingresa tu correo electrónico para enviarte un código de recuperación.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label text-light">Correo electrónico o usuario:</label>
            <input type="email" className="form-control rounded-pill" id="email" name="email" required />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn rounded-pill fw-bold" style={{ backgroundColor: '#6500ff', color: 'white' }}>
              Enviar correo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

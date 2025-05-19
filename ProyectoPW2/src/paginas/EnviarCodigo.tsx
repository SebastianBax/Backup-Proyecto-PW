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
    <div className="bg-secondary text-white d-flex justify-content-center align-items-center vh-100 position-relative">
      <div className="position-absolute top-0 end-0 p-3">
        <button onClick={() => navigate('/')} className="btn btn-sm btn-light rounded-circle">←</button>
      </div>

      <div className="bg-dark bg-opacity-50 p-4 rounded-4 shadow text-center" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="fw-bold mb-3">¿Olvidaste tu contraseña?</h2>
        <p className="mb-4">Ingresa tu correo electrónico para enviarte un código de recuperación.</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label">Correo electrónico o usuario:</label>
            <input type="email" className="form-control rounded-pill" id="email" name="email" required />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-light rounded-pill text-dark fw-bold">
              Enviar correo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

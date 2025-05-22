import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../paginas/style.css';

const NuevaContra: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //l alinea de arriba no deja que el botón funcione si los campos no están llenos
    navigate('/');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: 400, width: '100%', backgroundColor: '#1e1e1e' }}>
        <h2 className="fw-bold mb-3 text-white">Reestablece tu contraseña</h2>
        <p className="mb-4 text-white">
          Introduzca el código de uso único que se envió al correo verificado de la cuenta.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="code" className="form-label text-light">Código:</label>
            <input type="text" className="form-control rounded-pill" id="code" name="code" required/>
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="newPassword" className="form-label text-light">Nueva contraseña:</label>
            <input type="password" className="form-control rounded-pill" id="newPassword" name="newPassword" required />
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

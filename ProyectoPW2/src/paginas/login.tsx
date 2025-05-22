import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../paginas/style.css';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/pagina_principal');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: 400, width: '100%', backgroundColor: '#1e1e1e' }}>
        <h2 className="text-center mb-4 text-white">Iniciar Sesión</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-light">Correo Electrónico</label>
            <input type="email" className="form-control rounded-pill" id="email" name="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-light">Contraseña</label>
            <input type="password" className="form-control rounded-pill" id="password" name="password" required />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn" style={{ backgroundColor: '#6500ff', color: 'white' }}>
              Iniciar Sesión
            </button>
            <p></p>
            <button type="button" onClick={() => navigate('/adminpag')} className="btn btn-outline-warning">
              Iniciar Sesión Administrador
            </button>
            <button type="button" onClick={() => navigate('/forgot')} className="btn btn-link text-secondary">
              ¿Olvidaste tu contraseña?
            </button>
            <button type="button" onClick={() => navigate('/register')} className="btn btn-outline-light">
              Registrarme
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
import React from 'react';

const EliminarJuego = () => {
  return (
    <div className="container mt-5">
      <h3 className="mb-4">Eliminar Juego</h3>
      <form className="row g-3">
        <div className="col-md-4">
          <label className="form-label">Nombre del juego</label>
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Minecraft"
          />
        </div>

        <div className="col-12">
          <button className="btn btn-danger btn-sm">Eliminar Juego</button>
        </div>
      </form>
    </div>
  );
};

export default EliminarJuego
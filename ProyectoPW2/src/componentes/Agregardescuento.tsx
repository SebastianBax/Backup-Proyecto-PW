import React from 'react';

const AgregarDescuento = () => {
  return (
    <div className="container mt-5">
      <h3 className="mb-4">Aplicar Descuento</h3>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Nombre del juego</label>
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Minecraft"
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">Precio ($)</label>
          <input
            type="number"
            className="form-control form-control-sm"
            placeholder="Ej: 20"
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">% Descuento</label>
          <input
            type="number"
            className="form-control form-control-sm"
            placeholder="1-100"
          />
        </div>

        <div className="col-12">
          <button className="btn btn-success btn-sm">Aplicar Descuento</button>
        </div>
      </form>
    </div>
  );
};

export default AgregarDescuento;
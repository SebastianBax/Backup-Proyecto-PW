import React from 'react';

const Agregarjuego = () => {
  return (
    <div className="container mt-5">
      <h3 className="mb-4">Agregar Juego</h3>
      <form className="row g-3">

        <div className="col-md-6">
          <label className="form-label">Título</label>
          <input type="text" className="form-control form-control-sm" placeholder="Minecraft" />
        </div>

        <div className="col-md-3">
          <label className="form-label">Estrellas</label>
          <input type="number" className="form-control form-control-sm" placeholder="5" />
        </div>

        <div className="col-md-6">
          <label className="form-label">URL Imagen</label>
          <input type="text" className="form-control form-control-sm" placeholder="URL de la imagen" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Trailer</label>
          <input type="text" className="form-control form-control-sm" placeholder="URL del trailer" />
        </div>

        <div className="col-md-4">
          <label className="form-label">Precio ($)</label>
          <input type="number" className="form-control form-control-sm" placeholder="10" />
        </div>

        <div className="col-md-12">
          <label className="form-label">Descripción</label>
          <textarea className="form-control form-control-sm" placeholder="Texto"></textarea>
        </div>

        <div className="col-auto">
          <button className="btn btn-success btn-sm">Añadir</button>
        </div>

      </form>
    </div>
  );
};

export default Agregarjuego;
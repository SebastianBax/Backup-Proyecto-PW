import React, { useState } from 'react';


const AgregarDescuento = () => {

  const [juegoSelec, setJuegoSelec] = useState('');
  const [descuento, setDescuento] = useState('');

  return <div className="container mt-5">
      <h6></h6>
      <form>
        <div className="mb-3 col-md-4" >
          <label className="form-label">Nombre del juego</label>
          <input type="text" className="form-control" placeholder="Minecraft"/>
        </div>


        <div className="mb-3 col-md-4">
          <label className="form-label">Porcentaje de Descuento</label>
          <input type="number" className="form-control" placeholder="15"/>
        </div>

        <button className="btn btn-success">Aplicar Descuento</button>
      </form>
    </div>
}

export default AgregarDescuento
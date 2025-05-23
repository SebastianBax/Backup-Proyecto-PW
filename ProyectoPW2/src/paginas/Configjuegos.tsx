import React, { useState } from 'react';

import Agregarjuego from '../componentes/Agregarjuego';
import EliminarJuego from '../componentes/Eliminarjuego';
import EditarJuego from '../componentes/Editarjuego';
import AgregarDescuento from '../componentes/Agregardescuento';

const Configjuegos = () => {
  const [seccionActiva, setSeccionActiva] = useState<string>('');

  const mostrarSeccion = (seccion: string) => {
    setSeccionActiva(seccion);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Panel de Administración de Juegos</h2>

      <div className="d-flex justify-content-center gap-3 mb-4">
        <button className="btn btn-success" onClick={() => mostrarSeccion('agregar')}>
          Agregar Juego
        </button>
         <button
          className="btn btn-primary"
          onClick={() => mostrarSeccion('editar')}
        >
          Editar Juego
        </button>

        <button
          className="btn btn-danger"
          onClick={() => mostrarSeccion('eliminar')}
        >
          Eliminar Juego
        </button>

        <button
          className="btn btn-danger"
          onClick={() => mostrarSeccion('Descuento')}
        >
          Descuento
        </button>

      </div>

      <div>
        {seccionActiva === 'agregar' && <Agregarjuego />}
        {seccionActiva === 'editar' && <EditarJuego />}
        {seccionActiva === 'eliminar' && <EliminarJuego />}
        {seccionActiva === 'Descuento' && <AgregarDescuento />}
      </div>
    </div>
  );
};

export default Configjuegos
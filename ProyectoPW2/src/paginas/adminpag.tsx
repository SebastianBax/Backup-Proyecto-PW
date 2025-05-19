import React from 'react';
import AgregarDescuento from '../componentes/Agregardescuento';


const AdminPage = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Configuracion de la pagina</h1>

      <section className="mb-5">
        <h3> Agregar Juego</h3>
      </section>

      <section className="mb-5">
        <h3> Agregar Descuento</h3>
        <AgregarDescuento />
      </section>

      <section className="mb-5">
        <h3> Editar Juego</h3>
      </section>

      <section className="mb-5">
        <h3> Eliminar Juego</h3>
      
      </section>
    </div>
  );
};

export default AdminPage;

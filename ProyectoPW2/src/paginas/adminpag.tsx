import React from 'react';
import AgregarDescuento from '../componentes/Agregardescuento';
import { useNavigate } from 'react-router-dom';
import Navbar from '../componentes/Navbar';

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
    <div className="container my-5">
      <h1 className="mb-4">Configuración de la página</h1>

      <section className="mb-5">
        <h3>Agregar Juego</h3>
      </section>

      <section className="mb-5">
        <h3>Agregar Descuento</h3>
        <AgregarDescuento />
      </section>

      <section className="mb-5">
        <button className="btn btn-success" onClick={() => navigate('/admin/catalogo')}>
          Catálogo de juegos
        </button>
      </section>

      <section className="mb-5">
        <h3>Editar Juego</h3>
      </section>

      <section className="mb-5">
        <h3>Eliminar Juego</h3>
      </section>
    </div>
    </>
  );
};

export default AdminPage;

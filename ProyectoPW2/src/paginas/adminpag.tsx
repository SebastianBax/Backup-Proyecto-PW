import React from 'react';
import AgregarDescuento from '../componentes/Agregardescuento';
<<<<<<< HEAD
import AgregarJuego from '../componentes/Agregarjuego';

=======
import { useNavigate } from 'react-router-dom';
>>>>>>> 6e1c03ebf47fc5ef42ef6b2140fd5bafb6504803

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      <h1 className="mb-4">Configuración de la página</h1>

      <section className="mb-5">
<<<<<<< HEAD
        <h3> Agregar Juego</h3>
        <AgregarJuego />
=======
        <h3>Agregar Juego</h3>
>>>>>>> 6e1c03ebf47fc5ef42ef6b2140fd5bafb6504803
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
  );
};

export default AdminPage;

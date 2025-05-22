import React from 'react';
import Navbar from '../componentes/Navbar';

export default function Pago() {
  return (
    <>
      <Navbar />
      <div className="container mt-5 text-white">
        <h2 className="mb-4 texto-acento">Pago</h2>
        <div className="bg-dark-2 p-4 rounded">
          <p>Gracias por tu compra. Aquí iría el formulario o resumen de pago.</p>
          {/* Aquí puedes agregar campos de tarjeta, resumen, etc. */}
        </div>
      </div>
    </>
  );
}
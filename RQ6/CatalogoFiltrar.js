function normalizarTexto(texto) {
  return texto
    .normalize("NFD") // separa letras de sus tildes
    .replace(/[\u0300-\u036f]/g, "") // elimina las tildes (paso 2 del "normalize" me sirve para accion y simulacion)
    .toLowerCase(); // convierte todo a minúsculas (sin este no funciona el filtrado de varias categorías, NO BORRAR)
}

function filtrarJuegos() {
  const precioMin = parseFloat(document.getElementById('precioMin').value) || 0;
  const precioMax = parseFloat(document.getElementById('precioMax').value) || Infinity;
  const categoria = normalizarTexto(document.getElementById('categoria').value);
  const plataforma = normalizarTexto(document.getElementById('plataforma').value);
  const soloOfertas = document.getElementById('soloOfertas').checked;

  const juegos = document.querySelectorAll('.card.juego');

  juegos.forEach(juego => {
    const precio = parseFloat(juego.getAttribute('data-precio'));
    const juegoPlataforma = normalizarTexto(juego.getAttribute('data-plataforma'));
    const enOferta = juego.getAttribute('data-oferta') === 'true';

    const textoCategoria = juego.querySelector('.card-text')?.textContent || '';
    const categoriaEnTarjeta = normalizarTexto(textoCategoria);

    const coincideCategoria = !categoria || categoriaEnTarjeta.includes(categoria);
    const coincidePlataforma = !plataforma || juegoPlataforma === plataforma;
    const coincidePrecio = precio >= precioMin && precio <= precioMax;
    const coincideOferta = !soloOfertas || enOferta;

    if (coincideCategoria && coincidePlataforma && coincidePrecio && coincideOferta) {
      juego.parentElement.style.display = 'block';
    } else {
      juego.parentElement.style.display = 'none';
    }
  });
}

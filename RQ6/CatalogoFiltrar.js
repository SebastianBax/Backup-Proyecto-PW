function filtrarJuegos() {
  const precioMin = parseFloat(document.getElementById('precioMin').value) || 0;
  const precioMax = parseFloat(document.getElementById('precioMax').value) || Infinity;
  const categoria = document.getElementById('categoria').value.toLowerCase();
  const plataforma = document.getElementById('plataforma').value.toLowerCase();
  const soloOfertas = document.getElementById('soloOfertas').checked;

  const juegos = document.querySelectorAll('.card.juego');

  juegos.forEach(juego => {
    const precio = parseFloat(juego.getAttribute('data-precio'));
    const juegoPlataforma = juego.getAttribute('data-plataforma').toLowerCase();
    const enOferta = juego.getAttribute('data-oferta') === 'true';

    // Extraemos la categoría desde el texto visible
    const textoCategoria = juego.querySelector('.card-text')?.textContent.toLowerCase() || '';

    const coincideCategoria = !categoria || textoCategoria.includes(categoria);
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

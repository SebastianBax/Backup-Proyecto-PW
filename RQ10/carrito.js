const cart = [];
let total = 0;

function addToCart(game, price) {
  cart.push({ game, price });
  total += price;
  updateCartUI();
}

function updateCartUI() {
  const list = document.getElementById('cart-items');
  list.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.game} - $${item.price.toFixed(2)}`;
    list.appendChild(li);
  });
  document.getElementById('cart-total').textContent = total.toFixed(2);
}

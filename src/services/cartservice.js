// cartService.js
export function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

export function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(item) {
  const cart = getCart();
  const existing = cart.find(i => i.ProductId === item.Id);
  if (existing) {
    existing.Quantity = item.Quantity + existing.Quantity;
  } else {
    cart.push(item);
  }
  
  saveCart(cart);
}

export function removeFromCart(itemId) {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.ProductId !== itemId);
  saveCart(updatedCart);
}

export function clearCart() {
  localStorage.removeItem('cart');
}

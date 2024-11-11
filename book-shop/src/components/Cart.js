import React from 'react';
import { useStore } from '../store/useStore';

const Cart = () => {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const clearCart = useStore((state) => state.clearCart);

  const total = cart.reduce((acc, book) => acc + book.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((book) => (
            <div key={book.id}>
              <h3>{book.title}</h3>
              <p>Price: ${book.price}</p>
              <button onClick={() => removeFromCart(book.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={clearCart}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

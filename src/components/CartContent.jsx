import React, { useState } from 'react';
import CartItem from './Cart/CartItemCard';

const CartContent = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = item => {
    const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-start justify-between mt-3 gap-5 pb-3 border-b border-b-gray-700 items-end'>
       {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} onRemoveFromCart={removeFromCart}/>
       ))}
      </div>

      <p>Valor total: {cartItems.reduce((total, cartItem) => total + cartItem.price, 0)}</p>
      <button className='bg-green-500 hover:bg-green-700 text-white p-2 rounded-sm'>Finalizar compra</button>

    </div>
  );
}

export default CartContent;

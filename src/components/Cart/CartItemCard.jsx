import React from 'react';

const CartItem = ({cartItem, onRemoveFromCart}) => {
  return (
    <div>
      <div className='flex gap-5' key={cartItem.id}>
          <img className='w-[100px]' src={cartItem.image_url} />
        <div>
          <h2 className='font-bold'>{cartItem.name}</h2>
          <p>{cartItem.price}</p>
          <div class="flex gap-3 mt-3 items-center">
            <button class="bg-zinc-800 p-2 text-white w-10">-</button>
            <div class="border p-2 w-10 text-center rounded-sm ">1</div>
            <button class="bg-zinc-800 p-2 w-10  text-white">+</button>
            <button onClick={() => onRemoveFromCart(cartItem)}>Remover</button>
          </div>
          
        </div>
        </div>
    </div>
  );
}

export default CartItem;

import React, { useContext } from 'react';
import { useCart } from '../../Context/CartContext';
// import { VoidCart } from '../VoidCart/VoidCart'

const CartContent = () => {
  const { foodInCart, IncrementItem, DecrementItem, removeItem } = useCart();

  return (
    <div className='flex flex-col gap-5'>
     
        {foodInCart.length > 0 ? (
          foodInCart?.map((food) => (
            <div className='flex  gap-5' key={food.id}>
              <img className='w-[100px]' src={food.image_url} />
              <div>
                <h2 className='font-bold'>{food.name}</h2>
                <p>R$ {food.price}</p>
                <div class="flex gap-3 mt-3 items-center">
                  <button class="bg-zinc-800 p-2 text-white w-10" onClick={() => DecrementItem(food.id)}>-</button>
                  <div class="border p-2 w-10 text-center rounded-sm ">{food.count}</div>
                  <button class="bg-zinc-800 p-2 w-10  text-white" onClick={() => IncrementItem(food.id)}>+</button>
                  <button onClick={() => removeItem(food.id)}>Remover</button>

                </div>

                <p>Valor total: <span className='text-red-500'>R$ {food.total}</span></p>
              <div className='flex flex-col justify-around items-center mt-3 gap-5 pb-3 border-b border-b-gray-700 items-end'></div>
              </div>
            </div>
          ))
        ) : <p>carrinho vazio!</p>}



      <button className='bg-green-500 hover:bg-green-700 text-white p-2 rounded-sm'>Finalizar compra</button>

    </div>
  );
}

export default CartContent;
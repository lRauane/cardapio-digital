import React from 'react';
import product from '../assets/product-1.svg'

const CartContent = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-start justify-between mt-3 gap-5 pb-3 border-b border-b-gray-700 items-end'>
        <div className='flex gap-5'>
          <img className='w-[100px]' src={product} />
        <div>
          <h2 className='font-bold'>Pastel de frango</h2>
          <p>R$ 35</p>
          <div class="flex gap-3 mt-3 items-center">
            <button class="bg-zinc-800 p-2 text-white w-10">-</button>
            <div class="border p-2 w-10 text-center rounded-sm ">1</div>
            <button class="bg-zinc-800 p-2 w-10  text-white">+</button>
          </div>
        </div>
        </div>

      </div>

      <p>Valor total: <span className='text-red-500'>R$ 53</span></p>
      <button className='bg-green-500 hover:bg-green-700 text-white p-2 rounded-sm'>Finalizar compra</button>

    </div>
  );
}

export default CartContent;

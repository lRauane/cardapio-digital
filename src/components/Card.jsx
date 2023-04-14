import React, { useEffect, useState } from 'react';
import Product1 from '../assets/product-1.svg'
import { BiCart, BiHeart } from 'react-icons/bi'


const Card = () => {

  return (
    <div className="group relative">
      <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none relative">
        <img src={Product1} alt='' className="object-center lg:h-full lg:w-full" />
        <div className="absolute top-3 left-2 bg-zinc-800 rounded-sm p-2  hover:bg-zinc-900/80 ">
          <BiHeart size={32} color='white' />
        </div>
      </div>
      <div className="mt-2 gap-2 flex flex-col">
        <div>
          <h3 className="text-3xl pb-2 font-bold text-gray-700">
            Pastel
          </h3>
          <div className='border-b border-solid border-gray-400'></div>
        </div>
        <div className='flex items-center justify-around'>
          <p className="mt-1 text-base md:text-lg text-gray-500">R$ 15.00</p>
          <a href='' className='bg-zinc-800 rounded-sm p-3 hover:bg-zinc-900/80 md:p-2'><BiCart color='white' size={32} /></a>
        </div>
      </div>
    </div>
  );
}

export default Card;

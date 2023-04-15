import React from 'react';
import { BiHeart, BiCart,BiSearch } from 'react-icons/bi'
import CartButton from './CartButton';

const IconsActions = () => {
  return (
    <div
      className=' flex gap-2 md:gap-5'>
      <button
       type='submit' 
       className='bg-zinc-800 p-3 md:p-4 rounded-tr-sm rounded-br-sm hover:bg-zinc-900/80 block md:hidden '>
        <BiSearch size={27} color='white'/>
      </button>
      <button className='bg-zinc-800 rounded-sm p-3  hover:bg-zinc-900/80 md:p-4'>
        <BiHeart size={27} color='white' />
      </button>
      

      <CartButton />
    </div>
  );
}

export default IconsActions;

import React from 'react';
import { BiHeart } from 'react-icons/bi'
import CartButton from '../Dialog/CartButton';

const IconsActions = () => {
  return (
    <div
      className=' flex gap-2 md:gap-5'>
      <button className='bg-amber-400 rounded-sm p-3  hover:bg-amber-400/80 md:p-4'>
        <BiHeart size={27} color='white' />
      </button>
      <CartButton />
    </div>
  );
}

export default IconsActions;

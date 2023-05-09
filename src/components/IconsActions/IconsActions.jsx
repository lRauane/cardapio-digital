import React from 'react';
import CartButton from '../Dialog/CartButton';
import FavoriteButton from '../Dialog/FavoriteButton';

const IconsActions = () => {
  return (
    <div
      className=' flex gap-2 md:gap-5'>
      <FavoriteButton />
      <CartButton />
    </div>
  );
}

export default IconsActions;

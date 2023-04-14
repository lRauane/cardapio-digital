import React from 'react';
import Card from './Card';

const CardProduct = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py-24 lg:max-w-6xl ">
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
        </div>
      </div>
    </div>

  );
}

export default CardProduct;

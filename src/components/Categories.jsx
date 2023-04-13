import React from 'react';
import ButtonsCategorie from './ButtonsCategorie';

const Categories = () => {
  return (
    <div className='flex w-full items-center mt-8 justify-evenly flex-wrap gap-5'>
      <ButtonsCategorie text='Salgados'/>
      <ButtonsCategorie text='Hambúrgueres'/>
      <ButtonsCategorie text='Sobremesas'/>
      <ButtonsCategorie text='Bebidas'/>
    </div>
  );
}

export default Categories;

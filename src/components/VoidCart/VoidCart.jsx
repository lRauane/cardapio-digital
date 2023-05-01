import React from 'react';

const VoidCart = () => {
  return (
    <div>
      <div>
        <h1 className='text-red-500'>Sem itens no carrinho!</h1>
        <p className='text-red-800 font-bold'>Volte para a página anterior e adicione itens!</p>
      </div>
    </div>
  );
}

export default VoidCart;

import {useContext} from 'react';
import { CartContext } from '../../Context/CartContext';

export function CartContent (){
  const { foodInCart, IncrementItem, DecrementItem, removeItem, total } = useContext(CartContext);

  return (
    <div className='flex flex-col gap-5'>  
        {foodInCart.length > 0 ? (
          foodInCart?.map((food) => (
            <div className='flex mt-5 gap-5' key={food.id}>
              <img className='w-[100px] h-[120px]' src={food.image_url} />
              <div>
                <h2 className='font-bold'>{food.name}</h2>
                <p>R$ {food.price}</p>
                <div className="flex gap-3 mt-3 items-center">
                  <button className="bg-zinc-800 p-2 text-white w-10" onClick={() => DecrementItem(food.id)}>-</button>
                  <div className="border p-2 w-10 text-center rounded-sm ">{food.count}</div>
                  <button className="bg-zinc-800 p-2 w-10  text-white" onClick={() => IncrementItem(food.id)}>+</button>
                  <button onClick={() => removeItem(food.id)}>Remover</button>

                </div>

              <div className='flex flex-col justify-around items-center mt-3 gap-5 pb-3 border-b border-b-gray-700 items-end'></div>
              </div>
            </div>
          ))
        ) : <p className='text-red-500 mt-2 text-xl'>carrinho vazio!</p>}


        <p>Valor total: <span className='text-red-500'>R$ {total}</span></p>
      <button className='bg-green-500 hover:bg-green-700 text-white p-2 rounded-sm'>Finalizar compra</button>

    </div>
  );
}

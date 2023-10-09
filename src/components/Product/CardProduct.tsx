import { useEffect, useState, useContext } from 'react';
import { BiCart } from 'react-icons/bi'
import { FiCheck } from "react-icons/fi";
import { CartContext } from '../../Context/CartContext';
import { CardContext } from '../../Context/CardContext';

export interface Food {
  total: number;
  count: number;
  id: number;
  name: string;
  image_url: string;
  category: {
    id: number;
  };
  price: number;
  inCart: boolean;
}

interface CardProductProps {
  selectedCategory: number | null;
}

export function CardProduct ({ selectedCategory }: CardProductProps) {
  const { card } = useContext(CardContext);
  const { AddItemCart } = useContext(CartContext);
  const [filteredCard, setFilteredCard] = useState<Food[]>([]);

  useEffect(() => {
    if (selectedCategory === null) {
      setFilteredCard([...card]);  
    } else {
      const filteredItems = card.filter((item) => item.category.id === selectedCategory) as Food[];
      setFilteredCard([...filteredItems]);  // Use spread operator to create a new array
    }
  }, [card, selectedCategory]);

  return (
    <div className="bg-white">
      <div className="mx-auto px-5 py-6 sm:px-6 sm:py-24 lg:max-w-7xl">
        <div className=" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-20">
          {filteredCard.map((food) => (
            <div className="group relative" key={food.id}>
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none relative">
                <img src={food.image_url} alt='' className="
                h-[200px] w-[300px]" />
              </div>
              <div className="mt-2 gap-2 flex flex-col">
                <div>
                  <h3 className="text-2xl pb-2 font-bold text-gray-700 border-b border-solid border-gray-400">
                    {food.name}
                  </h3>
                  
                  <div className=''></div>
                </div>
                <div className='flex items-center justify-evenly'>
                  <span className="mt-1 text-base md:text-lg text-gray-500">R$ {food.price}.00</span>
                  {
                    food.inCart ? (
                      <button className='bg-green-500 rounded-sm p-3 hover:bg-green-500/80 md:p-2'>
                        <FiCheck size={32} color='white'/>
                      </button>
                    ) : (
                      <button onClick={() => AddItemCart(food.id)} className='bg-zinc-800 rounded-sm p-3 hover:bg-zinc-900/80 md:p-2'>
                        <BiCart color='white' size={32} />
                      </button>
                    )
                  }
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>

  );
}
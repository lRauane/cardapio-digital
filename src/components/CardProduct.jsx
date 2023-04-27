import React, { useEffect, useState } from 'react';
import api from '../services/api';
import FoodItem from './Cart/FoodItemCard';

const CardProduct = () => {
  const [foods, setFoods] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchApi(){
      const response = await api.get("/foods")
      setFoods(response.data)
    }
    fetchApi()
  }, []);


  const addToCart = item => {
    setCartItems([...cartItems, item]);
  };


  return (
    <div className="bg-white">
      <div className="mx-auto  px-5 py-6 sm:px-6 sm:py-24 lg:max-w-7xl ">
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {foods.map(food => (
            <FoodItem key={food.id} food={food} onAddToCart={addToCart}/>
          ))}
        </div>
      </div>
    </div>

  );
}

export default CardProduct;

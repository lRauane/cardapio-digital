import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../services/api';

const Categories = () => {

  const [categoriesItem, setCategoriesItem] = useState([]);

  useEffect(() => {
    async function fetchApi(){
      const response = await api.get("/categories")
      setCategoriesItem(response.data)
    }
    fetchApi()
  }, []);


  return (
    <div className='flex w-full items-center mt-8 justify-center flex-wrap gap-5 lg:gap-20'>
      <button className='bg-yellow-500 p-3 w-52 text-white rounded-lg'>Todos</button>
      {categoriesItem.map(categorie => (
        <button key={categorie.id} className='bg-yellow-500/80 p-3 w-52 text-white rounded-lg'>{categorie.title}</button>
      ))
      }
    </div>
  );
}

export default Categories;

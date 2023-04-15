import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Categories = () => {

  const [categoriesItem, setCategoriesItem] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/categories')
      .then(response => {
        setCategoriesItem(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <div className='flex w-full items-center mt-8 justify-center flex-wrap gap-5 lg:gap-20'>
      {categoriesItem.map(categorie => (
        <button key={categorie.id} className='bg-zinc-800 p-3 w-52 text-white rounded-lg'>{categorie.title}</button>
      ))
      }
    </div>
  );
}

export default Categories;

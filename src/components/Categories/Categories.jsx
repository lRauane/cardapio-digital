import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const Categories = ({ handleCategoryButtonClick }) => {
  const [categoriesItem, setCategoriesItem] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      const response = await api.get("/categories");
      setCategoriesItem(response.data);
    }
    fetchApi();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='flex w-full items-center mt-8 justify-center flex-wrap gap-5 lg:gap-20'>
      <button
        className={`p-3 w-52 text-white rounded-lg ${
          selectedCategory === null ? 'bg-yellow-700' : 'bg-yellow-500'
        }`}
        onClick={() => handleCategoryButtonClick(null)}
      >
        Todos
      </button>
      {categoriesItem.map((category) => (
        <button
          key={category.id}
          className={`p-3 w-52 text-white rounded-lg ${
            selectedCategory === category.id ? 'bg-yellow-700' : 'bg-yellow-500'
          }`}
          onClick={() => handleCategoryButtonClick(category.id)}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
};

export default Categories;

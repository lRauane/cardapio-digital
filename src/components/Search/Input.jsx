import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi'
import api from '../../services/api';

const Input = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  async function searchRecipes(event) {
    event.preventDefault();

    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    const response = await api.get("/foods")
    const recipes = response.data;

    const results = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setSearchResults(results)
    setIsTyping(false);
  }

  useEffect(() => {
    if (searchTerm !== '') {
      setIsTyping(true);
      searchRecipes();
    } else {
      setSearchResults([]);
      setIsTyping(false);
    }
  }, [searchTerm]);

  return (
    <div>
      <form onSubmit={searchRecipes} className="flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
            setIsTyping(true);
          }}
          placeholder="Pesquise por um produto"
          className="p-3 md:p-4 lg:w-[300px] w-[100px] border w-full h-full border-gray-300 border-solid border-opacity-50 rounded-tl-sm rounded-bl-sm outline-none text-base"
        />
        <button
          type="submit"
          className="bg-zinc-800 p-3 md:p-4 rounded-tr-sm rounded-br-sm hover:bg-zinc-900/80"
        >
          <BiSearch size={27} color="white" />
        </button>
      </form>
      {isTyping && (
        <p className="bg-white w-[300px] md:w-[400px] rounded-lg text-black shadow-md shadow-black/40  p-4 mb-4 mt-2 absolute z-50">Procurando resultados...</p>
      )}

      {!isTyping && searchResults.length > 0 ? (
        searchResults.map(recipe => (

          <button key={recipe.id} className="bg-white w-[300px] rounded-lg text-black shadow-md shadow-black/40 p-4 absolute z-50">
            <div className='flex gap-5'>
              <img src={recipe.image_url} className='object-center h-full w-[100px]' />
              <div className='flex flex-col'>
              <h2 className="text-lg font-bold">{recipe.name}</h2>
              <span>R${recipe.price}.00</span>
              </div>
            </div>
          </button>

        ))
      ) : (
        !isTyping && searchTerm && <p className="bg-white w-[300px] md:w-[400px] rounded-lg text-black shadow-md p-4 mb-4 absolute z-50">Nenhum resultado encontrado</p>
      )}




    </div>
  );
}

export default Input;
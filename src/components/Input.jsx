import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi'
import api from '../services/api';

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
          className="p-3 md:p-4 md:w-[300px] w-[100px] border border-gray-300 border-solid border-opacity-50 rounded-tl-sm rounded-bl-sm outline-none text-base hidden md:block"
        />
        <button
          type="submit"
          className="bg-zinc-800 p-3 md:p-4 rounded-tr-sm rounded-br-sm hover:bg-zinc-900/80 hidden md:block"
        >
          <BiSearch size={27} color="white" />
        </button>
      </form>
      {isTyping && (
        <p className="bg-white w-[400px] rounded-lg text-blck shadow-md shadow-black/40  p-4 mb-4 mt-2 absolute z-50">Procurando resultados...</p>
      )}
      
      {!isTyping && searchResults.length > 0 ? (
        searchResults.map(recipe => (
          <div key={recipe.id} className="bg-white w-[50%]  rounded-lg text-black absolute shadow-md shadow-black/40 p-4 mb-4 z-50">
            <h2 className="text-lg  font-bold">{recipe.name}</h2>
            <p className="text-black">{recipe.description}</p>
            <div className="mt-2 flex">
              <span className="text-gray-600 mr-2">{recipe.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
          </div>
        ))
      ) : (
        !isTyping && searchTerm && <p className="bg-zinc-900 w-[400px] rounded-lg text-white shadow-md p-4 mb-4
          absolute z-50">Nenhum resultado encontrado</p>
      )}
    </div>
  );
}

export default Input;
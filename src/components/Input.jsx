import React from 'react';
import { BiSearch } from 'react-icons/bi'

const Input = () => {
  return (
    <form className='flex items-center'>
      <input
        type="text"
        placeholder='Pesquise por um produto'
        className='p-3 md:p-4 md:w-[300px] w-[100px] border border-gray-300 border-solid border-opacity-50 rounded-tl-sm rounded-bl-sm  outline-none text-base hidden md:block' />
      <button
       type='submit' 
       className='bg-zinc-800 p-3 md:p-4 rounded-tr-sm rounded-br-sm hover:bg-zinc-900/80 hidden md:block '>
        <BiSearch size={27} color='white'/>
      </button>
    </form>

  );
}

export default Input;

import React from 'react';
import { CookingPot } from '@phosphor-icons/react'
import Input from './Input';
import IconsActions from './IconsActions';

const NavBar = () => {
  return (
    <div>
      <nav className='flex flex-col md:flex-row w-full items-center p-5 justify-around gap-5'>
        <div className="flex items-center gap-4">
          <CookingPot className='text-yellow-400' size={32} weight="fill" />
          <h1 className='font-bold'>Menu Smart</h1>
        </div>
        <Input />
        <IconsActions />

      </nav>
    </div>
  );
}

export default NavBar;

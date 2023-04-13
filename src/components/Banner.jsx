import React from 'react';
import BannerImage from '../assets/banner.svg'

const Banner = () => {
  return (
    <div className='relative bg-cover bg-center h-64 mt-3' style={{
      backgroundImage: `url(${BannerImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      height: '400px',
      width: '100%',
    }}>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-white gap-5'>
        <h1 className='font-bold text-3xl md:text-5xl text-center'>Bem-vindo ao nosso cardápio digital!</h1>
        <p className='md:text-xl text-lg text-center'>Aqui você encontrará uma variedade de opções deliciosas para saciar sua fome.</p>
      </div>
    </div>
  );
}

export default Banner;

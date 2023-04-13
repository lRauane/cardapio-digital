import React from 'react';

const CardImage = ({img}) => {
  return (
    <div className='w-[200px] h-[200px]'>
      <img src={img}/>
    </div>
  );
}

export default CardImage;

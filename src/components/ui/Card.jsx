
import React from 'react';

const Card = ({ className, title, subTitle ,  img ,btn}) => {
  return (
    <div className={`w-80 p-6 rounded-xl  ${className}`}>

        <div className='card title' >{title}</div>
        <div>{img}</div>
       <p className="card subtitle">{subTitle}</p>
       <div>{btn}</div>
      </div>
  );
};


export default Card;

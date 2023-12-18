
import React from 'react';

const Card2 = ({ className, title, subTitle ,  img ,btn}) => {
  return (
    <div className={`w-80 p-6 rounded-xl border border-spacing-5 bg-slate-100 ${className}`}>
        <div>{img}</div>
        <div className='card title' >{title}</div>
       <p className="card subtitle2">{subTitle}</p>
       <div>{btn}</div>
      </div>
  );
};


export default Card2;

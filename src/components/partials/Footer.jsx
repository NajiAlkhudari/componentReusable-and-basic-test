import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer container bg-gray-100 p-2'>
      <div className='flex justify-center items-center'>
        <span className="text-black">@2023</span>
        <span className="text-sky-700">Naji Alkhudari</span>
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-black'>All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

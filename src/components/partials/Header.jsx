import React from 'react'
import './Header.css'
import naji from './../../assets/images/naji.jpg'; 
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';


const Header = () => {
  return (
    <header className='header '>
      <div className='flex items-center justify-between p-4 cursor-pointer '>
        <div className='flex items-center space-x-4 pl-4'>
          <img className='rounded-2xl opacity-90' src={naji} alt="logo" role="icon" width="80" height="100"  />
        <h1 className='font-bold '>Mohamad Naji Alkhudari</h1>
        </div>
        <ul className='flex space-x-4 font-semibold pr-10 '>
          <li className='text-black hover:text-sky-600'>Docs</li>
          <Link to="component" className='text-black hover:text-sky-600'>
    Components
  </Link>          <li className='text-black hover:text-sky-600'>About</li>
          <li className='text-black hover:text-sky-600'>
          <a href="https://github.com/NajiAlkhudari">
          <Icon icon="mdi:github" width="50" height="30"/>
          </a>
          </li>
        </ul>
      </div>
    </header>

  )
}

export default Header

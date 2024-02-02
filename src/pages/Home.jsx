import React from 'react'
import component from '../assets/images/component.png'

const Home = () => {
  return (
    <div className='grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-2 items-center p-8'>
      <div className=''>
<h1 className='text-6xl font-medium '>Reusable</h1>
<h1 className='text-6xl font-medium'> Component</h1> 
<h1 className='text-sky-800 text-8xl font-bold '>by React js </h1>
<p className= ' text-2xl font-serif pt-4'>
    Welcome to my Component Reusable!  
    </p>
    <p>
    Here  you will find a collection of reusable components that I’ve personally crafted. Each component is designed with versatility and efficiency in mind, ensuring they can be seamlessly integrated into a variety of projects.</p>

      </div>
      <div className='hidden sm:block '>
<img src={component} />
      </div>
    </div>
  )
}

export default Home

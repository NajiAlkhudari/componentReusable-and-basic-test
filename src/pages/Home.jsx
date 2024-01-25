import React from 'react'
import component from '../assets/images/component.png'

const Home = () => {
  return (
    <div className='grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-2 items-center p-8'>
      <div className=''>
<h1 className='text-5xl '>Reusable</h1>
<h1 className='text-5xl'> Component</h1> 
<h1 className='text-sky-800 text-6xl font-bold'>by React js </h1>
<p className= 'text-indigo-200 text-2xl font-serif pt-4'>
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

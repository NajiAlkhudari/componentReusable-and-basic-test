import React from 'react'
import TextInput from '../components/ui/TextInput/TextInput'

const TextInputSection = () => {
  return (
  <>
 
 <div className= 'py-16 grid  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  justify-between  items-center  bg-white '>
<div className='xl:px-16'>
              <h1 className='text-sky-700 text-6xl font-bold font-serif'>
              TextInput  
              </h1>
              <h1 className='text-sky-700 text-6xl font-bold font-serif'>
              Component 
              </h1>

  </div>

<div className=' py-10  grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 p-4 bg-white'>
    <div>  
          <TextInput 
               className="bg-gray-100 text-gray-600 mt-1 block py-2 px-3 border  border-gray-700 rounded-md  focus:outline-none  focus:border-sky-700 "  
               placeholder='Outlined'
    />
        <TextInput 
               className="bg-gray-100 text-gray-600 mt-1 block py-2 px-3 border-2 border-gray-700 border-dashed rounded-md  focus:outline-none  focus:border-sky-700 "  
               placeholder='Dashed'
    />
         <TextInput 
               className="bg-gray-100 text-gray-600 mt-1 block py-2 px-3 border-2 border-gray-700 border-dotted  rounded-md  focus:outline-none  focus:border-sky-700 "  
               placeholder='Dotted'
    />
        <TextInput 
               className="bg-gray-300 text-gray-600 mt-1 block py-2 px-3  border-b-4  border-gray-700 rounded-md  focus:outline-none  focus:border-sky-700 "  
               placeholder='Filled'
    />
        <TextInput 
               className="bg-gray-100 text-gray-600 mt-1 block py-2 px-3  border-b-2  border-gray-700 rounded-md  focus:outline-none  focus:border-sky-700 "  
               placeholder='Standard'
    />
 

<label htmlFor="" className='text-gray-700'>Password</label>
<TextInput 

               className="bg-gray-100 text-gray-600 mt-1 block py-2 px-3  border-b-2  border-gray-700 rounded-md  focus:outline-none  focus:border-sky-700 "  
               placeholder='password'
               type='password'
    />

<label htmlFor="" className='text-gray-700'>Search</label>
<TextInput 

               className="bg-slate-700 text-white mt-1 block py-2 px-3  border  border-white rounded-md  focus:outline-none  focus:border-white "  
               placeholder='search'
               type='search'
               />

<label htmlFor="" className='text-gray-700'>Number</label>
<TextInput 

               className="bg-gray-700 text-white mt-1 block py-2 px-3  border-b-2  border-gray-700 rounded-md  focus:outline-none  focus:border-sky-700 "  
               placeholder='12345'
               type='number'
    />
</div>
</div>  
</div>
  </>
  )
}

export default TextInputSection

import React from 'react'
import Button from '../components/ui/Button'

const Component = () => {
  const handleClick = ()=>{
    return alert('click!');
  }
  return (
    <>
    <div className='p-10 flex space-x-4 '>

<Button className= "py-3 px-8 bg-white rounded-lg  text-blue-600  font-semibold text-lg"
      onclick={handleClick}
      >
        TEXT
  
        </Button>

      <Button className= "py-3 px-8 bg-blue-500 rounded-lg text-white hover:bg-blue-600 font-semibold text-lg"
      onclick={handleClick}
      >
        Contained
  
        </Button>

        <Button className= "py-3 px-8 bg-white rounded-lg text-blue-600 border border-blue-500 font-semibold text-lg"
      onclick={handleClick}
      >
        Outlined
  
        </Button>

    </div>


<div className='p-10 flex space-x-4 '>



<Button className= "py-3 px-8 bg-white rounded-lg  text-rose-600  font-semibold text-lg"
      onclick={handleClick}
      >
        Secondary
  
        </Button>

      <Button className= "py-3 px-8 bg-green-600 rounded-lg text-white hover:bg-green-700 font-semibold text-lg"
      onclick={handleClick}
      >
        Success
  
        </Button>

        <Button className= "py-3 px-8 bg-white rounded-lg text-red-600 border border-red-600   font-semibold text-lg"
      onclick={handleClick}
      >
        Error
  
        </Button>

      
    </div>
    <div className='p-10 flex space-x-4 '>

    <Button className= "py-3 px-8 bg-yellow-400 rounded-lg text-black 00 font-semibold text-lg"
      onclick={handleClick}
      >
        Warning
  
        </Button>

        <Button className= "py-3 px-8 bg-gray-300 rounded-lg text-gray-700 font-semibold text-lg"
              onclick={handleClick}
              disable= {true}

      >
        Disabled
        </Button>

        <Button className= "py-3 px-8 bg-gray-950 rounded-lg text-white border border-black font-semibold text-lg"
      onclick={handleClick}
      >
        Dark
  
        </Button>
</div>

{/* <div className='p-10 flex space-x-4 '>
<Button className= "py-3 px-8 bg-white rounded-lg  text-blue-600  font-semibold text-lg"
      onclick={handleClick}
      >
        SMALL
  
        </Button>

        <Button className= "py-5 px-10 bg-white rounded-lg  text-blue-600  font-semibold text-lg"
      onclick={handleClick}
      >
        MEDIUM
  
        </Button>
        
        <Button className= "py-8 px-13 bg-white rounded-lg  text-blue-600  font-semibold text-lg"
      onclick={handleClick}
      >
        LARGE
  
        </Button>
</div> */}
        <div className='p-10 m-4 flex space-x-4 '>
          <div> <Button className= " py-1 px-4 bg-white rounded-lg text-blue-600 border border-blue-500 font-semibold text-lg"
      onclick={handleClick}
      >
        SMALL
  
        </Button></div>
       
       <div>  <Button className= " py-2 px-6 bg-white rounded-lg text-blue-600 border border-blue-500 font-semibold text-lg"
      onclick={handleClick}
      >
        MEDIUM
  
        </Button></div>
      
      <div><Button className= "py-3 px-8 bg-white rounded-lg text-blue-600 border border-blue-500 font-semibold text-lg"
      onclick={handleClick}
      >
        LARGE
  
        </Button></div>
        

        
</div>
    </>
  )
}

export default Component

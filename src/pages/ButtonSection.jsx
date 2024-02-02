import React from 'react'
import Button from '../components/ui/Button'
import { IoMdSend } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const ButtonSection = () => {
    const handleClick = ()=>{
        return alert('click!');
      }
  return (
    <>

<div className= 'pt-8 grid  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  justify-between items-center  bg-white '>

<div className='xl:px-16'>
              <h1 className='text-sky-700 text-7xl font-bold font-serif'>
              Button  
              </h1>
              <h1 className='text-sky-700 text-7xl font-bold font-serif'>
              Component 
              </h1>

  </div>
<div className='xl:px-16'>

    <div className='flex py-10  space-x-6 '>
   <div>            
     <Button className='btn btn-text'
          onClick={handleClick}
          >

            TEXT 
          
            </Button>   
</div>
   
        
       
            <Button className='btn btn-contained'
                      onClick={handleClick}
                      Icon={IoMdSend}
                      iconPosition="right"

            >
Send
            </Button>
    
            <Button className= 'btn btn-outlined'
          onClick={handleClick}
          >
            Outlined
      
            </Button>
    
        </div>
    
    
    <div className='flex py-10  space-x-6   '>
    
    
    
    <Button className= "btn btn-secondry"
          onClick={handleClick}
          >
            Secondary
      
            </Button>
    
          <Button className= "btn btn-success"
          onClick={handleClick}
          >
            Success
      
            </Button>
    
            <Button className= "btn btn-error"
          onClick={handleClick}
          Icon={MdDelete}
          iconPosition='left'
          >
            Delete
      
            </Button>
    
          
        </div>
        <div className='flex py-10  space-x-6 '>
    
        <Button className= "btn btn-warning"
          onClick={handleClick}
          >
            Warning
      
            </Button>
    
            <Button className= " btn btn-disabled"
                  onClick={handleClick}
                  disable= {true}
    
          >
            Disabled
            </Button>
    
            <Button className= "btn btn-dark"
          onClick={handleClick}
          >
            Dark
      
            </Button>
    </div>
    
    
            <div className='flex py-10 m-4  space-x-4 '>
              <div> <Button className= "btn btn-small"
          onClick={handleClick}
          >
            SMALL
      
            </Button></div>
           
           <div>  <Button className="btn btn-medium "
          >
            MEDIUM
      
            </Button></div>
          
          <div><Button className= "btn btn-large"
          onClick={handleClick}
          >
            LARGE
      
            </Button>
            </div>
            </div>
            </div>
 
            </div>
    </>
  )
}

export default ButtonSection

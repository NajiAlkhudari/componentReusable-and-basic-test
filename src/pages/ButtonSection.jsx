import React from 'react'
import Button from '../components/ui/Button'

const ButtonSection = () => {
    const handleClick = ()=>{
        return alert('click!');
      }
  return (
    <>
<div class=" text-white bg-gradient-to-r from-pink-950 ... h-20">
<h1 className=' font-bold text-3xl p-4 line-clamp-1 cursor-pointer '>Button</h1>
</div>

<div className='flex flex-col items-center '>
    <div className='flex p-10  space-x-6 '>
   
    <Button className='btn btn-text'
          onClick={handleClick}
          >
            TEXT  
      
            </Button>
       
            <Button className='btn btn-contained'
                      onClick={handleClick}

            >
Contained
            </Button>
    
            <Button className= 'btn btn-outlined'
          onClick={handleClick}
          >
            Outlined
      
            </Button>
    
        </div>
    
    
    <div className='flex p-10  space-x-6   '>
    
    
    
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
          >
            Error
      
            </Button>
    
          
        </div>
        <div className='flex p-10  space-x-6 '>
    
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
    
    
            <div className='flex p-10 m-4  space-x-4 '>
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
        
  
    </>
  )
}

export default ButtonSection

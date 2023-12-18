import React from 'react'
import Button from '../components/ui/Button'

const ButtonSection = () => {
    const handleClick = ()=>{
        return alert('click!');
      }
  return (
    <>
<div class="bg-gradient-to-r from-indigo-500 ... h-16">
<h1 className='font-bold text-3xl p-4 line-clamp-1 cursor-pointer '>Button</h1>
</div>

    <div className='p-10 flex space-x-6  m-10 '>
   
    
    <Button className='btn btn-text'
          onclick={handleClick}
          >
            TEXT  
      
            </Button>
       
            <Button className='btn btn-contained'
                      onclick={handleClick}

            >
Contained
            </Button>
    
            <Button className= 'btn btn-outlined'
          onclick={handleClick}
          >
            Outlined
      
            </Button>
    
        </div>
    
    
    <div className='p-10 flex space-x-6 m-10 '>
    
    
    
    <Button className= "btn btn-secondry"
          onclick={handleClick}
          >
            Secondary
      
            </Button>
    
          <Button className= "btn btn-success"
          onclick={handleClick}
          >
            Success
      
            </Button>
    
            <Button className= "btn btn-error"
          onclick={handleClick}
          >
            Error
      
            </Button>
    
          
        </div>
        <div className='p-10 flex space-x-6 '>
    
        <Button className= "btn btn-warning"
          onclick={handleClick}
          >
            Warning
      
            </Button>
    
            <Button className= " btn btn-disabled"
                  onclick={handleClick}
                  disable= {true}
    
          >
            Disabled
            </Button>
    
            <Button className= "btn btn-dark"
          onclick={handleClick}
          >
            Dark
      
            </Button>
    </div>
    
    
            <div className='p-10 m-4 flex space-x-4 '>
              <div> <Button className= "btn btn-small"
          onclick={handleClick}
          >
            SMALL
      
            </Button></div>
           
           <div>  <Button className="btn btn-medium "
          >
            MEDIUM
      
            </Button></div>
          
          <div><Button className= "btn btn-large"
          onclick={handleClick}
          >
            LARGE
      
            </Button>

            </div>
            </div>
        
  
    </>
  )
}

export default ButtonSection

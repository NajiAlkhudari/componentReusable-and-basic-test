import React from 'react'
import Alert from '../components/ui/Alert'
import { IoIosWarning  } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
const AlertSection = () => {
  return (
    <>
   
   <div className= 'py-10 grid  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  justify-between  items-center  bg-gray-900 '>
<div className='px-4 xl:px-16 py-8'>
              <h1 className='text-gray-200 text-6xl font-bold font-serif'>
              Alert  
              </h1>
              <h1 className='text-gray-200 text-6xl font-bold font-serif'>
              Component 
              </h1>

  </div>

     <div className='flex flex-col md:px-36 lg:px-52  xl:px-20    space-y-10 '> 
    
            <Alert type="success" showButton={true}>
            <div className='flex items-center '>
            <FaRegCheckCircle />
            This is an success Alert.
    
              </div>          </Alert>
          
            <Alert type="error" showButton={true}>
            This is an error Alert.
    
    
           <ul>
            <li>. step 1</li>
            <li>. step 2</li>
            <li>. step 3</li>
    
           </ul>
    
    </Alert>
            <Alert type="info" >
            This is an info Alert.
            </Alert>
            <Alert type="warning" showButton={true}>
            <div className='flex items-center '>
              <IoIosWarning />
            This is an error Alert.
    
              </div>        </Alert>
            
          </div>
          </div>
          </>
  )
}

export default AlertSection

import React from 'react'
import Alert from '../components/ui/Alert'
import { IoIosWarning  } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
const AlertSection = () => {
  return (
    <>
    <div class=" text-white bg-gradient-to-r from-pink-950 ... h-20 ">
    <h1 className='font-bold text-3xl p-4 line-clamp-1 cursor-pointer'>Alert</h1>
    </div>
     <div className='flex flex-col md:px-36 lg:px-52  xl:px-72   bg-white space-y-10 '> 
    
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
          </>
  )
}

export default AlertSection

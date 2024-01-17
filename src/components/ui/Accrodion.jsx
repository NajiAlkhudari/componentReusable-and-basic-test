import React, { useState } from 'react';
import { AiFillCaretRight  , AiFillCaretDown  } from "react-icons/ai";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className=" xl:mx-96  flex flex-col border rounded-md overflow-x-hidden bg-white ">


        
    
        <button
          className="  "
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className='flex   justify-between items-center px-6 py-2'>   <span className='font-medium  text-black '>{title}</span> 
          <span className='text-black'>{isOpen ? <AiFillCaretDown /> : <AiFillCaretRight  />}</span></div>
        
        </button>     
        {isOpen && (
          <div className="border-t p-4 text-black">
            {children}
          </div>
        )}
      </div>
  );
};

export default Accordion;

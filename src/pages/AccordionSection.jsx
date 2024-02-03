import React from 'react'
import Accordion from '../components/ui/Accrodion'

const AccordionSection = () => {
  return (
    <>    
<div className= 'py-10 grid  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  justify-between  items-center  bg-gray-900 '>
<div className='sm:pl-8 xl:px-16'>
              <h1 className='text-gray-200 text-6xl font-bold font-serif'>
              Accrodion  
              </h1>
              <h1 className='text-gray-200 text-6xl font-bold font-serif'>
              Component 
              </h1>

  </div>
<div className='xl:px-16'>

    <div className='space-y-2 h-36 m-4'>
    <Accordion title="My custom from name " >
            <p>This is the content for section 1.</p>
          </Accordion>
          <Accordion title="Food menu ">
            <p>This is the content for section 2.</p>
          </Accordion>
    </div>
    </div>
    </div>

    </>


  )
}

export default AccordionSection

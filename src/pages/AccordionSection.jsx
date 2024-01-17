import React from 'react'
import Accordion from '../components/ui/Accrodion'

const AccordionSection = () => {
  return (
    <>        <div class="text-white bg-gradient-to-r from-pink-950 ... h-20">

        <h1 className='font-bold text-3xl p-4 line-clamp-1 cursor-pointer '>Accordion</h1>
</div>
    <div className='space-y-2 h-36 m-4'>

    <Accordion title="My custom from name ">
            <p>This is the content for section 1.</p>
          </Accordion>
          <Accordion title="Food menu ">
            <p>This is the content for section 2.</p>
          </Accordion>
    </div></>


  )
}

export default AccordionSection

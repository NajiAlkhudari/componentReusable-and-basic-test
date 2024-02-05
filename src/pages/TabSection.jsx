import React from 'react'
import Tab from '../components/ui/Tab/Tab'
import Card from '../components/ui/Card'
const TabSection = () => {
  return (
    <div className= 'py-10 grid  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  justify-between  items-center  bg-gray-900 '>
    <div className='px-4 xl:px-16 py-8'>
    <h1 className='text-gray-200 text-6xl font-bold font-serif'>
              Tabs  
              </h1>
              <h1 className='text-gray-200 text-6xl font-bold font-serif'>
              Component 
              </h1>
              </div>
              <div className='px-16'>
              <Tab className="px-16">
      <div label="Home">
        <h1>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</h1>
      </div>
      <div label="Profile">
        <h1>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</h1>
      </div>
      <div label="Message">
        <h1>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
</h1>
      </div>
      <div label="Settings">
        <h1>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
</h1>
      </div>
    </Tab>
              </div>
   

   </div>

 
  )
}

export default TabSection

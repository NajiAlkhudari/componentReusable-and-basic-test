import React from 'react'
import Avatar from '../components/ui/Avatar'
import naji3 from '../assets/images/naji3.avif'

const AvatarSection = () => {
  return (
    <>
 
 <div className= 'py-10 grid  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  justify-between  items-center  bg-white '>
<div className='px-4 xl:px-16'>
              <h1 className='text-sky-700 text-6xl font-bold font-serif'>
              Avatar  
              </h1>
              <h1 className='text-sky-700 text-6xl font-bold font-serif'>
              Component 
              </h1>

  </div>

<div className='sm:p-4 md:p-16 lg:p-20 bg-white'>  
      <div className='flex  flex-wrap-reverse p-6 rounded-md bg-slate-100  border border-spacing-1 space-x-9 '>
    <Avatar text="N" color="blue" size="small" />
 <Avatar text="NA" color="blue" size="medium" />
 <Avatar text="NAJI" color="blue" size="large" />
 <Avatar src={naji3}  size="xlarge" />
 <Avatar src={naji3}  size="xxlarge" />

 </div>
 </div>
</div>
 </>
  )
}

export default AvatarSection

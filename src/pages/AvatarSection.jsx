import React from 'react'
import Avatar from '../components/ui/Avatar'
import naji3 from '../assets/images/naji3.avif'

const AvatarSection = () => {
  return (
    <>
    <div class=" text-white bg-gradient-to-r from-pink-950 ... h-20">
<h1 className=' font-bold text-3xl p-4 line-clamp-1 cursor-pointer '>Avatar</h1>
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

 </>
  )
}

export default AvatarSection

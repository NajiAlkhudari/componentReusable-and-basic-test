import React from 'react'

const AlertTest = () => {
  return (
    <>
    <div class=" text-white bg-gradient-to-r from-pink-950 ... h-20">
    <h1 className='font-bold text-3xl p-4 line-clamp-1 cursor-pointer '>Alert</h1>
    </div>
    <div className='flex flex-col md:px-36 lg:px-52  xl:px-72   bg-white space-y-10 '> 
        <div className='flex px-4 py-5 rounded-md bg-blue-100 w-full  '>
		<p className='text-blue-950 font-semibold'>
            The conference starts at 10:00 AM in Hall B. Don't be late!
            </p>
    </div>
    <div className='px-4 py-5 rounded-md bg-red-100 w-full  '>
		<p className='text-red-950 font-semibold'>
            Unable to connect to the server. Please try again later or contact support.
</p>
    </div>
    <div className='px-4 py-5 rounded-md bg-green-100 w-full  '>
		<p className='text-green-950 font-semibold'>
            Your payment was processed successfully. Thank you!
</p>
    </div>
    <div className='px-4 py-5 rounded-md bg-yellow-100 w-full  '>
		<p className='text-yellow-950 font-semibold'>
            Your payment was processed successfully. Thank you!
</p>
    </div>
    </div>
    </>
  )
}

export default AlertTest

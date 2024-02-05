import React from 'react'
import Card from '../components/ui/Card'
import card1 from '../assets/images/card1.jpg'
import card2 from '../assets/images/card2.jpg'
import card3 from '../assets/images/card3.jpg'
import card4 from '../assets/images/card4.jpg'


const CardSection = () => {

  const handleClick =()=>{
    return alert('Card Click !');
  }
  
  return (
    <>


<div className='pt-16 grid  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1  justify-between items-center bg-white '>

<div className='px-4 xl:px-16 py-16 '>
              <h1 className='text-sky-700 text-6xl font-bold font-serif'>
              Card  Component
              </h1>
             

  </div>
 

   <div className=' grid justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4  gap-y-4'>
   <Card className='card ml-5 bg-black text-white space-y-2'>
    <Card.Title>Card Title </Card.Title>
    <Card.Image src={card1}></Card.Image>

    <Card.SubTitle>subTitle This is a sample card component with React, CSS, and Tailwind CSS</Card.SubTitle>
    <Card.Button
      onclick={handleClick}
       className='btn btn-warning'> Button </Card.Button>
   </Card>

   <Card className='card ml-5 bg-black text-white space-y-2'>
    <Card.Title>Card Title </Card.Title>
    <Card.Image src={card2}></Card.Image>

    <Card.SubTitle>subTitle This is a sample card component with React, CSS, and Tailwind CSS</Card.SubTitle>
    <Card.Button
      onclick={handleClick}
       className='btn btn-contained'> Button </Card.Button>
   </Card>
   <Card className='card ml-5 bg-white text-black space-y-2'>
   <Card.Image src={card3}></Card.Image>

    <Card.Title>Card Title </Card.Title>

    <Card.SubTitle>subTitle This is a sample card component with React, CSS, and Tailwind CSS</Card.SubTitle>
    <Card.Button
      onclick={handleClick}
       className='btn btn-text '> Button </Card.Button>
   </Card>
   <Card className='card ml-5 bg-white text-black space-y-2'>
   <Card.Image src={card4}></Card.Image>

    <Card.Title>Card Title </Card.Title>

    <Card.SubTitle>subTitle This is a sample card component with React, CSS, and Tailwind CSS</Card.SubTitle>
    <Card.Button
      onclick={handleClick}
       className='btn btn-secondry'> Button </Card.Button>
   </Card>
   </div>

       </div>
      </>
  )
}

export default CardSection

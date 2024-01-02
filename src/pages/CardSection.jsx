import React from 'react'
import Card from '../components/ui/Card'
import Card2 from '../components/ui/Card2'
import Image from '../components/ui/Image'
import card1 from '../assets/images/card1.jpg'
import card2 from '../assets/images/card2.jpg'
import card3 from '../assets/images/card3.jpg'
import card4 from '../assets/images/card4.jpg'
import Button from '../components/ui/Button'

const CardSection = () => {

  const handleClick =()=>{
    return alert('Card Click !');
  }
  
  return (
    <>
<div class="bg-gradient-to-r from-indigo-500 ... h-16">
<h1 className='font-bold text-3xl p-4 line-clamp-1 cursor-pointer'>Card</h1>
</div>

    <div className='grid justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4  gap-y-4'>
    <Card className='card ml-5 bg-black text-white space-y-2  '
    title= 'Card Title'
    img={<Image src={card1} />}
    subTitle= 'subTitle This is a sample card component with React, CSS, and Tailwind CSS'
    btn ={<Button 
      onclick={handleClick}
      className='btn btn-contained'> Button </Button>}
     />

<Card className='card ml-5 bg-black text-white space-y-2 '
    title= 'Card Title '
    img={<Image src={card2} />}
    subTitle= ' subTitle This is a sample card component with React, CSS, and Tailwind CSS'
    btn ={<Button
      onclick={handleClick}
       className='btn btn-text '> Button </Button>}
     />

      
<Card2 className='card space-y-2'
     title= 'Card Title '
     img={<Image src={card3} />}
     subTitle= 'SubTitle This is a sample card component with React, CSS, and Tailwind CSS'
     btn ={<Button
      onclick={handleClick}
       className='btn btn-secondry'> Button </Button>}

      />
      
     <Card2 className='card space-y-2'
     title= 'Card Title '
     img={<Image src={card4} />}
     subTitle= 'SubTitle This is a sample card component with React, CSS, and Tailwind CSS'
     btn ={<Button
      onclick={handleClick} 
        className='btn btn-warning'> Button </Button>}

      />
      </div>
      </>
  )
}

export default CardSection

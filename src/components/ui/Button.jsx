import React from 'react'

const Button = ({className , disable, Icon , iconPosition ,type  , onClick  , children ,value }) => {
  return (
    <button className={`btn ${className}`}
    disabled={disable}
    type={type}
    onClick={onClick}
    value={value}
   
    >

<div className='flex items-center'>
      {iconPosition === 'left' && Icon && <Icon className="mr-1"/>}
      {children} 
      {iconPosition === 'right' && Icon && <Icon className="ml-1"/>}
      </div>
      </button>
     
  )
}

export default Button





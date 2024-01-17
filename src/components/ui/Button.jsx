import React from 'react'

const Button = ({className , disable, text ,type  , onClick  , children ,value }) => {
  return (
    <button className={`btn ${className}`}
    disabled={disable}
    type={type}
    onClick={onClick}
    value={value}
   
    >
      <span>{text}</span>
      {children}
      </button>
     
  )
}

export default Button





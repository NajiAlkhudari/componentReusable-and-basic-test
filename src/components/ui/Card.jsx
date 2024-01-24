
import React from 'react';
import Button from './Button';
import Image from './Image';
import Title from './Title';
import SubTitle from './SubTitle';
const Card = ({children , className}) => {
  return (
    <div className={`w-80 p-6 rounded-xl  ${className}`}>
{children}
      </div>
  );
};

Card.Title=Title;
Card.SubTitle=SubTitle;
Card.Image=Image ;
Card.Button=Button;


export default Card;


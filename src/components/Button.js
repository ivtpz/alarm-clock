import React from 'react';

const Button = ({action, text, currClass}) => {
  return (
    <button className={currClass} onClick={action}>{text}</button>    
  )
}

export default Button;
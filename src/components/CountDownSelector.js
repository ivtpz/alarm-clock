import React from 'react';
import Button from './Button';

const CountDownSelector = ({updateInput, startCountdown, countingDown, cancelCountDown}) => {
  
  let action = countingDown ? cancelCountDown : startCountdown;
  let text = countingDown ? 'Cancel' : 'Start';
  let className = "countdown-button "
  className += countingDown ? "cancel" : "start"

  return (
    <div className="countdown-form">
      <input type="number" className="time-input" placeholder="0" min="0" onChange={updateInput.bind(this, 'countDownMin')}/> m
      <input type="number" className="time-input" placeholder="0" min="0" max="60" onChange={updateInput.bind(this, 'countDownSec')}/> s 
      <Button action={action} text={text} currClass={className}/>
    </div>
  )
}

export default CountDownSelector;
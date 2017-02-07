import React from 'react';

const padNum = (num) => num < 10 ? '0' + num : num;

const Clock = ({hours, min, sec}) => {
  return(
    <div>
      The current time is {padNum(hours)}:{padNum(min)}:{padNum(sec)}
    </div>
  )
}

export default Clock;
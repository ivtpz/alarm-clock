import React from 'react';

const RemainingTime = ({remainingSec}) => {
  if (remainingSec) {
    return (
      <div>There are {remainingSec}s remaining</div>  
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default RemainingTime;

// The issue is that
//  this component has color state initialized 
//  with the initial value of the color prop. 
//  But when the color prop changes, 
//  this does not affect the state variable! 
//  So they get out of sync. To fix this issue, 
//  remove the state variable altogether, and 
//  use the color prop directly.

import { useState } from 'react';

export default function Clock(props) {
  const [color, setColor] = useState(props.color);
  return (
    <h1 style={{ color: props.color }}>
      {props.time}
    </h1>
  );
}

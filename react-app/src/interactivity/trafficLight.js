import { useState } from 'react';

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
   setTimeout(()=>{
      alert(walk?'Stop is next':"Walk is next");
   },3000);
    setWalk(!walk);
    
  }

  return (
    <>
      <button onClick={handleClick}>
         {walk ? 'Stop' : 'Walk'} is next
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}
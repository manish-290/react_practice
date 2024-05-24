//update the same state multiple times
//use the batches to update the whole logic inside 
//the event handle at once in single render
//react queues this functions and renders all at once



import React, { useState } from 'react';

const UpdateStateCounter = () => {
    const [number, setNumber]= useState(0);

    //react takes the return value of your previous updater
    //function and passes it to the next queue
    function handleCounter(){
        setNumber(n=>n+1);//react add it to queue 0+1=1
        setNumber(n=>n+1);//react add it to queue 1+1=2
        setNumber(n=>n+1);//react add it to queue 2+1=
        
        //if we add this code to queue, 42 is displayed as final
        // setNumber(number + 5);
        // setNumber(n => n + 1);
        // setNumber(42);
    }
  return (
    <div>
        <h1>{number}</h1>
        <button onClick={handleCounter}>+3</button>
    </div>
  );
}

export default UpdateStateCounter;
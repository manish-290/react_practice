
//instead of the two state variables x and y
//you can declare the single state variable position
// and we cannot  change the single variable of state objects 
import {useState} from 'react';

export default function  GroupState(){
    const [position,setPosition]= useState({x:0,y:0});
    return(
        <div
        onPointerMove={e => {
          setPosition({
            x: e.clientX,
            y: e.clientY
          });
        }}
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
        }}>
        <div style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }} />
      </div>
    )
}
import { useState } from 'react';

let initialCounters=[
    0,0,0
]

export default function ReplacingArrayItems(){
    const [counters,setCounters]= useState(initialCounters);

    const  handleIncrement=(index)=>{
       const nextCounter = counters.map((c,i)=>{
        if(i === index){
            return c+1;
        }else{
            return c;
        }
       });
       setCounters(nextCounter);
    }
    return(
        <>
            <ul>
                {counters.map((counter,i)=>
                <li key={i}>
                    {counter}{' '}
                    <button onClick={()=>{
                        handleIncrement(i);
                    }}>
                        +1
                    </button>
                </li>
                )}
            </ul>
        </>
    )
}
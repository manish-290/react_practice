//initializing the state variables doesnot fix the react
//re renering the react initializes from start

import { sculptureList } from "./data"
import { useState } from "react";
export default  function Gallery2(){
    const [index,setIndex]=useState(0);
    const [showMore,setShowMore]= useState(false);

    function handleClick(){
        setIndex(index+1);
    }
    function showDescription(){
        setShowMore(!showMore);
    }
    let sculpture = sculptureList[index];
    return(
        <div>
            <button onClick={handleClick}>
                Next
            </button>
            <h1>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h1>
            <h5>({index+1} of {sculptureList.length})</h5>
            <button onClick={showDescription}>
                {showMore? 'Hide':"Show"} Details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
            src={sculpture.url}
            alt={sculpture.alt}/>
            
        </div>
    )
}
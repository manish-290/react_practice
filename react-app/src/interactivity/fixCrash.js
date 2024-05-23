import React, { useState } from 'react';
import {sculptureList} from './data.js';
const FixSculpture = () => {
    const [index,setIndex] = useState(0);
    const [showMore,setShowMore]= useState(false);
let sculpture = sculptureList[index];
let hasNext = index < sculptureList.length -1;
let previous = index>0;
//handle next click
function handleNextClick(){

    if(hasNext){
        setIndex(index+1);
    }
}

//handle previous click
function handlePrevClick(){
    if(previous){
        setIndex(index-1);
    }
}

//handle description
function handleDescription(){
    setShowMore(!showMore);
}

  return (
    <>
        <button onClick={handleNextClick}>
            Next
        </button>
        <button onClick={handlePrevClick}>
            Previous
        </button>

        <h2>{sculpture.name} by {sculpture.artist}</h2>
        <p>({index} of {sculptureList.length-1})</p>
       
        <img src={sculpture.url} alt = {sculpture.alt}/><br/>
        <button onClick={handleDescription}>
            {showMore ? "Hide":"Show"} Details</button>
            {showMore && <p>{sculpture.description}</p>}

    </>
  );
}

export default FixSculpture;
export function getFinalState(baseState, queue) {
    let finalState = baseState;
    
    // TODO: do something with the queue...
  //here update the final state from base state
  for(let update of queue){
    if(typeof update==='function'){
        finalState = update(finalState);
    }else{
        finalState = update;
    }
  }
    
    return finalState;
  }
  
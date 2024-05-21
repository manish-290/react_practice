
// let guest =0;
function Cup({guest}) {
  // Bad: changing a preexisting variable! 
  //inintended behaviour if props not passed
//   guest = guest + 1;

  return <h2>Tea cup for guest #{guest}</h2>;
}

 function TeaGathering(){
    const cups=[];
for(let i=1;i<=12;i++){
    cups.push(<Cup key={i} guest={i}/>)
}
return cups;
}


export default function TeaSet() {
  return (
    <>
      <TeaGathering/>
    </>
  );
}
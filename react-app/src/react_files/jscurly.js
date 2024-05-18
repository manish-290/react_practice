const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function JsCurly() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}



//   const today = Date();
  
// function TodayDate(date){
//     return new Intl.DateTimeFormat(
//         'en-US',
//         {weekend:'long'}
//     ).format(date);
// }

//   const JsCurly =()=>{
//     const name= 'Manish';
//     return(
//         <h1>{TodayDate(today)} is the date</h1>
//     )
// }
// export default JsCurly;
//move the data into the array
// const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
//   ];

import { getImageUrlByPerson } from "./utils";

const people = [{
    name:"Manish",
    id:0,
    profession:"web developer",
    imageId: 'MK3eW3A'
},
{
    name:"Sagar",
    id:1,
    profession:"doctor",
    imageId: 'mynHUSa'
},
{
    name:"Ujjwal",
    id:2,
    profession:"web developer",
    imageId: 'bE7W1ji'
},

];

  const fruits=[
    'Apple',
    'Banana',
    'Orange',   
    'Grapes',
  ];

  //filtering the array of items

  export default function List(){
    // const listItems = people.map(person=><li>{person}</li>)
    // return <ul>{listItems}</ul>

    //hereis the mapping the array data into unordered list
    const FruitsItems = fruits.map(fruit=><li>{fruit}</li>)

      //filtering the array of items
const webPeople = people.filter(
    person=>person.profession ==='web developer');

    //now map the filtered data
    const mappedWebDeveloper = webPeople.map(
        person=>
        <li key={person.id}>
            
            <img src={getImageUrlByPerson(person)}
            alt={person.name}
            />
            <p>
                <b>{person.name}</b>
                {' '+ person.profession + ' '}
            </p>
        </li>);

    return (
        <>
        {/* <ul>{listItems}</ul> */}
        <ul>{FruitsItems}</ul>
        <ul>{mappedWebDeveloper}</ul>
        </>
    )
  }

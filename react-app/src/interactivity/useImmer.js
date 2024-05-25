import {useImmer} from 'use-immer';

export default function Form1(){
    const [person, setPerson]= useImmer({
        name:'Manish',
        artwork:{
            title:"web developer",
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }

    });

    function handleName(e){
        setPerson((draft)=>{
            draft.name=e.target.value;
        })
    }
    function handleCity(e){
        setPerson((draft)=>{
            draft.artwork.city=e.target.value;
        })
    }
    function handleImage(e){
        setPerson((draft)=>{
            draft.artwork.image=e.target.value;
        })
    }
    function handleTitle(e){
        setPerson((draft)=>{
            draft.artwork.title=e.target.value;
        })
    }
    return(
        <>
            <label>
                Name:
                <input 
                value={person.name}
                onChange={handleName}/>
            </label><br/>
            <label>
                Title:
                <input value={person.artwork.title} onChange={handleTitle}/>
            </label>
            <label>
                City:
                <input value={person.artwork.city} onChange={handleCity}/>
            </label>
            <label>
                Image:
                <input value={person.artwork.image} onChange={handleImage}/>
            </label>

            <p>
                <i>{person.artwork.title} </i>
                {'by '}
                 {person.name}
                <br/>
                (located in {person.artwork.city})
            </p>
            <img
            src={person.artwork.image}
            alt={person.artwork.title}
            />
        </>
    )
}
import {useState} from 'react';

//global array
let initialArtists=[
    {id:0,name:'MAnish'},
    {id:1,name:"Prajjwal"},
    {id:2,name:"kapil"}
]

export default function RemoveFromArray(){
    const [artists,setArtists]=useState(initialArtists);


    
    return(
        <>
        <h1>Inspiring sculptors</h1>
        <ul>
            
                {artists.map(artist=>(
                    <li key={artist.id}>
                        {artist.name}{'  '}
                        <button onClick={()=>{
                             setArtists(
                                artists.filter(a=>
                                    a.id !== artist.id
                                )
                            )
                        }}>
                            Delete
                        </button>
                    </li>
                ))}
            
        </ul>
        </>
    )
}
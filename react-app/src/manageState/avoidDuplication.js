import { useState } from "react";

const initialItems=[
{title:"pizza",id:0},
{title:"burger",id:1},
{title:"chicken drumstick",id:2}
]

export default function DuplicateState(){
    const [items,setItems]=useState(initialItems);
    const [selectedId, setSelectedId]=useState(0);

    const selectedItem = items.find((item)=>
    item.id === selectedId);

    function handleItemChangeById(id,e){
        setItems(items.map((item)=>{
            if(item.id ===id){
                return{
                    ...item,
                    title:e.target.value
                }
            }else{
                return item;
            }
        }))
    }
    return(
        <div>
            <h2>Avoid duplicate state</h2>
            <ul>
               {
                items.map((item,index)=>(
                    <li key={item.id}>
                        <input value={item.title}
                        onChange={(e)=>{
                            handleItemChangeById(item.id,e)
                        }}/>
                        {' '}
                        <button onClick={()=>{setSelectedId(item.id)}}> Choose</button>
                        </li>
                )
                    
                )
               }
            </ul>
            <p>The selected item is {selectedItem.title}</p>
        </div>
    )
}
import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState([]);

  // TODO: allow multiple selection
  const selectedCount = selectedIds.length;
  
  
  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    if(selectedIds.includes(toggledId)){
      //if already in the array, remove it from the array
      setSelectedIds(selectedIds.filter(id=>{
        id !== toggledId
      }));
    }else{
      //add the id to new array
      setSelectedIds([
        ...selectedIds,
        toggledId
      ])
    }
    
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              selectedIds.includes(letter.id)
              
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}

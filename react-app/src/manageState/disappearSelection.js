

// The problem is that you’re holding the letter 
// object in highlightedLetter. But you’re also holding 
// the same information in the letters array. So your state
//  has duplication! When you update the letters array after 
//  the button click, you create 
// a new letter object which is different from highlightedLetter.
//  This is why highlightedLetter === letter check becomes false,
//   and the highlight disappears. It reappears the next time
//    you call setHighlightedLetter when the pointer moves.

// To fix the issue, remove the duplication from state. 
// Instead of storing the letter itself in two places, 
// store the highlightedId instead. Then you can check 
// isHighlighted for each letter with letter.id === highlightedId,
//  which will work even if the letter object has changed since
//   the last render.


import { useState } from 'react';
import { initialLetters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedId, setHighlightedId ] = useState(null);

  function handleHover(letterId) {
    setHighlightedId(letterId);
  }

  function handleStar(starredId) {
    setLetters(letters.map(letter => {
      if (letter.id === starredId) {
        return {
          ...letter,
          isStarred: !letter.isStarred
        };
      } else {
        return letter;
      }
    }));
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={
              letter.id === highlightedId
            }
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}

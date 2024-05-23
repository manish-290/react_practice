// This ColorSwitch component renders a button. 
// It’s supposed to change the page color. Wire it up to
//  the onChangeColor event handler prop it receives from
//   the parent so that clicking the button changes the color.


export default function ColorSwitch({
    onChangeColor
  }) {
    
    return (
      <button onClick={(e)=>{
        e.stopPropagation();
        onChangeColor();
      }}>
        Change color
      </button>
    );
  }
  
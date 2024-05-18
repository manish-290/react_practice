const person = {
    name:'Manish',
    theme:{
        backgroundColor:'black',
        color:'pink'
    }
}

export default function TodoList(){

    return(
        <div style={person.theme}>
            <h1>{person.name} Todo List</h1>
            <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
        </div>
             // double curly for the jsx objects
        //and the styles are written in camelcase eg.paddingLeft
        // <ul style={{
        //     backgroundColor:'black',
        //     color:'pink',
        //     padding:'100px',
        //     margin:'20px'
        // }}>
        //     <li>item1</li>
        //     <li>item2</li>
        //     <li>item3</li>
        // </ul>
    )
}
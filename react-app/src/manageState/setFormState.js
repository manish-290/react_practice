import {useState} from "react";

export default function EditProfile() {
  const [firstName,setFirstName]=useState("Manish ");
  const [lastName,setLastName]= useState("Paudel");
  const [editing,setEditing]= useState(false);

  function handleSubmit(e){
    e.preventDefault();
    setEditing(!editing);
  }

  function handleFirstName(e){
    setFirstName(e.target.value);
  }
  function handleLastName(e){
    setLastName(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:{' '}
        
        {editing?
        (<input 
           value={firstName}
           onChange={handleFirstName}
           />)
          :(<b>{firstName}</b>)
        }
      </label>
      <label>
        Last name:{' '}
        
      { editing ?
      (<input value={lastName} onChange={handleLastName}/>)
      :(<b>{lastName}</b>)}
      </label>
      <button type="submit">
        {editing?"Save":"Edit"} Profile
      </button>
      <p><i>Hello, {firstName} {lastName}</i></p>
    </form>
  );
}

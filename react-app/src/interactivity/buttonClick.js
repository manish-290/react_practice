

function AlertButton({message,children}){

    const handleClick =()=>{
        alert(message)
    }
    return(
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default function ClickButton(){

    return(
       <div>
         <AlertButton message="Playing">
            Play movie
        </AlertButton>
        <AlertButton message='Uploading'>
            Upload Image
        </AlertButton>
       </div>
    )
}
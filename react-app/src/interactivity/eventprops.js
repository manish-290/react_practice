function Button({onClick,children}){
    return(
        <button onClick={onClick}>
            {children}
        </button>
    )
}

function PlayButton({movieName}){
    function handleClick(){
        alert(`playing ${movieName}`)
    }
    return(
        <Button onClick={handleClick}>
            Play "{movieName}"
        </Button>
    )
}

function UploadButton(){
    return(
        <button onClick={()=>alert('Uploading')}>
            Upload Image
        </button>
    )
}

export default function ToolBar(){
    return(
        <div>
            <PlayButton movieName="The Matrix" />
            <UploadButton/>
        </div>
    )
}
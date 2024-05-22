export default function Signup(){
    return(
        <form onSubmit={(e)=>{
            //  e.preventDefault(); helps prevent reload the whole page
            // when form submitted and prevents default 
            //browser behaviour
            e.preventDefault();
            alert("Form submitted")
        }} >
            <input/>
            <button >Send</button>

        </form>
    )
}
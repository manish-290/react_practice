//state is specific and private to the  single component
// State is local to a component instance on the screen.
//  In other words, if you render the same component twice, 
//  each copy will have completely isolated state! Changing one 
// of them will not affect the other.
import Gallery2 from "./state_memory";

// it does not affect the other components
export default function Page(){
    return(
      <div>
          <Gallery2/>
        <Gallery2/>
      </div>
    )
}
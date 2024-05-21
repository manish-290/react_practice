// This RecipeList component contains two nested map calls.
//  To simplify it, extract a Recipe component from it which will 
//  accept id, name, and ingredients props. Where do you place
//   the outer key and why?


import { recipes } from './data.js';

function Recipe({
  id,
  name,
  ingredients
}){
  return(
     <div>
       <h2>{name}</h2>
          <ul>
            {ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
</div>
  );
}

export default function RecipeListComponent() {
  return (
   <div>
     <h1>Recipes</h1>
       {recipes.map(recipe =>
        <div key={recipe.id}>    
             <Recipe 
               {...recipe}
               key={recipe.id}
             />
          </div>
          )}
   </div>     
  )
}

import React from 'react'
import { useParams, Link } from 'react-router-dom'

function RecipeDetails({recipes,toggleFav}) {
 const { id } = useParams()
 const r = recipes.find((x)=>x.id === Number(id))

 if(!r){
    return (
      <div>
      <p>Recipe not found.</p>
        <Link to="/recipes">Back to Recipes</Link>
      </div>
    )
 }

 const {id:rid,name,emoji,cuisine,type,cookingTime,difficulty,ingredients,isFavourite} = r

 return (
    <div>
       <h2>{emoji}  {name}</h2>
      <p>Cuisine: {cuisine}</p>
        <p>
          Type: <span style={{color:type==="Veg"?"green":"red"}}>{type}</span>
          {cookingTime <= 20 && <span> | Quick</span>}
        </p>

      <p>Cooking Time: {cookingTime} min</p>
        <p>Difficulty: {difficulty}</p>
      <p>{ingredients.length} ingredients</p>

        <h4>Ingredients:</h4>
      <ul>
        {ingredients.map((ing,i)=>(
          <li key={i}>{ing}</li>
        ))}
      </ul>

      <div>
       <button onClick={()=>toggleFav(rid)}>
          {isFavourite ? "❤️ Remove from Favourites" : " ♡Add to Favourites"}
       </button>
      </div>

      <p>
          <Link to="/recipes">Back to Recipes</Link>
      </p>
    </div>
 )
}

export default RecipeDetails

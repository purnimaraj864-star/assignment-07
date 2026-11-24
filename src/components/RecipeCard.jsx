import React from 'react'
import { Link } from 'react-router-dom'

function RecipeCard({ r, toggleFav }) {
  const { id, name, emoji, cuisine, type, cookingTime, difficulty, isFavourite } = r;

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h3>{emoji} {name}</h3>
      <p>Cuisine: {cuisine}</p>
      <p>Cooking Time: {cookingTime} min</p>
      <p>Difficulty: {difficulty}</p>
      <p>
        <span style={{ color: type === "Veg" ? "green" : "red" }}> {type}</span>
            {cookingTime <= 20 && <span> | Quick</span>}
      </p>
      <div>
        <button onClick={() => toggleFav(id)}>
          {isFavourite ? "❤️ Remove from Favourites" : "♡ Add to Favourites"}
        </button>{" "}
        <Link to={`/recipes/${id}`}> View Details </Link>
      </div>
    </div>
  );
}

export default RecipeCard

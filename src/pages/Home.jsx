import React from 'react'
import { Link } from 'react-router-dom'

function Home({ recipes }) {
  const tot = recipes.length;
  const veg = recipes.filter((r) => r.type === "Veg").length;
  const fav = recipes.filter((r) => r.isFavourite).length;

  return (
    <div>
      <h1>Recipe Book</h1>
      <p>Total Recipes: {tot}</p>
      <p>Veg Recipes: {veg}</p>
      <p>Favourite Recipes: {fav}</p>
      <Link to="/recipes">Browse Recipes</Link>
    </div>
  );
}

export default Home

import React, { useState } from 'react'
import RecipeCard from '../components/RecipeCard'

function Recipes({ recipes, toggleFav }) {
  // const [q, setQ] = useState("");
  const [t, setT] = useState("All");
  const [s, setS] = useState("None");

  
  let list = recipes.filter((r) => {
    const mt = t === "All" || r.type === t;
    return mt;
  });


  if (s === "lowToHigh") {
    list = [...list].sort((a, b) => a.cookingTime - b.cookingTime);
  } else if (s === "highToLow") {
    list = [...list].sort((a, b) => b.cookingTime - a.cookingTime);
  }

  return (
    <div>
      <h2>All Recipes</h2>
      <div>
       
        <select value={t} onChange={(e) => setT(e.target.value)}>
          <option value="All">All</option>
             <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>{" "}
        <select value={s} onChange={(e)=>setS(e.target.value)}>
           <option value="None">Sort by Cooking Time</option>
          <option value="lowToHigh">Low→High</option>
            <option value="highToLow">High→Low</option>
        </select>
      </div>
      <div>
        {list.map((r) => (
          <RecipeCard key={r.id}  r={r}  toggleFav={toggleFav}  />
        ))}
      </div>
    </div>
  );
}

export default Recipes

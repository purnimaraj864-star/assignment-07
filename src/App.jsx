import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import recipesData from './data/recipes'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import RecipeDetails from './pages/RecipeDetails'
import Favourites from './pages/Favourites'

function App() {
  const [recipes,setRecipes] = useState(recipesData);

  const toggleFav =(id)=>{
    setRecipes(
      recipes.map((r)=>
        r.id === id ?{ ...r, isFavourite: !r.isFavourite } : r
      )
    );
  };

  const c =recipes.filter((r)=>r.isFavourite).length;

  return (
    <BrowserRouter>
      <Navbar c={c}/>
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route
          path="/recipes" element={<Recipes recipes={recipes} toggleFav={toggleFav} />}
        />
        <Route
          path="/recipes/:id" element={
            <RecipeDetails recipes={recipes} toggleFav={toggleFav} />
          }
        />
        <Route
          path="/favourites" element={<Favourites recipes={recipes} toggleFav={toggleFav} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App

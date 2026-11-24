import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ c }) {
  return (
    <nav>
      <h2>Recipe Book</h2>
      <Link to="/">Home</Link> | <Link to="/recipes">Recipes</Link> |{" "}
      <Link to="/favourites">Favourites ({c})</Link>
      <hr />
    </nav>
  );
}

export default Navbar

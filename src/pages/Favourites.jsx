import { Link } from "react-router-dom";

export default function Favourites({ recipes, toggleFav }) {
  const favs = recipes.filter((x) => x.isFavourite);

  if (favs.length === 0) {
    return (
      <div>
        <h2>Favourites</h2>
        <p>No favourites yet</p>
        <Link to="/recipes">Browse Recipes</Link>
      </div>
    );
  }

  const totalTime = favs.reduce((sum, r) => sum + r.cookingTime, 0);

  return (
    <div>
      <h2>Favourites</h2>
      <p>Total Cooking Time: {totalTime} min</p>
          {favs.map((r) => {
            const { id, name, emoji, cuisine, type: t, cookingTime, difficulty, ingredients } = r;

        return (
          <div key={id}>
            <h3>{emoji} {name}</h3>
            <p>Cuisine: {cuisine}</p>
            <p>Type: {t}</p>
            <p>Cooking Time: {cookingTime} min</p>
            <p>Difficulty: {difficulty}</p>
            <h4>Ingredients:</h4>
            <ul>
              {ingredients.map((fac, i) => (
                <li key={i}> {fac} </li>
              ))}
            </ul>
            <button onClick={() => toggleFav(id)}>Remove from Favourites</button>
          </div>
        );
      })}
    </div>
  );
}

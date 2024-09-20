import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <Link to={`/recipes/${recipe.id}`}>View Details</Link>
    </div>
  );
}

export default RecipeCard;

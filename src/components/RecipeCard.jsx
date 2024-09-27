import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 hover:shadow-xl transition duration-300">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">{recipe.title}</h2>
      <p className="text-gray-600 mb-4">A delicious recipe to try!</p>
      <Link to={`/recipes/${recipe.id}`} className="text-teal-500 hover:text-teal-600 font-semibold underline">
        View Details
      </Link>
    </div>
  );
}

export default RecipeCard;
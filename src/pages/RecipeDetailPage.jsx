import { useParams, useNavigate } from 'react-router-dom';

function RecipeDetailPage({ recipes, deleteRecipe }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) return <p className="text-center text-red-500">Recipe not found!</p>;

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    navigate('/recipes'); // Redirect to the recipe list page after deletion
  };

  return (
    <div className="container mx-auto mt-16 p-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-700 mb-2">Ingredients:</h2>
        <ul className="list-disc pl-5 text-lg text-gray-600">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <div className="mt-8 flex space-x-4">
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-black font-semibold rounded-lg hover:bg-red-600 transition duration-300"
          >
            Delete Recipe
          </button>
          <button
            onClick={() => navigate('/recipes')}
            className="px-4 py-2 bg-gray-500 text-black font-semibold rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Back to Recipes
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailPage;
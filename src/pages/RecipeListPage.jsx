import { Link } from 'react-router-dom';

function RecipeListPage({ recipes }) {
  if (recipes.length === 0) {
    return (
      <div className="container mx-auto mt-16 p-4">
        <h1 className="text-black text-4xl font-bold mb-6">No Recipes Found</h1>
        <p className="text-black text-lg">It looks like there are no recipes available. Try adding some!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-16 p-4">
      <h1 className="text-black text-4xl font-bold mb-6">All Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-black">{recipe.name}</h2>
            <p className="text-gray-700">{recipe.instructions}</p>
            <Link to={`/recipes/${recipe.id}`} className="text-blue-500">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeListPage;
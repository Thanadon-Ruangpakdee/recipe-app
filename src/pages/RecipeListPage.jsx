import RecipeCard from '../components/RecipeCard';

function RecipeListPage({ recipes }) {
  return (
    <div className="container mx-auto mt-16 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">All Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipeListPage;
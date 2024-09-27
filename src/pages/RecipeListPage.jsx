import { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import recipesData from '../data/recipe.json';

function RecipeListPage() {
  const [recipes, setRecipes] = useState(recipesData.recipes); // Initialize state with imported data

  if (recipes.length === 0) {
    return (
      <div className="container mx-auto mt-16 p-4">
        <h1 className="text-black text-4xl font-bold mb-6">No Recipes Found</h1>
        <p className="text-black text-lg">
          It looks like there are no recipes available. Try adding some!
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-16 p-4">
      <h1 className="text-black text-4xl font-bold mb-6">All Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipeListPage;
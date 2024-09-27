import { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import recipesData from '../data/recipe.json';
function RecipeListPage() {
  const [recipes, setRecipes] = useState([]);

  // Fetch the recipes from the JSON file
  useEffect(() => {
    fetch('/data/recipe.json')  // Now fetching from public/data/recipe.json
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  }, []); // Empty dependency array to fetch only once on mount

  if (recipes.length === 0) {
    return (
      <div className="container mx-auto mt-16 p-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">No Recipes Found</h1>
        <p className="text-lg text-gray-600">
          It looks like there are no recipes available. Try adding some!
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-16 p-4">
      <h1 style={{ color: 'black' }}>All Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipeListPage;
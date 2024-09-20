import RecipeCard from '../components/RecipeCard';

function RecipeListPage() {
  // Dummy data
  const recipes = [
    { id: 1, title: 'Spaghetti Bolognese' },
    { id: 2, title: 'Chicken Curry' },
  ];

  return (
    <div>
      <h1>All Recipes</h1>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeListPage;

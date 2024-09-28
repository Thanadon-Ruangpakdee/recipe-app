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
      <div className="grid-container">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card">
            <img 
              src={recipe.image} 
              alt={recipe.name} 
            />
            <div className="card-body">
              <h3 className="card-title">{recipe.name}</h3>
              <p className="card-text">Prep Time: {recipe.prep_time} mins</p>
              <p className="card-text">Ingredients: {recipe.ingredients.length} items</p>
              <Link to={`/recipes/${recipe.id}`} className="button">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeListPage;
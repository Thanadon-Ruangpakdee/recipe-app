import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function RecipeDetailPage({ recipes, deleteRecipe, localRecipes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipes.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id, recipes]);

  if (!recipe) {
    return (
      <div className="container d-flex align-items-center justify-content-center min-vh-100">
        <div className="text-center">
          <h1 className="display-4 mb-3">Recipe Not Found</h1>
          <p className="lead mb-4">It looks like this recipe does not exist. Please go back to the recipes list.</p>
          <button
            onClick={() => navigate('/recipes')}
            className="btn btn-secondary"
          >
            Back to Recipes
          </button>
        </div>
      </div>
    );
  }

  const isLocalRecipe = localRecipes.some((r) => r.id === recipe.id);

  const handleDelete = () => {
    if (isLocalRecipe) {
      deleteRecipe(recipe.id);
      navigate('/recipes');
    } else {
      alert('This recipe cannot be deleted.');
    }
  };

  return (
    <div className="container py-5">
      <h1 className="display-4 mb-4">{recipe.name}</h1>
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="card-title h3">Ingredients</h2>
          <ul className="list-group list-group-flush mb-3">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="list-group-item">
                {ingredient.name} - {ingredient.quantity}
              </li>
            ))}
          </ul>
          <h3 className="card-subtitle h4 mb-3">Instructions</h3>
          <p className="card-text">{recipe.instructions}</p>
          <div className="d-flex justify-content-between mt-4">
            {isLocalRecipe && (
              <button
                onClick={handleDelete}
                className="btn btn-danger"
              >
                Delete Recipe
              </button>
            )}
            <button
              onClick={() => navigate('/recipes')}
              className="btn btn-secondary"
            >
              Back to Recipes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailPage;
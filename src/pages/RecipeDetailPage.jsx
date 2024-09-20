import { useParams } from 'react-router-dom';

function RecipeDetailPage() {
  const { id } = useParams();
  // In real app, you'd fetch recipe details based on id
  const recipe = { id, title: 'Spaghetti Bolognese', ingredients: ['Spaghetti', 'Tomato Sauce'] };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetailPage;

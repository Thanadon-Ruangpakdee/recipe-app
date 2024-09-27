import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddRecipePage({ addRecipe }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      ingredients: ingredients.split(',').map(item => item.trim())
    };
    addRecipe(newRecipe);
    navigate('/recipes');  // Redirect to Recipe List after adding
  };

  return (
    <div className="container mx-auto mt-16 p-4">
      <h1 className="text-3xl font-bold mb-6">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Ingredients (comma-separated):</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipePage;
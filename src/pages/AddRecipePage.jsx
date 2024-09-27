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
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
        <div>
          <label className="block text-lg font-medium text-gray-700">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">Ingredients (comma-separated):</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-teal-500 text-white text-lg font-semibold rounded-lg hover:bg-teal-600 transition duration-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipePage;
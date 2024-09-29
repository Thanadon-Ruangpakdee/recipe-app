import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddRecipePage({ addRecipe }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients) {
      setError('Please provide both a title and ingredients.');
      return;
    }

    const newRecipe = {
      id: Date.now(), // Unique ID for the new recipe
      title,
      ingredients: ingredients.split(',').map(item => item.trim())
    };

    addRecipe(newRecipe); // Call the function to add the new recipe
    setTitle('');
    setIngredients('');
    setError('');
    navigate('/recipes');  // Redirect to Recipe List after adding
  };

  return (
    <div className="container mx-auto mt-16 p-4">
      <h1 className="text-4xl font-bold text-black mb-6">Add a New Recipe</h1>
      {error && <p className="text-red-500">{error}</p>} {/* Show error message */}
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
        <div>
          <label className="block text-lg font-medium text-black">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-black">Ingredients (comma-separated):</label>
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
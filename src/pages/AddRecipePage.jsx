import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddRecipePage({ addRecipe }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null); // State for image file
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name: title,
      ingredients: ingredients.split(',').map(item => ({ name: item.trim(), quantity: '' })),
      instructions,
      image // Pass the image file to the recipe object
    };
    addRecipe(newRecipe);
    navigate('/recipes'); // Navigate back to the recipe list
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Store the base64 image string
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="w-100" style={{ maxWidth: '600px' }}>
        <h1 className="text-center text-primary mb-4">Add a New Recipe</h1>
        <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
          <div className="mb-3">
            <label className="form-label">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Ingredients (comma-separated):</label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Instructions:</label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Upload Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="form-control"
              required
            />
            {image && (
              <div className="mt-3 text-center">
                <img src={image} alt="Recipe Preview" className="img-fluid rounded" />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipePage;
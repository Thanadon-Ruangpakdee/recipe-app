import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      ingredients: ingredients.split(',').map((item) => ({ name: item.trim(), quantity: '' })),
      instructions,
      image, // Pass the image file to the recipe object
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
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card w-100 shadow-lg" style={{ maxWidth: '700px' }}>
        <div className="card-body p-5">
          <h1 className="text-center text-primary mb-4">Add a New Recipe</h1>
          <form onSubmit={handleSubmit}>

            {/* Recipe Title */}
            <div className="form-group mb-4">
              <label className="form-label h5">Recipe Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control form-control-lg"
                placeholder="Enter the recipe title"
                required
              />
            </div>

            {/* Ingredients */}
            <div className="form-group mb-4">
              <label className="form-label h5">Ingredients</label>
              <textarea
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                className="form-control"
                rows="3"
                placeholder="Enter ingredients separated by commas"
                required
              />
            </div>

            {/* Instructions */}
            <div className="form-group mb-4">
              <label className="form-label h5">Instructions</label>
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                className="form-control"
                rows="4"
                placeholder="Write down the instructions"
                required
              />
            </div>

            {/* Image Upload */}
            <div className="form-group mb-4">
              <label className="form-label h5">Recipe Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="form-control"
                required
              />
              {image && (
                <div className="card mt-4">
                  <div className="card-body text-center">
                    <h5 className="card-title">Recipe Image Preview</h5>
                    <img src={image} alt="Recipe Preview" className="img-fluid rounded" />
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary btn-lg w-100 mt-4"
            >
              Add Recipe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddRecipePage;
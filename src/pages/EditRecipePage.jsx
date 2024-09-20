import { useParams } from 'react-router-dom';
import { useState } from 'react';

function EditRecipePage() {
  const { id } = useParams();
  const [title, setTitle] = useState('Current Recipe Title');  // In a real app, you'd fetch data
  const [ingredients, setIngredients] = useState('Current Ingredients');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ id, title, ingredients });
    // Update the recipe in the backend
  };

  return (
    <div>
      <h1>Edit Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)}></textarea>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditRecipePage;

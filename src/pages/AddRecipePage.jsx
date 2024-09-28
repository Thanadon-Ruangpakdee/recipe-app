import React, { useState } from 'react';

const AddRecipePage = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('ingredients', ingredients);
    formData.append('instructions', instructions);
    formData.append('recipeImage', image);

    // ส่งข้อมูลไปยัง Backend
    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      alert('Recipe added successfully!');
      // เคลียร์ฟอร์มหลังจากบันทึกข้อมูลแล้ว
      setTitle('');
      setIngredients('');
      setInstructions('');
      setImage(null);
    } catch (error) {
      console.error(error);
      alert('Failed to add recipe.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br /><br />

      <label htmlFor="ingredients">Ingredients (comma-separated):</label>
      <input
        type="text"
        id="ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      /><br /><br />

      <label htmlFor="instructions">Instructions:</label>
      <textarea
        id="instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      ></textarea><br /><br />

      <label htmlFor="recipeImage">Upload Image:</label>
      <input
        type="file"
        id="recipeImage"
        onChange={handleImageChange}
        accept="image/*"
      /><br /><br />

      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipePage;
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function RecipeDetailPage({ recipes, deleteRecipe }) {
  const { id } = useParams(); // ดึง id จาก URL
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipes.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe); // ตั้งค่า recipe ตามที่ค้นพบ
  }, [id, recipes]);

  if (!recipe) {
    return (
      <div className="container mx-auto mt-16 p-4">
        <h1 className="text-black text-4xl font-bold mb-6">Recipe Not Found</h1>
        <p className="text-black text-lg">
          It looks like this recipe does not exist. Please go back to the recipes list.
        </p>
        <button
          onClick={() => navigate('/recipes')}
          className="mt-4 px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition duration-300"
        >
          Back to Recipes
        </button>
      </div>
    );
  }

  const handleDelete = () => {
    deleteRecipe(recipe.id); // เรียกฟังก์ชันลบสูตรอาหาร
    navigate('/recipes'); // กลับไปที่หน้ารายการ
  };

  return (
    <div className="container mx-auto mt-16 p-4">
      <h1 className="text-5xl font-bold text-black mb-4">{recipe.name}</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-black mb-2">Ingredients:</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name} - {ingredient.quantity}
            </li>
          ))}
        </ul>
        <h3 className="text-2xl font-semibold text-black mt-4">Instructions:</h3>
        <p className="text-lg text-gray-700">{recipe.instructions}</p>
        <div className="mt-8 flex space-x-4">
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
          >
            Delete Recipe
          </button>
          <button
            onClick={() => navigate('/recipes')}
            className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Back to Recipes
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailPage;
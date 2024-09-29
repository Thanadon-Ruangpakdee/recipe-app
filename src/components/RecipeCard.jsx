import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image section */}
      <img
        src={recipe.image} // Image from JSON
        alt={recipe.name}
        className="w-full h-48 object-cover"
      />
      {/* Content section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{recipe.name}</h3>
        <p className="text-gray-600 mb-4">Prep Time: {recipe.prep_time} mins</p>

        <h4 className="font-semibold text-gray-800">Ingredients:</h4>
        <ul className="list-disc list-inside text-gray-600">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.quantity} {ingredient.name}
            </li>
          ))}
        </ul>

        <h4 className="font-semibold text-gray-800 mt-4">Instructions:</h4>
        <p className="text-gray-600">{recipe.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
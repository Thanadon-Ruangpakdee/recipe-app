import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // ใช้ HashRouter ที่นี่
import WelcomePage from './pages/WelcomePage';
import RecipeListPage from './pages/RecipeListPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import AddRecipePage from './pages/AddRecipePage';
import HighlightPage from './pages/HighlightPage'; // Import the HighlightPage
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import recipeData from './data/recipe.json'; // Import data from recipe.json
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  const [localRecipes, setLocalRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem('recipes');
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(localRecipes));
  }, [localRecipes]);

  const addRecipe = (recipe) => {
    const newRecipe = { id: Date.now(), ...recipe }; 
    setLocalRecipes([...localRecipes, newRecipe]);
  };

  const deleteRecipe = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this recipe?');
    if (confirmed) {
      const updatedRecipes = localRecipes.filter(recipe => recipe.id !== id);
      setLocalRecipes(updatedRecipes);
    }
  };

  const combinedRecipes = [...recipeData.recipes, ...localRecipes];

  return (
    <Router> {/* ใช้ HashRouter ในที่นี้ */}
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/recipes" element={<RecipeListPage recipes={combinedRecipes} />} />
        <Route path="/recipes/:id" element={<RecipeDetailPage recipes={combinedRecipes} deleteRecipe={deleteRecipe} localRecipes={localRecipes} />} />
        <Route path="/add-recipe" element={<AddRecipePage addRecipe={addRecipe} />} />
        <Route path="/highlighted-recipes" element={<HighlightPage />} /> {/* Add HighlightPage route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
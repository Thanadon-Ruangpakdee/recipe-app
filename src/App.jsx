import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import RecipeListPage from './pages/RecipeListPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import AddRecipePage from './pages/AddRecipePage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import recipeData from './data/recipe.json'; // นำเข้าข้อมูลจาก recipe.json
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // State สำหรับเก็บข้อมูลจาก localStorage เท่านั้น
  const [localRecipes, setLocalRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem('recipes');
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });

  // อัปเดต localStorage เมื่อมีการเปลี่ยนแปลงใน localRecipes
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(localRecipes));
  }, [localRecipes]);

  // ฟังก์ชันเพิ่มสูตรอาหารใหม่
  const addRecipe = (recipe) => {
    const newRecipe = { id: Date.now(), ...recipe }; // ใช้ Date.now() เพื่อสร้าง id ที่ไม่ซ้ำ
    setLocalRecipes([...localRecipes, newRecipe]); // อัปเดต State ด้วยข้อมูลใหม่
  };

  // ฟังก์ชันลบสูตรอาหารเฉพาะใน localStorage
  const deleteRecipe = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this recipe?');
    if (confirmed) {
      const updatedRecipes = localRecipes.filter(recipe => recipe.id !== id);
      setLocalRecipes(updatedRecipes);
    }
  };

  // รวมข้อมูลจาก recipe.json และ localStorage
  const combinedRecipes = [...recipeData.recipes, ...localRecipes];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route 
          path="/recipes" 
          element={<RecipeListPage recipes={combinedRecipes} />} // ส่งข้อมูลรวมไปที่ RecipeListPage
        />
        <Route 
          path="/recipes/:id" 
          element={
            <RecipeDetailPage 
              recipes={combinedRecipes} 
              deleteRecipe={deleteRecipe} 
              localRecipes={localRecipes}
            />
          } 
        />
        <Route path="/add-recipe" element={<AddRecipePage addRecipe={addRecipe} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
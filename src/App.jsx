import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import RecipeListPage from './pages/RecipeListPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import AddRecipePage from './pages/AddRecipePage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import recipeData from './data/recipe.json'; // นำเข้าข้อมูลจาก recipe.json

function App() {
  // ดึงข้อมูลจาก localStorage เมื่อแอปเริ่มต้นใช้งาน
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem('recipes');
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });

  // อัปเดต localStorage เมื่อมีการเปลี่ยนแปลงใน recipes
  useEffect(() => {
    if (recipes) {
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }
  }, [recipes]);

  // ฟังก์ชันเพิ่มสูตรอาหารใหม่
  const addRecipe = (recipe) => {
    setRecipes([...recipes, { id: Date.now(), ...recipe }]); // ใช้ Date.now() เพื่อให้ id ไม่ซ้ำ
  };

  // ฟังก์ชันลบสูตรอาหาร
  const deleteRecipe = (id) => {
    // ตรวจสอบว่าสูตรอาหารมาจาก recipeData หรือไม่
    const isDefaultRecipe = recipeData.recipes.some((recipe) => recipe.id === id);
    if (isDefaultRecipe) {
      alert('This recipe cannot be deleted.'); // แจ้งเตือนว่าลบไม่ได้
      return;
    }

    const confirmed = window.confirm('Are you sure you want to delete this recipe?');
    if (confirmed) {
      const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
      setRecipes(updatedRecipes);
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route 
          path="/recipes" 
          element={<RecipeListPage 
                      recipes={[...recipeData.recipes, ...recipes]} // รวมข้อมูลจาก recipe.json และ recipes ใน localStorage
                    />} 
        />
        <Route 
          path="/recipes/:id" 
          element={<RecipeDetailPage 
                      recipes={[...recipeData.recipes, ...recipes]} 
                      deleteRecipe={deleteRecipe} 
                    />} 
        />
        <Route path="/add-recipe" element={<AddRecipePage addRecipe={addRecipe} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
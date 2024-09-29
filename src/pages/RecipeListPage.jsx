import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const RecipeListPage = ({ recipes }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [highlightedRecipes, setHighlightedRecipes] = useState(() => {
    const savedHighlightedRecipes = localStorage.getItem('highlightedRecipes');
    return savedHighlightedRecipes ? JSON.parse(savedHighlightedRecipes) : [];
  });

  const categories = ['All', 'Dessert', 'Main Course', 'Appetizer', 'Breakfast'];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleHighlight = (recipe) => {
    if (!highlightedRecipes.some((r) => r.id === recipe.id)) {
      const updatedHighlightedRecipes = [...highlightedRecipes, recipe];
      setHighlightedRecipes(updatedHighlightedRecipes);
      localStorage.setItem('highlightedRecipes', JSON.stringify(updatedHighlightedRecipes));
    }
  };

  const handleUnhighlight = (recipe) => {
    const updatedHighlightedRecipes = highlightedRecipes.filter((r) => r.id !== recipe.id);
    setHighlightedRecipes(updatedHighlightedRecipes);
    localStorage.setItem('highlightedRecipes', JSON.stringify(updatedHighlightedRecipes));
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mt-5">
      <h1 className="text-dark display-4 mb-4 text-center">All Recipes</h1>

      {/* Search bar */}
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search recipes..."
          aria-label="Search recipes"
          aria-describedby="button-search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="btn btn-outline-secondary" type="button" id="button-search">
          Search
        </button>
      </div>

      {/* Category Filter */}
      <div className="d-flex justify-content-center mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn btn-outline-primary mx-2 ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Recipe Grid */}
      <div className="row">
        {filteredRecipes.length === 0 ? (
          <div className="col-12">
            <h3 className="text-center">No recipes match your search</h3>
          </div>
        ) : (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="col-12 col-sm-6 col-lg-3 d-flex align-items-stretch mb-4">
              <div className={`card shadow-lg w-100 ${highlightedRecipes.some((r) => r.id === recipe.id) ? 'highlighted' : ''}`} style={{ height: '100%', transition: 'transform 0.5s, box-shadow 0.5s' }}>
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="card-img-top img-fluid"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title font-weight-bold">{recipe.name}</h4>
                  <p className="card-text">
                    <strong>Prep Time:</strong> {recipe.prep_time} mins
                  </p>
                  <p className="card-text">
                    <strong>Ingredients:</strong> {recipe.ingredients.length} items
                  </p>
                  <div className="flex-grow-1"></div>
                  <div className="d-flex justify-content-between">
                    <Link to={`/recipes/${recipe.id}`} className="btn btn-success mt-auto">
                      View Details
                    </Link>
                    {highlightedRecipes.some((r) => r.id === recipe.id) ? (
                      <button
                        className="btn btn-danger mt-auto"
                        onClick={() => handleUnhighlight(recipe)}
                      >
                        Unhighlight
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning mt-auto"
                        onClick={() => handleHighlight(recipe)}
                      >
                        Highlight
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <style>{`
        .card.highlighted {
          animation: highlight-animation 0.5s ease forwards;
        }

        @keyframes highlight-animation {
          0% {
            box-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 15px rgba(255, 215, 0, 1);
            transform: scale(1.05);
          }
          100% {
            box-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default RecipeListPage;
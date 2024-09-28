import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function RecipeListPage({ recipes }) {
  // State for search input
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search term input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter recipes based on the search term
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="text-dark display-4 mb-4">All Recipes</h1>

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

      {/* Recipe Grid */}
      <div className="row">
        {filteredRecipes.length === 0 ? (
          <div className="col-12">
            <h3 className="text-center">No recipes match your search</h3>
          </div>
        ) : (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="col-12 col-sm-6 col-lg-4 d-flex align-items-stretch mb-4">
              <div className="card shadow-lg w-100" style={{ height: '100%' }}>
                <img 
                  src={recipe.image} 
                  alt={recipe.name} 
                  className="card-img-top img-fluid" 
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title font-weight-bold">{recipe.name}</h4>
                  <p className="card-text">
                    <strong>Prep Time:</strong> {recipe.prep_time} mins
                  </p>
                  <p className="card-text">
                    <strong>Ingredients:</strong> {recipe.ingredients.length} items
                  </p>
                  <Link to={`/recipes/${recipe.id}`} className="mt-auto btn btn-success w-100">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RecipeListPage;

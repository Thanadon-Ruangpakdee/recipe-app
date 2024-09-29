import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  // Change navbar background on scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarScrolled(true);
    } else {
      setNavbarScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${navbarScrolled ? 'navbar-light bg-light shadow-sm' : 'navbar-light bg-light shadow-sm'} transition ease-in-out duration-300`}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
            alt="RecipeApp"
            style={{ width: '30px', height: '30px' }}
            className="me-2"
          />
          <span className="fw-bold text-dark">RecipeApp</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${navbarScrolled ? 'text-dark' : 'text-dark'} fw-semibold`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${navbarScrolled ? 'text-dark' : 'text-dark'} fw-semibold`} to="/recipes">
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${navbarScrolled ? 'text-dark' : 'text-dark'} fw-semibold`} to="/add-recipe">
                Add Recipe
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${navbarScrolled ? 'text-dark' : 'text-dark'} fw-semibold`} to="/highlighted-recipes">
                Highlighted Recipes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
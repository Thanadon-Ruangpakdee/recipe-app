import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition duration-300 ease-in-out ${navbarScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo or Branding */}
        <Link to="/" className="text-3xl font-bold text-teal-500">RecipeApp</Link>

        {/* Desktop Navigation Links */}
        <ul className="flex space-x-10">
          <li>
            <Link to="/" className={`font-semibold text-lg ${navbarScrolled ? 'text-gray-800' : 'text-white'} hover:text-teal-500 transition duration-300`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/recipes" className={`font-semibold text-lg ${navbarScrolled ? 'text-gray-800' : 'text-white'} hover:text-teal-500 transition duration-300`}>
              Recipes
            </Link>
          </li>
          <li>
            <Link to="/add-recipe" className={`font-semibold text-lg ${navbarScrolled ? 'text-gray-800' : 'text-white'} hover:text-teal-500 transition duration-300`}>
              Add Recipe
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
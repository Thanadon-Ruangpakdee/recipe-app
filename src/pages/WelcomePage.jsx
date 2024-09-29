import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function WelcomePage() {
  return (
    <div className="container-fluid p-0 m-0 vh-100 d-flex flex-column flex-md-row">
      {/* Right Section - Image */}
      <div className="col-md-6 p-0">
        <img
          src="https://cdn.prod.website-files.com/5e86c7170f1ab21474c3f2a4/5ef1d04b4056011f67df2ed7_Natural%2Blight%2B-%2BFood%2BPhotography%2B-%2BFrenchly%2B-4365.jpg" // Ensure this path is correct for your project structure
          alt="Food"
          className="img-fluid"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensure the image covers the entire area
        />
      </div>

      {/* Left Section - Text with light background */}
      <div className="col-md-7 d-flex align-items-center justify-content-center bg-light py-5 px-4">
        <div className="text-center text-md-start">
          <h2 className="text-uppercase text-secondary mb-3">Recipes Online</h2>
          <h1 className="display-4 font-weight-bold mb-4">
            New recipes <br /> every week
          </h1>
          <p className="lead text-muted mb-4">
            Pellentesque vel metus sit amet dui suscipit placerat. Nam consectetur turpis metus.
          </p>
          <Link to="/recipes" className="btn btn-primary btn-lg px-5 py-3">
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
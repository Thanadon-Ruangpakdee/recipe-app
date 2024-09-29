import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function WelcomePage() {
  return (
    <div className="container-fluid vh-100 d-flex flex-column flex-md-row">
      {/* Right Section - Image */}
      <div className="col-md-6 p-0">
        <img
          src="public/image/food2.jpg"
          alt="Food"
          className="img-fluid h-100 w-100 object-fit-cover"
        />
      </div>

      {/* Left Section - Text with light pink background */}
      <div className="col-md-6 d-flex align-items-center justify-content-center bg-light py-5 px-4">
        <div className="text-center text-md-start">
          <h2 className="text-uppercase text-secondary mb-3">
            Recipes Online
          </h2>
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

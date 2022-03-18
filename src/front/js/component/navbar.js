import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          <Link to="/tutorial">
            <button className="btn btn-primary">How To</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/">
            <button className="btn btn-primary">Home</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/signup">
            <button className="btn btn-primary">Sign Up</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/grocerylist">
            <button className="btn btn-primary">Grocery List</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

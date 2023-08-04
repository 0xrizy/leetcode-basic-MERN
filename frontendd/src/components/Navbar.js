import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo">
        Leetcode
      </NavLink>
      <div className="navbar__right-links">
        <NavLink to="/login" className="navbar__link">
          Login
        </NavLink>
        <NavLink to="/register" className="navbar__link">
          Register
        </NavLink>
      </div>
    </nav>

    </>
  );
}

export default Navbar;
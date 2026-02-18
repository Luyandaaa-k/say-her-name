import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-brand">
        <Link to="/" className="nav-logo">SAY HER NAME</Link>
      </div>
      
      <div className="nav-links">
        <Link to="/" className="nav-link">Memorial</Link>
        <Link to="/submit" className="nav-link">Submit</Link>
      </div>
    </nav>
  );
}

export default Navigation;
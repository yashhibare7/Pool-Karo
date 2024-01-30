import React from 'react';
import { Link } from 'react-router-dom';
import navbar from './navbar.module.css';

const Navbar = () => {
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
    return (
      <div>
      <nav className={navbar.navbar}>
      <h1>Pool Karo</h1>
        <div className={navbar.links}>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/Add">Add</Link>
        </div>
        <button className={navbar.white_btn} onClick={handleLogout}>
					Logout
				</button>
      </nav>
      </div>
    );
};

export default Navbar;
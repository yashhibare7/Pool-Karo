import React from "react";
import { Link, useNavigate } from "react-router-dom";
import navbar from "./navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <nav className={navbar.navbar}>
        <h1>Pool Karo</h1>
        <div className={navbar.links}>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>

          <Link to="/Profile">Profile</Link>
        </div>
        <button className={navbar.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Navbar;

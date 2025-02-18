import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container-navbar">
      <section className="nav-sec">
        
        {/* Left Section - Logo */}
        <div className="left cursor-pointer">
          <p>Soumik</p>
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>

        {/* Right Section - Navigation Links */}
        <div className={`right ${menuOpen ? "open" : ""}`}>
          <NavLink to={"/"} id="nav" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to={"/work"} id="nav" onClick={() => setMenuOpen(false)}>
            Work
          </NavLink>
          <NavLink to={"/about"} id="nav" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to={"/contact"} id="nav" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </div>

      </section>
    </div>
  );
};

export default Navbar;

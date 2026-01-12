import React from "react";
import "../styles/Home.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({
  headerScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  searchQuery,
  setSearchQuery,
  handleSearch,
  scrollToSection,
}) => {
  return (
    <div>
      <header className={headerScrolled ? "scrolled" : ""}>
        <div className="header-container">
          <div className="logo-container">
            <a
              href="#home"
              className="logo"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              <img src={logo} alt="DBGI Logo" />
              <span>DBGI</span>
            </a>
          </div>

          <div className="nav-main-wrapper">
            {/* Search Bar */}
            <div className="search-container">
              <form className="search-form" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>


            {/* Navigation */}
          <nav className={`nav-container ${mobileMenuOpen ? "active" : ""}`}>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="#">Admissions</Link>
              </li>
              <li>
                <Link to="#">Courses</Link>
              </li>
              <li>
                <Link to="https://erp175.balajisolution.in/">Academics</Link>
              </li>
              <li>
                <Link to="#">Placements</Link>
              </li>
              <li>
                <Link 
                  to="#campus" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("campus");
                  }}
                >
                  Campus Life
                </Link>
              </li>
              <li>
                <Link 
                  to="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#">Career @DBGI</Link>
              </li>
              <li>
                <Link to="#">Umeed</Link>
              </li>
            </ul>
          </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <i
                className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}
              ></i>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-light custom-navbar shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold logo" to="/">
          <span className="donut-icon">🍩</span> Dunkin' Donuts
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse animated-navbar"
          id="mainNavbar"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link me-2 ${
                  location.pathname === "/products" ? "active" : ""
                }`}
                to="/products"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link me-2 ${
                  location.pathname === "/categories" ? "active" : ""
                }`}
                to="/categories"
              >
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link me-2 ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link me-2 ${
                  location.pathname === "/menu" ? "active" : ""
                }`}
                to="/menu"
              >
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link me-2 ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import ImageLogo from "../Images/dunkin-donuts-png-logo-dunkin-donuts-logo-official-11562868407no15ihftdi-removebg-preview.png";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        height: "calc(100vh - 62px)",
        background: "linear-gradient(to bottom right, #fff0f5, #ffe4e1)",
        overflow: "hidden",
      }}
    >
      <div className="container text-center py-5 animate__animated animate__fadeIn">
        <img
          src={ImageLogo}
          alt="Dunkin Donuts Logo"
          className="mb-4 animate__animated animate__bounceInDown "
          style={{ maxWidth: "200px" }}
        />

        <h1
          className="fw-bold mb-3 animate__animated animate__fadeInUp animate__delay-1s"
          style={{
            color: "#d63384",
            fontSize: "3rem",
            textShadow: "1px 1px 2px #f8bbd0",
          }}
        >
          Welcome to Dunkin' Donuts!
        </h1>

        <p
          className="lead mb-4 text-muted animate__animated animate__fadeInUp animate__delay-2s"
          style={{ maxWidth: "630px", margin: "0 auto" }}
        >
          Where every day starts with sweet donuts, fresh coffee, and a smile
          🍩☕
        </p>

        <Link
          to="menu"
          className="btn btn-lg px-5 py-3 fw-semibold animate__animated animate__pulse animate__infinite"
          style={{
            backgroundColor: "#ff4081",
            color: "#fff",
            borderRadius: "50px",
            boxShadow: "0 8px 24px rgba(255,64,129,0.3)",
            transition: "0.3s",
          }}
        >
          Explore Our Menu
        </Link>
      </div>
    </div>
  );
}

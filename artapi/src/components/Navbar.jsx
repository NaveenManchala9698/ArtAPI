import "../css/Navbar.css";
import React, { useState, useEffect } from "react";
import { Button, Container, Form, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/Vector.png";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <div className="d-flex">
          <img
            src={logo}
            className="logo"
            alt="logo"
            style={{ height: "60px", width: "60px", marginRight: "1rem" }}
          ></img>
          <a href="/" className="site-title">
            Art API
          </a>
        </div>

        <div className="nav-right">
          <div className="search-box">
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

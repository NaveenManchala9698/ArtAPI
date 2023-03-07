import "../css/Navbar.css";
import React, { useState, useEffect } from "react";
import logo from "../assets/Vector.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ search }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  //GET
  /*  const fetchSearchedArt = async (query) => {
    try {
      const response = await fetch(
        `https://www.rijksmuseum.nl/api/en/collection?key=2esrTh6M&ps=100&type=${query}`
      );

      if (response.ok) {
        const art = await response.json();
        const result = { art };
        const data = result.art;
        console.log(data.artObjects);
        setSearchResults(data.artObjects);
        setIsLoading(false);
      } else {
        console.log("ERROR");
      }
    } catch (err) {
      console.log(err);
    }
  }; */

  return (
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
          <div className="search-container d-flex">
            <input
              className="search-input"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              type="text"
              placeholder="Please type in your search"
            />
            <div>
              <button
                onClick={() => {
                  search(query);
                  navigate("/search");
                }}
                className="search-button"
              >
                <b>Search</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

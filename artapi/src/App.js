import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";

import { useEffect, useState } from "react";
import SearchResults from "./components/SearchResults";

import Navbar from "./components/Navbar";

function App() {
  const [art, setArt] = useState([]);
  const [query, setQuery] = useState("");

  /*  useEffect(() => {
    search();
  }, []); */

  const [currentpage, setCurrentPage] = useState(1);
  const [artPerPage, setArtPerPage] = useState(9);
  // GET CURRENT POSTS
  const indexOfLastArt = currentpage * artPerPage;
  const indexOfFirstArt = indexOfLastArt - artPerPage;
  const currentArt = art.slice(indexOfFirstArt, indexOfLastArt);

  //CHANGE PAGE
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //GET
  const search = async (query) => {
    try {
      const response = await fetch(
        "https://www.rijksmuseum.nl/api/en/collection?key=2esrTh6M&type=" +
          query
      );

      if (response.ok) {
        const art = await response.json();
        const result = { art };
        const data = result.art;
        console.log(data.artObjects);
        setArt(data.artObjects);
      } else {
        console.log("ERROR");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar search={search} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art/:artId" element={<DetailPage />} />
          <Route path="/search" element={<SearchResults art={art} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

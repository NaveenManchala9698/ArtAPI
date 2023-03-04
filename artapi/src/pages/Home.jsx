import { useEffect, useState } from "react";
import AllArt from "../components/AllArt";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = ({ arts }) => {
  /* const [art, setArt] = useState([]); */
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchArt();
  }, []);

  //GET
  const fetchArt = async () => {
    try {
      const response = await fetch(
        "https://www.rijksmuseum.nl/api/nl/collection?key=2esrTh6M&involvedMaker=Rembrandt+van+Rijn"
      );

      if (response.ok) {
        const art = await response.json();
        const result = { art };
        console.log(result.art.artObjects);
        setSearchResults(result.art.artObjects);
        /*  setArt(result.art.artObjects); */
      } else {
        console.log("ERROR");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      <AllArt arts={arts} />
      <Footer />
    </>
  );
};

export default Home;

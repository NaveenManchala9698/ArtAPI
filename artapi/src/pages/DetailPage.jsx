import { useEffect, useState } from "react";
import ArtDetail from "../components/ArtDetail";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const DetailPage = () => {
  const [art, setArt] = useState([]);

  useEffect(() => {
    fetchArt();
  }, []);

  //GET
  const fetchArt = async () => {
    try {
      const response = await fetch(
        "https://www.rijksmuseum.nl/api/nl/collection?key=2esrTh6M&ps=100"
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
    <>
      <ArtDetail art={art} />
      <Footer />
    </>
  );
};

export default DetailPage;

import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/SingleArt.css";

const SingleArt = ({ eachArt }) => {
  const [art, setArt] = useState([]);
  /* const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [srtPerPage, setArtPerPage] = useState(10); */

  useEffect(() => {
    setArt(eachArt);
  }, [eachArt]);

  //GET current art
  /* const indexOfLastArt = currentPage * setArtPerPage;
  const indexOfFirstArt = indexOfLastArt - setArtPerPage;
  const currentArt = art.slice(indexOfFirstArt, indexOfLastArt);
 */
  return (
    <>
      <Link to={`/art/${eachArt.id}`}>
        <div className="image-container">
          <div className="image-maker">{eachArt.principalOrFirstMaker}</div>
          <img src={eachArt.webImage.url} className="image mb-3" alt="" />
          <div className="image-text">{eachArt.title}</div>
        </div>
      </Link>
    </>
  );
};

export default SingleArt;

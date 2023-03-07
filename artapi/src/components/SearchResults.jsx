import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const SearchResults = ({ art }) => {
  const [currentpage, setCurrentPage] = useState(1);
  const [artPerPage, setArtPerPage] = useState(9);

  // GET CURRENT POSTS
  const indexOfLastArt = currentpage * artPerPage;
  const indexOfFirstArt = indexOfLastArt - artPerPage;
  const currentArt = art.slice(indexOfFirstArt, indexOfLastArt);

  //CHANGE PAGE
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //GET
  /* const fetchSearchedArt = async (query) => {
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
    <>
      <Container className="container mx-auto mt-5">
        <Row>
          {/* <div className="col-12 text-center ">
            <h1 className="mb-5 all-artwork">ALL Artworks</h1>
          </div> */}
          {currentArt &&
            currentArt.map((eachArt) => (
              <Col key={eachArt.id} xs={12} sm={6} md={4}>
                <div className="image-container">
                  <div className="image-maker-container">
                    <div className="image-maker">
                      {eachArt.principalOrFirstMaker}
                    </div>
                  </div>
                  <div>
                    <Link to={`art/${eachArt.objectNumber}`}>
                      <img
                        src={eachArt.webImage.url}
                        className="image mb-3"
                        alt=""
                      />
                    </Link>
                    <div className="image-text">{eachArt.title}</div>
                  </div>
                </div>
              </Col>
            ))}
          <Pagination
            artPerPage={artPerPage}
            totalArt={art.length}
            paginate={paginate}
          />
        </Row>
      </Container>
    </>
  );
};

export default SearchResults;

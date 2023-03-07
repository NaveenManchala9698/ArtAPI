import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "../css/ArtDetail.css";
import { BsChevronLeft } from "react-icons/bs";

const ArtDetail = ({ art }) => {
  const [artDetail, setArtDetail] = useState([]);
  const [artUrl, setArtUrl] = useState("");

  const params = useParams();
  const artId = params.artId;

  useEffect(() => {
    fetchDetails();
  }, [artId]);

  /*   useEffect(() => {
    const currentArt = art.find((p) => p.artObject.id === artId);
    setArtUrl(currentArt.artObject.webImage.url);
  }, [artId, art]);
 */
  const fetchDetails = async () => {
    try {
      const response = await fetch(
        `https://www.rijksmuseum.nl/api/en/collection/${artId}?key=2esrTh6M`
      );

      if (response.ok) {
        const allDetails = await response.json();
        const result = { allDetails };
        const data = result.allDetails.artObject;
        console.log(data);
        setArtDetail(data);
      } else {
        console.log("ERROR");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="content-body">
        <div className="back-to-list">
          <Link to="/">
            <p>
              <BsChevronLeft /> Back to the List
            </p>
          </Link>
        </div>
        {artDetail.webImage && (
          <>
            <Card className="card">
              <Card.Img
                variant="top"
                src={artDetail.webImage.url}
                className="card-img"
              />
              <div className="card-text">{artDetail.title}</div>
              <Card.Body className="card-body">
                <Card.Title className="card-title">Title</Card.Title>
                <p>{artDetail.longTitle}</p>
              </Card.Body>
              <Card.Body className="card-body">
                {" "}
                <Card.Title className="card-title">Artist</Card.Title>
                <p>{artDetail.principalMakers[0].name}</p>
              </Card.Body>
              <Card.Body className="card-body">
                <Card.Title className="card-title">Object Type</Card.Title>
                <p>{artDetail.objectTypes[0]}</p>
              </Card.Body>
              <Card.Body className="card-body">
                <Card.Title className="card-title">Measurements</Card.Title>
                <p>{artDetail.subTitle}</p>
              </Card.Body>
              <Card.Body className="card-body">
                <Card.Title className="card-title">Description</Card.Title>
                <p>{artDetail.titles[0]}</p>
              </Card.Body>
            </Card>
          </>
        )}
      </div>
    </>
  );
};

export default ArtDetail;

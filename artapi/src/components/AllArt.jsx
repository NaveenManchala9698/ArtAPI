import { Col, Container, Row } from "react-bootstrap";
import SingleArt from "./SingleArt.jsx";

const AllArt = ({ arts }) => {
  return (
    <Container className="mx-auto mt-5">
      <Row>
        <div className="col-12 text-center ">
          <h1 className="mb-5 all-products">ALL Artwork</h1>
        </div>
        {arts &&
          arts.map((eachArt) => (
            <Col key={eachArt.id} xs={12} sm={6} md={3}>
              <SingleArt eachArt={eachArt} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default AllArt;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";

const Product = ({ items = [] }) => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-light" >
       
      <div className="text-center ">
        <h1 className="fw-bold text-success display-4">Product Gallery</h1>
        <p className="text-muted mt-2">Explore our collection of products.</p>
      </div>

      <Row className="g-4 justify-content-center">
        {items.map((pro) => (
          <Col key={pro.id} xs={6} sm={4} md={3} lg={2}>
            <Card className="shadow-sm border-0 rounded-3 h-100 overflow-hidden">
              <Card.Img
                variant="top"
                src={pro.image}
                className="img-fluid"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{pro.Category}</Card.Title>
                <Card.Text className="text-muted mb-1">{pro.Product}</Card.Text>
                <Card.Text className="fw-bold text-primary mt-auto">
                  {pro.Action}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Product;

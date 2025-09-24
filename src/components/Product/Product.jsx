// ProductList.jsx
import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { AppContaxt } from "../../store/store";

const Product = () => {
  const { items } =
    useContext(AppContaxt);

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center py-5 bg-light"
    >
      <h1 className="fw-bold text-success mb-4">Product Gallery</h1>
      <p className="text-muted mb-5">Explore our collection of products.</p>

      <Row className="g-4 justify-content-center w-100">
        {items.length === 0 ? (
          <p className="text-center text-muted">No products available.</p>
        ) : (
          items.map((pro) => (
            <Col key={pro.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="shadow-sm border-0 rounded-3 h-100 overflow-hidden">
                <Card.Img
                  variant="top"
                  src={pro.image}
                  className="img-fluid"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{pro.Product}</Card.Title>
                  <Card.Text className="text-muted mb-1">
                    {pro.Category}
                  </Card.Text>

                  {/* Sirf Admin ko Edit/Delete dikhana hai */}
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Product;

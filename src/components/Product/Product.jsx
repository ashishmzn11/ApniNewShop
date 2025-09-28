import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { AppContaxt } from "../../store/store";
import { useNavigate } from "react-router-dom";

const Product = () => {
  // ✅ handleAddItem destructure करो
  const { items, cartItems, handleAddToCart, handleRemoveToCard, currentUser } =
    useContext(AppContaxt);
  const navigate = useNavigate();
  const isInCart = (pro) => {
    return cartItems.some(
      (item) =>
        item.Product === pro.Product && item.userEmail === currentUser?.email
    );
  };

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center overflow-auto mb-5 vw-100 py-5 bg-light"
    >
      <h1 className="fw-bold text-success mb-4">Product Gallery</h1>
      <p className="text-muted mb-5">Explore our collection of products.</p>

      <Row className="g-4 justify-content-center w-100">
        {items.length === 0 ? (
          <p className="text-center text-muted">No products available.</p>
        ) : (
          items.map((pro) => (
            <Col key={pro.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="shadow-sm border-0 rounded-3 h-100 ">
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
                  <Card.Text className="text-success fw-bold mb-2">
                    ₹ {pro.Price} ({pro.Discound} Off)
                  </Card.Text>
                  <Card.Text className="text-muted mb-2">
                    {pro.Discussion}
                  </Card.Text>

                  {/* ✅ Add to Cart Button */}
                  {isInCart(pro) ? (
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveToCard(pro.id)}
                    >
                      Remove from Cart
                    </Button>
                  ) : (
                    <Button
                      variant="success"
                      onClick={() => handleAddToCart(pro)}
                    >
                      Add to Cart
                    </Button>
                  )}
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

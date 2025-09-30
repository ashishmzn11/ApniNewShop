import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { AppContaxt } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

const Product = () => {
  const { items, cartItems, handleAddToCart, handleRemoveToCard, currentUser } =
    useContext(AppContaxt);
  const navigate = useNavigate();
  

  // Add to cart handler with sign-in check
  const handleAddToCartin = (product) => {
    if (!currentUser) {
      alert("Please sign in first");
      navigate("/signin"); // redirect to SignIn page
      return;
    }
    handleAddToCart(product); // normal add to cart
  };

  // Check if product is in current user's cart
  const isInCart = (pro) => {
    return cartItems.some(
      (item) => item.Product === pro.Product && item.userEmail === currentUser?.email
    );
  };

  // Remove product from cart correctly
  const handleRemoveFromCart = (pro) => {
    const itemToRemove = cartItems.find(
      (item) => item.Product === pro.Product && item.userEmail === currentUser?.email
    );
    if (itemToRemove) handleRemoveToCard(itemToRemove.id);
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
              <Card className="shadow-sm border-0 rounded-3 h-100">
                <Card.Img
                  variant="top"
                  src={pro.image}
                  className="img-fluid"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{pro.Product}</Card.Title>
                  <Card.Text className="text-muted mb-1">{pro.Category}</Card.Text>
                  <Card.Text className="text-success fw-bold mb-2">
                    ₹ {pro.Price} ({pro.Discound} Off)
                  </Card.Text>
                  <Card.Text className="text-muted mb-2">{pro.Discussion}</Card.Text>

                  {/* Add / Remove Cart Button */}
                  {isInCart(pro) ? (
                    <Button variant="danger" onClick={() => handleRemoveFromCart(pro)}>
                      Remove from Cart
                    </Button>
                  ) : (
                    <Button variant="success" onClick={() => handleAddToCartin(pro)}>
                      Add to Cart
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>

      <div className="mt-4 mb-5 d-flex flex-wrap gap-3 justify-content-center">
        <Button
          variant="outline-secondary"
          className="d-inline-flex align-items-center gap-2 rounded-pill px-4"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={16} />
          Back to Home
        </Button>

        <Button
          variant="outline-secondary"
          className="d-inline-flex align-items-center gap-2 rounded-pill px-4"
          onClick={() => navigate("/Profile")}
        >
          <ArrowLeft size={16} />
          Move to Cart
        </Button>
      </div>
    </Container>
  );
};

export default Product;

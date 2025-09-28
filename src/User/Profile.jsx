import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { AppContaxt } from "../store/store";

const Profile = () => {
  const { currentUser, cartItems, handleRemoveToCard } = useContext(AppContaxt);

  if (!currentUser) {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-light">
        <h3 className="text-danger text-center">⚠️ Please sign in to view your profile</h3>
      </Container>
    );
  }

  const totalAmount = cartItems.reduce((sum, item) => sum + Number(item.Price), 0);
  const totalDiscount = cartItems.reduce((sum, item) => sum + Number(item.Discound), 0);

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center overflow-auto mb-5 vw-100 py-5 bg-light">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Welcome, {currentUser.email.split("@")[0]}!</h2>
        <h5 className="text-muted">Your Products in Cart</h5>
      </div>
      {cartItems.length > 0 && (
        <Card className="shadow-sm mb-4 mx-auto" style={{ maxWidth: "500px" }}>
          <Card.Body className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-1 fw-bold">Total Amount:</h5>
              <p className="mb-0 text-success fw-bold">₹ {totalAmount}</p>
            </div>
            <div>
              <h5 className="mb-1 fw-bold">Total Discount:</h5>
              <p className="mb-0 text-danger fw-bold">₹ {totalDiscount}</p>
            </div>
          </Card.Body>
        </Card>
      )}

      {cartItems.length === 0 ? (
        <p className="text-center text-muted">You have not added any products yet.</p>
      ) : (
        <Row className="g-4">
          {cartItems.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="shadow-sm h-100 d-flex flex-column">
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>{item.Product}</Card.Title>
                    <Card.Text className="text-success fw-bold mb-1">₹ {item.Price}</Card.Text>
                    <Card.Text className="text-muted mb-2">Discount: {item.Discound}</Card.Text>
                    <Card.Text className="text-muted">{item.Discussion}</Card.Text>
                  </div>
                  <Button
                    variant="danger"
                    className="mt-auto"
                    onClick={() => handleRemoveToCard(item.id)}
                  >
                    Remove from Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Profile;

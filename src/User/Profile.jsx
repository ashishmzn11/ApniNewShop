import React, { useContext } from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AppContaxt } from "../store/store";

const Profile = () => {
  const { userCartItems, handleRemoveToCard, currentUser, handleUpdateQuantity } = useContext(AppContaxt);
  const navigate = useNavigate();

  const totalPrice = userCartItems.reduce(
    (acc, item) => acc + Number(item.Price) * (item.quantity || 1),
    0
  );

  if (!currentUser) {
    return (
      <Container className="py-5 text-center">
        <h3 className="text-danger">Please sign in to view your orders</h3>
        <Button variant="primary" onClick={() => navigate("/signin")}>
          Go to Sign In
        </Button>
      </Container>
    );
  }

  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center overflow-auto mb-5 vw-100 py-5 bg-light">
      <h1 className="text-center text-success fw-bold mb-5">Your Orders</h1>

      {userCartItems.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty.</p>
      ) : (
        <Row className="g-4 justify-content-center">
          {userCartItems.map((item) => (
            <Col xs={12} md={8} lg={6} key={item.id}>
              <Card className="shadow-sm p-3 d-flex flex-row align-items-center">
                <Image
                  src={item.image}
                  alt={item.Product}
                  rounded
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <div className="ms-3 flex-grow-1">
                  <h5 className="fw-bold mb-1">{item.Product}</h5>
                  <p className="mb-1 text-success fw-semibold">
                    ₹ {(item.Price) * (item.quantity)} ({(item.Discound) * (item.quantity)} Off)
                  </p>
                  <p className="mb-1 text-muted">Quantity: {item.quantity}</p>

                  <div className="d-flex align-items-center gap-2 mt-2">
                    <Button
                      size="sm"
                      variant="outline-secondary"
                      onClick={() => handleUpdateQuantity(item.id, (item.quantity) - 1)}
                      disabled={(item.quantity || 1) <= 1}
                    >
                      -
                    </Button>
                    <span>{item.quantity || 1}</span>
                    <Button
                      size="sm"
                      variant="outline-secondary"
                      onClick={() => handleUpdateQuantity(item.id, (item.quantity) + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemoveToCard(item.id)}
                >
                  Remove
                </Button>
              </Card>
            </Col>
          ))}

          <Col xs={12} md={8} lg={6}>
            <Card className="shadow-sm p-3 d-flex justify-content-between align-items-center flex-row">
              <h5 className="fw-bold mb-0">Total: ₹ {totalPrice}</h5>
              <Button
                variant="success"
                className="fw-bold px-4"
                onClick={() => navigate("/CheckOut")}
              >
                Checkout
              </Button>
            </Card>
          </Col>
        </Row>
      )}

      <div className="text-center mt-4">
        <Button variant="outline-secondary" onClick={() => navigate("/Product")}>
          Back to Product
        </Button>
      </div>
    </Container>
  );
};

export default Profile;

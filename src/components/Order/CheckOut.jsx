import React, { useContext, useState } from "react";
import { Container, Row, Col, Card, Button, Form, Table } from "react-bootstrap";
import { AppContaxt } from "../../store/store";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const { cartItems, currentUser, handlePlaceOrder } = useContext(AppContaxt);
  const navigate = useNavigate();

  const [name, setName] = useState(currentUser?.name || "");
  const [email, setEmail] = useState(currentUser?.email || "");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.Price) * (item.quantity || 1),
    0
  );

  if (!currentUser) {
    return (
      <Container className="py-5 text-center">
        <h3 className="text-danger mb-4">Please sign in to checkout</h3>
        <Button variant="primary" onClick={() => navigate("/SignIn")}>
          Go to Sign In
        </Button>
      </Container>
    );
  }

  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center overflow-auto mb-5 vw-100 py-5 bg-light">
      <h1 className="text-center text-success fw-bold mb-5">Checkout</h1>

      <Row className="g-4 justify-content-center">
        {/* Order Summary */}
        <Col xs={12} md={6}>
          <Card className="shadow-sm p-3 h-100">
            <h4 className="fw-bold mb-3">Order Summary</h4>
            <Table bordered hover responsive className="align-middle text-center mb-0">
              <thead className="table-primary">
                <tr>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="text-muted">
                      Your cart is empty
                    </td>
                  </tr>
                ) : (
                  cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="text-start">{item.Product}</td>
                      <td>{item.quantity || 1}</td>
                      <td>₹ {item.Price * (item.quantity || 1)}</td>
                    </tr>
                  ))
                )}
                {cartItems.length > 0 && (
                  <tr>
                    <td colSpan="2" className="fw-bold text-end">
                      Total
                    </td>
                    <td className="fw-bold text-success">₹ {totalPrice}</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Card>
        </Col>

        {/* Customer Details */}
        <Col xs={12} md={6}>
          <Card className="shadow-sm p-3 h-100">
            <h4 className="fw-bold mb-3">Customer Details</h4>
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                />
              </Form.Group>

              <Button
                variant="success"
                className="w-100 fw-bold mb-2"
                size="lg"
                onClick={() =>
                  handlePlaceOrder({ name, email, address, phone, cartItems, totalPrice, navigate })
                }
              >
                Place Order
              </Button>

              <Button
                variant="outline-secondary"
                className="w-100 fw-bold"
                size="lg"
                onClick={() => navigate("/Profile")}
              >
                Back to Orders
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckOut;

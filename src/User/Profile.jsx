import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { AppContaxt } from "../store/store";


const Profile = () => {
  const { currentUser, userItems, handleRemoveItem } = useContext(AppContaxt)

  if (!currentUser) {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100 vw-100">
        <h3 className="text-danger">⚠️ Please sign in to view your profile</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-5 pt-5">
      <h2 className="mb-4">Welcome, {currentUser.email.split("@")[0]}!</h2>
      <h5 className="mb-3">Your Products in Cart:</h5>

      {userItems.length === 0 ? (
        <p className="text-muted">You have not added any products yet.</p>
      ) : (
        <Row className="g-4">
          {userItems.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="shadow-sm h-100">
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{item.Product}</Card.Title>
                  <Card.Text>Price: ₹ {item.Price}</Card.Text>
                  <Card.Text>Discount: {item.Discound}</Card.Text>
                  <Card.Text className="text-muted">
                    {item.Discussion}
                  </Card.Text>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
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

import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ArrowLeft, Pencil, Plus } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { AppContaxt } from "../../store/store";

const Admin = () => {
  const navigate = useNavigate();
  const{username,totalItems,totalUser,items,currentUser}=useContext(AppContaxt);
  // useEffect
 

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-start vh-100 vw-100 min-vh-100 bg-light py-5 position-relative "
    >
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-success display-4">
          Welcome, {currentUser.email.split("@")[0]} 👋
        </h1>
        <p className="text-muted mt-2">
          Here you can manage your store easily.
        </p>
      </div>

      {/* Dashboard Stats */}
      <Row className="g-4 justify-content-center w-100 px-3 mb-4">
        <Col xs={12} sm={6} md={3}>
          <Card className="shadow-sm border-0 rounded-3 text-center">
            <Card.Body>
              <h5 className="text-muted">Total Products</h5>
              <h3 className="fw-bold text-success display-6 mt-2">{items.length}</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <Card className="shadow-sm border-0 rounded-3 text-center">
            <Card.Body>
              <h5 className="text-muted">Total Orders</h5>
              <h3 className="fw-bold text-primary display-6 mt-2">85</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <Card className="shadow-sm border-0 rounded-3 text-center">
            <Card.Body>
              <h5 className="text-muted">Total Users</h5>
              <h3 className="fw-bold text-warning display-6 mt-2">{totalUser}</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <Card className="shadow-sm border-0 rounded-3 text-center">
            <Card.Body>
              <h5 className="text-muted">Total Revenue</h5>
              <h3 className="fw-bold text-info display-6 mt-2">$25,300</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Add & Edit Buttons */}
      <div className="d-flex justify-content-center gap-3 mb-5">
        <Button
          variant="success"
          className="d-flex align-items-center gap-2"
          onClick={() => navigate("/Card")}
        >
          <Plus size={16} />
          Add
        </Button>
        <Button variant="primary" className="d-flex align-items-center gap-2" onClick={() => navigate("/Card")}>
          <Pencil size={16} />
          Edit
        </Button>
      </div>

      {/* Back to Home Button - bottom-right corner */}
      <Button
        variant="outline-secondary"
        className="d-inline-flex align-items-center gap-2 rounded-pill px-4 position-absolute"
        style={{ bottom: "20px", right: "20px" }}
        onClick={() => navigate("/")}
      >
        <ArrowLeft size={16} />
        Back to Home
      </Button>
    </Container>
  );
};

export default Admin;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ArrowLeft, Pencil, Plus } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const Admin = ({ username }) => {
  const navigate=useNavigate()
  return (
    <Container fluid className="min-vh-100 bg-light py-5 px-0">
      {/* Header */}
      <div className="text-center mb-5 w-100">
        <h1 className="fw-bold text-success display-4">Welcome, {username} 👋</h1>
        <p className="text-muted mt-2">Here you can manage your store easily.</p>
      </div>

      {/* Dashboard Stats */}
      <Row className="g-4 mx-2">
        <Col xs={12} sm={6} md={3}>
          <Card className="shadow-sm border-0 rounded-3 text-center h-100">
            <Card.Body>
              <h5 className="text-muted">Total Products</h5>
              <h3 className="fw-bold text-success display-5 mt-2">120</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <Card className="shadow-sm border-0 rounded-3 text-center h-100">
            <Card.Body>
              <h5 className="text-muted">Total Orders</h5>
              <h3 className="fw-bold text-primary display-5 mt-2">85</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <Card className="shadow-sm border-0 rounded-3 text-center h-100">
            <Card.Body>
              <h5 className="text-muted">Total Users</h5>
              <h3 className="fw-bold text-warning display-5 mt-2">45</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <Card className="shadow-sm border-0 rounded-3 text-center h-100">
            <Card.Body>
              <h5 className="text-muted">Total Revenue</h5>
              <h3 className="fw-bold text-info display-5 mt-2">$25,300</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Add & Edit Buttons */}
      <div className="d-flex justify-content-center gap-3 mt-4">
        <Button variant="success" className="d-flex align-items-center gap-2 "onClick={()=>navigate("/Card")}>
          <Plus size={16} />
          Add
        </Button>
        <Button variant="primary" className="d-flex align-items-center gap-2">
          <Pencil size={16} />
          Edit
        </Button>
      </div>

      {/* Back to Home Button */}
      <div className="text-center mt-5">
        <Button
          variant="outline-secondary"
          className="d-inline-flex align-items-center gap-2 rounded-pill px-4"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={16} />
          Back to Home
        </Button>
      </div>
    </Container>
  );
};

export default Admin;

// Contact.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Telephone, Envelope, GeoAlt } from "react-bootstrap-icons";

function Contact() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-light">
      <Card className="shadow-lg border-0 rounded-0 w-100 h-100">
        <Card.Body className="p-4 d-flex flex-column align-items-center">
          <div
            className="p-4 rounded-4 w-100 h-100 bg-white overflow-auto"
            style={{ maxWidth: "900px" }}
          >
            <h2 className="fw-bold text-center mb-4 text-success">Contact Us</h2>
            <p className="fs-5 text-muted text-center mb-5">
              किसी भी जानकारी, सहायता या सुझाव के लिए हमसे संपर्क करें।  
              हम हमेशा आपकी मदद करने के लिए तैयार हैं।
            </p>

            <Row className="g-4">
              {/* Contact Information */}
              <Col md={5}>
                <div className="p-4 border rounded-4 h-100 shadow-sm">
                  <h5 className="fw-bold mb-3">Get in Touch</h5>
                  <p className="mb-2">
                    <GeoAlt className="me-2 text-danger" />
                    48, Main Market, Charthawal, India
                  </p>
                  <p className="mb-2">
                    <Telephone className="me-2 text-primary" />
                    +91 8449920648
                  </p>
                  <p>
                    <Envelope className="me-2 text-success" />
                    ashishmzn@gmail.com
                  </p>
                  <p className="text-muted small mt-3">
                    Working Hours: Mon – Sat (9:00 AM – 7:00 PM)
                  </p>
                </div>
              </Col>

              {/* Contact Form */}
              <Col md={7}>
                <Form className="p-4 border rounded-4 shadow-sm" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </Form.Group>

                  {submitted && (
                    <p className="text-success text-center fw-bold">
                      ✅ Thank you! We received your message.
                    </p>
                  )}

                  <div className="d-grid">
                    <Button variant="success" type="submit" size="lg">
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>

            {/* Back to Home Button */}
            <div className="d-flex justify-content-center mt-5">
              <Button
                variant="outline-success"
                size="lg"
                className="d-flex align-items-center gap-2 px-4"
                onClick={() => navigate("/")}
              >
                <ArrowLeft size={20} />
                Back to Home
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contact;

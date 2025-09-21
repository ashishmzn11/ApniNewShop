// Services.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BoxSeam, BarChart, CartCheck, CloudUpload } from "react-bootstrap-icons";

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <BoxSeam size={40} className="text-success" />,
      title: "Inventory Management",
      desc: "दुकान के सभी प्रोडक्ट्स और उनकी क्वांटिटी का रियल-टाइम रिकॉर्ड रखिए।",
    },
    {
      icon: <BarChart size={40} className="text-primary" />,
      title: "Sales Reports",
      desc: "बिक्री का पूरा हिसाब-किताब ग्राफ और रिपोर्ट के साथ देखें।",
    },
    {
      icon: <CartCheck size={40} className="text-warning" />,
      title: "Stock Alerts",
      desc: "स्टॉक कम होने पर तुरंत अलर्ट पाएँ ताकि सामान खत्म न हो।",
    },
    {
      icon: <CloudUpload size={40} className="text-danger" />,
      title: "Cloud Backup",
      desc: "आपके सभी डेटा का सुरक्षित बैकअप क्लाउड पर स्टोर किया जाता है।",
    },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-light">
      <Card className="shadow-lg border-0 rounded-0 w-100 h-100">
        <Card.Body className="p-4 d-flex flex-column align-items-center">
          <div
            className="p-4 rounded-4 w-100 h-100 bg-white overflow-auto"
            style={{ maxWidth: "900px" }}
          >
            <h2 className="fw-bold text-center mb-4 text-success">Our Services</h2>
            <p className="fs-5 text-muted text-center mb-5">
              हम आपकी दुकान को स्मार्ट और डिजिटल बनाने के लिए यह सर्विसेज़ ऑफर करते हैं।
            </p>

            <Row xs={1} md={2} className="g-4">
              {services.map((service, idx) => (
                <Col key={idx}>
                  <Card className="h-100 shadow-sm border-0 rounded-4">
                    <Card.Body className="text-center p-4">
                      <div className="mb-3">{service.icon}</div>
                      <h5 className="fw-bold mb-3">{service.title}</h5>
                      <p className="text-muted">{service.desc}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
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

export default Services;

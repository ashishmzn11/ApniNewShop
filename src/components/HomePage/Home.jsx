// App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navget=useNavigate();
  return (
    <>
       {/* Navbar */}
       <NavBar/>

      {/* Hero Section */}
      <section
        className="d-flex align-items-center justify-content-center vh-100 vw-100 text-white"
        style={{
          background: "linear-gradient(90deg, #ff4b2b, #ff416c)",
          minHeight: "100vh",
          width: "100%",
          paddingTop: "70px", // navbar height adjust
        }}
      >
        <Container fluid className="px-5">
          <Row className="align-items-center">
            {/* Left Side */}
            <Col md={6} className="text-center text-md-start">
              <h1 className="fw-bold display-3">ONLINE ApniShop STORE</h1>
              <h4 className="mb-4">Home Delivery</h4>
              <p className="lead">
                Order fresh ApniShop, fruits, vegetables, and daily essentials
                online with fast and safe home delivery.
              </p>
              <Button variant="light" className="text-danger fw-bold px-4 py-2" onClick={()=>navget("\Product")}>
                Shop Now
              </Button>
            </Col>

            {/* Right Side */}
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img
                src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                alt="Shopping Cart"
                className="img-fluid"
                style={{ maxHeight: "500px" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

        {/* Footer */}
        <Footer/>
    </>
  );
}

export default Home;

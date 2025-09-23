import Card from "./components/Cards/Card";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./components/HomePage/Home";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/Sign/SignIn";
import Admin from "./components/Admin/Admin";
import { Route, Router, Routes } from "react-router-dom";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import { useContext, useState } from "react";
import Product from "./components/Product/Product";

function App() {
  const [username, setusername] = useState("");
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center min-vh-100"
    >
      <Row >
        <Col>
          {/* <Router> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Product />}/>
            <Route path="/Card" element={<Card  />} />
            {!username ? (
             <Route path="/SignUp" element={ <SignUp setUsername={setusername}/>} />
            ) : (
             <Route path="/Admin" element={ <Admin username={username}/>} />
            )}
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/About" element={<About />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          {/* </Router> */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;

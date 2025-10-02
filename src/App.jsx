import { Routes, Route, Navigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./components/HomePage/Home";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/Sign/SignIn";
// import Admin from "./components/Admin/Admin";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import Product from "./components/Product/Product";
import Card from "./components/Cards/Card";
import { useState } from "react";
import Profile from "./User/Profile";
import Admin from "./components/Admin/Admin";
import AdminLogin from "./components/Admin/AdminLogin";
// import Order from "./components/Order/Order";
import CheckOut from "./components/Order/CheckOut";
import Orders from "./components/Order/Order";
// import Profile from "./components/User/Profile";
// import UserAdmin from "./components/Admin/UserAdmin";

function App() {


  return (
    <Container fluid className="min-vh-100">
      <Row>
        <Col>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Card" element={<Card />} />
            <Route path="/SignUp" element={<SignUp  />} />
            <Route path="/SignIn" element={<SignIn  />} />
            <Route
              path="/Admin"
              element={<Admin/>}
            />
            <Route path="/About" element={<About />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Contact" element={<Contact />} />
            {/* fallback */}
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/Profile" element={<Profile/>}/>
            {/* <Route path="/Profile" element={<Profile/>}/> */}
            <Route path="/AdminLogin" element={<AdminLogin/>}></Route>
            <Route path="/CheckOut" element={<CheckOut/>}></Route>
            <Route path="/Order" element={<Orders/>}/>
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

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
// import Product from "./components/Product/Product";
import { useState } from "react";
import Product from "./components/Product/Product";

function App() {
  const [username, setusername] = useState("");

  // card item
  const [items, setItems] = useState([]);
  const handleAddItem = (product, category, image, action) => {
    const newItem = {
      id: Date.now(),
      Product: product,
      Category: category,
      image: image,
      Action: action,
    };
    setItems( [...items, newItem]);
  };

  const handleRemoveItem = (id) => {
    const updatedItems = items.filter((data) => data.id !== id);
    setItems(updatedItems);
  };

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
            <Route path="/Product" element={<Product items={items}/>}/>
            <Route path="/Card" element={<Card items={items} handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem} />} />
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

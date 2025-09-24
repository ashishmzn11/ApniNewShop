import { Navbar, Nav, Container, Button, Row, Col } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavBar(){
  return(
    <>
    {/* Navbar */}
      <Navbar bg="light" expand="lg" className="shadow-sm fixed-top">
        <Container>
           <Navbar.Brand as={Link} to="/SignIn" className="fw-bold text-success">
            <img
              src="/ApniShop.jpeg"       // <-- apna logo path yaha do (public folder me)
              alt="ApniShop Logo"
              height="40"
               className="d-inline-block align-top rounded-circle"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Service">Services</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
              <Button as={Link} to="/SignIn" variant="outline-success" className="ms-3">Sign In</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default NavBar;
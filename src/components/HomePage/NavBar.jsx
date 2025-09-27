import { useContext } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AppContaxt } from "../../store/store";

function NavBar() {
  const { currentUser, handleLogout } = useContext(AppContaxt);
  const navigate = useNavigate();

  const handleSignOut = () => {
    handleLogout();
    navigate("/"); // logout ke baad home page
  };
   const handleProfile = () => {
    
    navigate("/Profile"); // logout ke baad home page
  };


  return (
    <Navbar bg="light" expand="lg" className="shadow-sm fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/SignIn" className="fw-bold text-success">
          <img
            src="/ApniShop.jpeg"
            alt="ApniShop Logo"
            height="40"
            className="d-inline-block align-top rounded-circle"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Service">Services</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            

            {currentUser ? (
              <Dropdown align="end" className="ms-3">
                <Dropdown.Toggle variant="outline-primary" id="dropdown-user">
                  {currentUser.email.split("@")[0]} {/* username */}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleProfile}>
                    View Profile
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleSignOut}>
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Nav.Link as={Link} to="/SignIn" className="ms-3 btn btn-outline-success">
                Sign In
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

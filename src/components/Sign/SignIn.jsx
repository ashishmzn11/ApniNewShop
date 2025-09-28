
import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import { AppContaxt } from "../../store/store";

function SignIn() {
  
  const { handleSignIn,HandleUsername } = useContext(AppContaxt);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const HandleSignIn = (e) => {
    e.preventDefault();
    const result = handleSignIn(email, password);
// HandleUsername(email)
    if (result.success) {
      navigate("/Profile"); 
    } else {
      alert(result.message);
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-light" >
      <Card className="shadow-lg border-0 rounded-0 w-100 h-100">
        <Card.Body className="p-4 d-flex flex-column justify-content-center align-items-center">
          <div
            className="p-4 rounded-4 w-100 h-100 bg-white"
            style={{ maxWidth: "400px" }}
          >
            <h2 className="fw-bold text-center mb-4 text-success">Sign In</h2>

            <Form onSubmit={HandleSignIn}>
              {/* Email */}
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Password */}
              <Form.Group controlId="formPassword" className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Submit Button */}
              <div className="d-grid">
                <Button variant="success" size="lg" type="submit">
                  Sign In
                </Button>
              </div>
            </Form>

            {/* Don’t have account */}
            <p className="text-center mt-3 mb-0">
              Don’t have an account?{" "}
              <a
                href="/SignUp"
                className="text-decoration-none text-success fw-bold"
              >
                Sign Up
              </a>
            </p>

            {/* Back to Home */}
            <div className="d-flex justify-content-center mt-4">
              <Button
                variant="outline-success"
                size="sm"
                className="d-flex align-items-center gap-2 px-3"
                onClick={() => navigate("/")}
              >
                <ArrowLeft size={16} />
                Back to Home
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignIn;

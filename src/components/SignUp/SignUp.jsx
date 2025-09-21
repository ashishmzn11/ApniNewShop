// SignUp.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

function SignUp({setUsername}) {
  const navigate = useNavigate();

  const useremails = ["ashish@gmail.com", "vishal@gmail.com"];
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [conpass, setconpass] = useState("");
  const [error, setError] = useState("");

  const HandleSignUp = (e) => {
    e.preventDefault();
    setUsername(email)
    if (useremails.includes(email)) {
      setError("Email already registered.");
      return;
    }
    if (password.length < 4) {
      setError("Password must be at least 4 characters long.");
      return;
    }
    if (password !== conpass) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    alert("Account Created Successfully!");
    navigate("/Admin");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-light">
      <Card className="shadow-lg border-0 rounded-0 w-100 h-100">
        <Card.Body className="p-4 d-flex flex-column justify-content-center align-items-center">
          <div
            className="p-4 rounded-4 w-100 h-100 bg-white"
            style={{ maxWidth: "400px" }}
          >
            <h2 className="fw-bold text-center mb-4 text-success">Sign Up</h2>

            <Form onSubmit={HandleSignUp}>
              {/* Full Name */}
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </Form.Group>

              {/* Email */}
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Password */}
              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group controlId="formConfirmPassword" className="mb-4">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  value={conpass}
                  onChange={(e) => setconpass(e.target.value)}
                  placeholder="Re-enter password"
                  required
                />
              </Form.Group>

              {/* Error Message */}
              {error && <p className="text-danger text-center">{error}</p>}

              {/* Submit Button */}
              <div className="d-grid">
                <Button variant="success" size="lg" type="submit">
                  Create Account
                </Button>
              </div>
            </Form>

            {/* Already have account */}
            <p className="text-center mt-3 mb-0">
              Already have an account?{" "}
              <a
                href="/SignIn"
                className="text-decoration-none text-success fw-bold"
              >
                Sign In
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

export default SignUp;

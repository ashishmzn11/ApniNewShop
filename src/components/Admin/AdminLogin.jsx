import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContaxt } from "../../store/store";
import Admin from "./Admin";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
const {handleAdminLogin}=useContext(AppContaxt)

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const result = handleAdminLogin(email, password); // get return value

    if (result?.success) {
      setSuccess(true);
      setMessage(result.message);
      navigate("/Admin"); // redirect admin
    } else {
      setSuccess(false);
      setMessage(result?.message || "Invalid credentials");
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center overflow-auto mb-5 vw-100 py-5 bg-light">
      <form onSubmit={handleLogin} className="p-4 shadow rounded bg-white">
        <h3>Admin Login</h3>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-2"
        />
                  <button type="submit" className="btn btn-primary w-100">
          {success ? "Login Successful" : "Login"}
        </button>
        {message && <p className="mt-2 text-danger">{message}</p>}
        
      </form>
    </div>
  );
}

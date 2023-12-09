import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; // Make sure to import your CSS file

const Login = ({ onLoginSuccess }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Replace these with your predefined ID and password
    const predefinedId = "gtech";
    const predefinedPassword = "#gta#";

    if (id === predefinedId && password === predefinedPassword) {
      onLoginSuccess();
    } else {
      alert("Incorrect ID or password. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 ">
      <div className="login-container p-4">
        <h2>✨Welcome Back✨</h2>
        <p>Please enter your details </p>
        <div className="mb-3">
          <input
            type="text"
            style={{ border: "1px solid grey" }}
            className="form-control "
            placeholder="ID here 🪪"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            style={{ border: "1px solid grey" }}
            className="form-control"
            placeholder="Password here 🔑"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} className="btn btn-success fw-bold">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

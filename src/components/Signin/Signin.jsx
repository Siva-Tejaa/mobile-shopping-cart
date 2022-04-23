import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  return (
    <div>
      <p>Iam from Signin Component</p>
      <div className="card-container">
        <div className="signin-card">
          <div className="signin-card-image">
            <p>Hello</p>
          </div>
          <div className="signin-input">
            <input type="text" />
          </div>
          <br />
          <div className="signin-input">
            <input type="text" />
          </div>
          <div className="signin-submit">
            <input type="submit" />
          </div>
          <p>Dont have an account</p>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;

import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <>
      <div class="signupFrm">
        <form class="form">
          <h1 class="title">Sign U</h1>

          <div class="inputContainer">
            <input type="email" class="input" placeholder="Email" />
            <label for="" class="label">
              Email
            </label>
          </div>

          <div class="inputContainer">
            <input type="password" class="input" placeholder="password" />
            <label for="" class="label">
              Password
            </label>
          </div>

          <div class="inputContainer">
            <input
              type="password"
              class="input"
              placeholder="Confirm Password"
            />
            <label for="" class="label">
              Confirm Password
            </label>
          </div>

          <input type="submit" class="submitBtn" value="Sign Up" />
        </form>
      </div>
    </>
  );
};

export default Signup;

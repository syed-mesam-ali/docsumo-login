//------------------ Login form -----------------------
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import fetchUserDetails from "./fetchUserDetails";
import Swal from "sweetalert2";
import validateEmail from "../validation/emailValidation";

const LoginForm = ({ setSpinner, setUserData }) => {
  const email = useRef("");
  const password = useRef("");
  const handleLogin = (e) => {
    e.preventDefault();
    if (password.current.value === "") {
      Swal.fire({
        icon: "error",
        title: "Invalid",
        text: "Enter password to proceed",
      });
    } else if (validateEmail(email.current.value) === null) {
      Swal.fire({
        icon: "error",
        title: "Invalid",
        text: "Email entered is invalid",
      });
    } else {
      document.getElementById("appDivId").classList.add("add-spinner");
      setSpinner((prevState) => !prevState);
      loginUser();
    }
  };
  const loginUser = () => {
    fetchUserDetails(email.current.value, password.current.value)
      .then((response) => {
        document.getElementById("appDivId").classList.remove("add-spinner");
        setSpinner((prevState) => !prevState);
        setUserData((prevState) => ({
          isLoggedIn: true,
          fullName: response.data.user.full_name,
        }));
      })
      .catch((error) => {
        document.getElementById("appDivId").classList.remove("add-spinner");
        setSpinner((prevState) => !prevState);
        Swal.fire({
          icon: "error",
          title: error.status,
          text: error.error,
          footer: `<span>${error.message}</span>`,
        });
      });
  };
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title mb-4">Login to your Docsumo account</h4>
        <form>
          <div className="mb-4">
            <label htmlFor="emailForSignIn" className="form-label custom-label">
              Work Email
            </label>
            <input
              type="email"
              className="form-control"
              id="emailForSignIn"
              aria-describedby="emailHelp"
              placeholder="janedoe@gmail.com"
              ref={email}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="passForSignIn" className="form-label custom-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passForSignIn"
              placeholder="Enter password here..."
              ref={password}
            />
          </div>
          <div className="mb-3">
            <Link to="/reset-password" className="custom-link">
              Forgot Password?
            </Link>
          </div>
          <button
            className="btn btn-primary login-btn my-4"
            onClick={handleLogin}
          >
            Login
          </button>
          <div className="">
            <div className="text-center signup-div">
              Don't have an account?&nbsp;
              <a
                to="/reset-password"
                className="signup-link"
                href="https://app.docsumo.com/signup/"
              >
                Sign Up
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

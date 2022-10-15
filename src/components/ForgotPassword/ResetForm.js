//------------- forgot password form ---------------
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import validateEmail from "../validation/emailValidation";

const ResetForm = ({ setResetPassSubmitFlag }) => {
  const email = useRef("");
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title mb-4">Reset your password</h4>
        <h6 className="card-subtitle mb-5">
          Fear not. We’ll email you the instructions to reset your password.
        </h6>
        <form>
          <div className="mb-4">
            <label
              htmlFor="emailForResetPass"
              className="form-label custom-label"
            >
              Work Email
            </label>
            <input
              type="email"
              className="form-control"
              id="emailForResetPass"
              aria-describedby="emailHelp"
              placeholder="janedoe@gmail.com"
              ref={email}
            />
          </div>
          <div className="row">
            <div className="col-6">
              <button
                type="submit"
                className="btn btn-primary login-btn mt-4"
                onClick={(e) => {
                  e.preventDefault();
                  if (validateEmail(email.current.value) === null) {
                    Swal.fire({
                      icon: "error",
                      title: "Invalid",
                      text: "Email entered is invalid",
                    });
                  } else {
                    setResetPassSubmitFlag((prevState) => !prevState);
                  }
                }}
              >
                Submit
              </button>
            </div>
            <div className="col-6">
              <Link to="/login" className="return-link mt-4">
                Return to Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetForm;

//---------------- after forgot password success dashboard --------------
import React from "react";
import { Link } from "react-router-dom";

const ResetSubmit = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title mb-4">Check your email for a reset link</h4>
        <h6 className="card-subtitle mb-3">
          If you don’t find the email in your inbox, check your spam folder.
        </h6>
        <div>
          <ul className="custom-ul">
            <li>
              Only users already registered with Docsumo can apply for a new
              password.
            </li>
            <li>
              Contact us at&nbsp;
              <a
                href="https://support.docsumo.com/"
                target="_blank"
                title="Knowledge Base"
                className="support-link"
              >
                support@docsumo.com
              </a>
              &nbsp;if you didn’t receive the password reset link.
            </li>
          </ul>
        </div>
        <Link to="/login" className="btn btn-primary login-btn mt-4">
          Return to Login
        </Link>
      </div>
    </div>
  );
};

export default ResetSubmit;

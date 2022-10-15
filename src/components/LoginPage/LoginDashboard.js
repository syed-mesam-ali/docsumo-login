//--------------------- after successful login dashboard card -------------------
import React from "react";

const LoginDashboard = ({ userData, setUserData }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title mb-4">
          Hello <span className="userName-span">{userData.fullName}</span>
        </h4>
        <h6 className="card-subtitle mb-3">
          Document AI software with Intelligent OCR technology helps you convert
          unstructured documents such as pay stubs, invoices and bank statements
          to actionable data. Works with documents in any format with minimal
          setup.
        </h6>
        <button
          className="btn btn-primary login-btn mt-4"
          onClick={() => {
            setUserData((prevState) => !prevState.isLoggedIn);
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default LoginDashboard;

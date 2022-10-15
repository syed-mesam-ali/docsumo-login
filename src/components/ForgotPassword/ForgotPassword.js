import React, { useState } from "react";
import "./ForgotPassword.css";
import ResetForm from "./ResetForm";
import ResetSubmit from "./ResetSubmit";

const ForgotPassword = () => {
  const [resetPassSubmitFlag, setResetPassSubmitFlag] = useState(false);
  return (
    <div className="forgot-password-page col-12 d-flex justify-content-center">
      {resetPassSubmitFlag ? (
        <ResetSubmit />
      ) : (
        <ResetForm setResetPassSubmitFlag={setResetPassSubmitFlag} />
      )}
    </div>
  );
};

export default ForgotPassword;

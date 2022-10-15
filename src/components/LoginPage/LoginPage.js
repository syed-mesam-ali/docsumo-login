import React, { useState } from "react";
import "./LoginPage.css";
import LoginForm from "./LoginForm";
import LoginDashboard from "./LoginDashboard";
import FadeLoader from "react-spinners/FadeLoader";

const LoginPage = () => {
  const [userData, setUserData] = useState({
    isLoggedIn: false,
    fullName: "guest",
  });
  const [spinner, setSpinner] = useState(false);
  return (
    <div className="loginPage col-12 d-flex justify-content-center">
      {spinner ? (
        <FadeLoader
          className="loader-spinner"
          size={150}
          color="#EDEFFE"
          style={{
            position: "absolute",
            zIndex: "10000",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ) : (
        ""
      )}
      {userData.isLoggedIn ? (
        <LoginDashboard userData={userData} setUserData={setUserData} />
      ) : (
        <LoginForm setSpinner={setSpinner} setUserData={setUserData} />
      )}
    </div>
  );
};

export default LoginPage;

import "./App.css";
import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

function App() {
  return (
    <div className="appDiv" id="appDivId">
      <div className="row main-row">
        <Header />
        <BrowserRouter>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/reset-password" component={ForgotPassword} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

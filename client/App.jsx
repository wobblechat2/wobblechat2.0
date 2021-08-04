import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import MainAppContainer from "./containers/MainAppContainer";
import "./stylesheets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute exact={true} path="/">
          <MainAppContainer />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};

export default App;

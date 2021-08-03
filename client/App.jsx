import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import MainAppContainer from "./containers/MainAppContainer";
import styles from './scss/application.scss';

const App = () => {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <ProtectedRoute exact={true} path="/">
        <MainAppContainer />
      </ProtectedRoute>
    </Router>
  );
};

export default App;

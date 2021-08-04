import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import MainAppContainer from "./containers/MainAppContainer";
import styles from './scss/application.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} />
        <ProtectedRoute exact={true} path="/">
          <MainAppContainer />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};

export default App;

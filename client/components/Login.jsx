import React from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import auth from "./Auth";
import Signup from './Signup'


const Login = (props) => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const history = useHistory();

  const handleUsernameInputChange = (e) => {
    e.persist();
    setUserData((userData) => ({
      ...userData,
      username: e.target.value,
    }));
  };

  const handlePasswordInputChange = (e) => {
    e.persist();
    setUserData((userData) => ({
      ...userData,
      password: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userData.username,
        password: userData.password,
      }),
    })
      .then((response) => {
        history.push("/");
      })
      .catch((err) => {
        console.log("Error making fetch request", err);
      });
    history.push("/");
  };

  return (
    <div className='loginBorder'>
      <div className="loginComp">
        <h1>Wobble Chat V2</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input
              placeholder="User Name"
              id="username"
              className="form-field"
              type="text"
              name="username"
              value={userData.username}
              onChange={handleUsernameInputChange}
            />
            <input
              placeholder="Password"
              id="password"
              className="form-field"
              type="text"
              name="password"
              value={userData.password}
              onChange={handlePasswordInputChange}
            />
            <input type="submit" value="Sign In" className="form-field" />
          </div>
        </form>
        <Signup/>
      </div>
    </div> 
    
  );
};

export default Login;

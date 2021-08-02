import React from 'react';
import {useState} from 'react';

const Login = (props) => {
  const [userData, setUserData] = useState({ username: '', password: ''});
  const [errorMessage, setErrorMessage] = useState({ value: '' });

  //custom hook to update state with current value
  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.value]: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }



}
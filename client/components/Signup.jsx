import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { faAmericanSignLanguageInterpreting } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {

    const login = () => {
        fetch('/api/oAuth')
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return( 
        <div className='googleAuth'>
            <button id='loginButton' onClick={login} className='btn'>Sign In</button>
        </div>
        )
};

export default Signup;
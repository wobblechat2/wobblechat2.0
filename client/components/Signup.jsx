import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Cookies from "js-cookie";
import { faAmericanSignLanguageInterpreting } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {

    const login = () => {
        fetch('/api/google')
        .then(res => {
            console.log(res);
        }) 
        .catch(err => {return err})
    }

    return( 
        <div className='googleAuth'>
            <a href="/api/google">Sign In with Google</a>
        </div>
        )
};

export default Signup;
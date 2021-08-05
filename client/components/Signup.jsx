import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Cookies from "js-cookie";
import { faAmericanSignLanguageInterpreting } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/btn_google_light_normal_ios.svg'

const Signup = () => {

    return( 
        <div className='googleBox'>
            <a className='googleAuth' href="/api/google">
                <img src={logo}/>
                <span>Sign In With Google</span>
            </a>
        </div>
        ) 
};

export default Signup;
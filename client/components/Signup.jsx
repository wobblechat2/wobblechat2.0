import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { faAmericanSignLanguageInterpreting } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {


    return( 
        <div className='googleAuth'>
            <Link to='/google'>Sign In</Link>
        </div>
        )
};

export default Signup;
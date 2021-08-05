import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";


class Auth {
  constructor() {
    this.authenticated = false;
  }


    isAuthenticated() { 
    const loggedIn = Cookies.get("loggedIn");
    console.log('loggedIn is', loggedIn);
    return !!loggedIn;
  }
}


// const auth = () => {
//   const [authenticated, setAuthenticated] = useState(false);
//   useEffect(() => {
//     fetch('http://localhost:3000/api/')
//   },[])

// }

export default new Auth();

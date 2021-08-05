import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import React, { Component, useState, useEffect } from "react"; // ---> import useState, useEffect
import { Link } from "react-router-dom";
import CreateQuestionForm from "../components/CreateQuestionForm";
import logo from '../assets/ssmallLogo.png'

const NavBar = () => {
  const [clickQuestion, setClickQuestion] = useState(false)
  
  const clickQ = () => {
    if (!clickQuestion) return setClickQuestion(true);
    setClickQuestion(false);
  }

return (
     <div className="top-menu-container">
       <div className='nav_logo'>
       <img className='nav_img' src={logo}></img>
        <Link to={"/"} className="brandname">
        Pantless Chat
          </Link>
       </div>
        <div className="navbar_buttons">
          {/* <Link to={"/create"}> */}
            <button className='newQ_button' onClick={() => clickQ()} >Ask a question</button>
          {/* </Link> */}
          {clickQuestion && <CreateQuestionForm setClickQuestion={() => setClickQuestion(false)}/> }
          <button id="navLogout"> <a href='http://localhost:3000/api/logout' >
              Log Out
            </a></button>
           
        </div>
      </div>
  )
}

// changeFetched={callback}

export default NavBar;
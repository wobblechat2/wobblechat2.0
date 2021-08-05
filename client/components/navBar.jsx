import React, { Component, useState, useEffect } from "react"; // ---> import useState, useEffect
import { Link } from "react-router-dom";
import CreateQuestionForm from "../components/CreateQuestionForm";

const NavBar = () => {
  const [clickQuestion, setClickQuestion] = useState(false)


  const logoutBut = () => {
    fetch('api/logout')
    .then(res => {
      window.location.href('http://localhost:8080')
    })
    .catch(err => {return err});
  };
  

  const clickQ = () => {
    if (!clickQuestion) return setClickQuestion(true);
    setClickQuestion(false);2
  }

return (
     <div className="top-menu-container">
        <Link to={"/"} className="brandname">
          Wobblechat
        </Link>
        <div className="navbar_buttons">
          {/* <Link to={"/create"}> */}
            <button className='newQ_button' onClick={() => clickQ()} >Ask a question</button>
          {/* </Link> */}
          {clickQuestion && <CreateQuestionForm /> }
          <Link to='/'>
            <button className='signOut_button' onClick={() => logoutBut()}>Sign out</button>
            </Link>
        </div>
      </div>
  )
}

// changeFetched={callback}

export default NavBar;
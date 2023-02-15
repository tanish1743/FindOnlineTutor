import React from "react";
import "../App.css";
import {NavLink} from "react-router-dom";

function Navbar(){
  return(
    <div className="nav">
      <ul id="nav">
        <li><NavLink className="link" exact to="/">Home</NavLink></li>
        <li className="itm cat"><NavLink className="link" exact to="/categories">Subjects</NavLink></li>
        <li className="itm tch" ><NavLink className="link" exact to="/tsignup">Tutor register</NavLink></li>
        <li className="itm lgin">
          <NavLink className="link" exact to="/login">Log in</NavLink>
        </li>
        <li className="itm ">
          <NavLink className="link" exact to="/signup">Sign up</NavLink>
        </li>
    </ul>
    </div>
  );
}

export default Navbar;
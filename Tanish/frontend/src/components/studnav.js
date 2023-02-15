import React from "react";
import "../App.css";
import {NavLink} from "react-router-dom";

function Studnav(){
    return(
        <div className="nav">
            <ul id="nav">
                <li><NavLink className="link" exact to="/home">Home</NavLink></li>
                <li className="itm cat"><NavLink className="link" exact to="/scat">Subjects</NavLink></li>
                
                <li className="itm class" ><NavLink className="link" exact to="/student">Classroom</NavLink></li>
                <li className="itm un">
                    <NavLink className="link" exact to="/student">Username</NavLink>
                </li>
                <li className="logout">
                    <NavLink className="link" exact to="/home">Logout</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Studnav;
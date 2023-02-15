import React from "react";
import Studnav from "../components/studnav";
import "../pages/categories.css";
import {NavLink} from "react-router-dom";

function Scat(){
    return(
        <div>
            <Studnav/>
            <div className="all">
                <div className="cf"> 
                    <div className="pill c1"><NavLink className="link" exact to="/english"><center>English</center></NavLink></div>
                    <div className="pill c2"><NavLink className="link" exact to="/hindi"><center>Hindi</center></NavLink></div>
                    <div className="pill c1"><NavLink className="link" exact to="/maths"><center>Maths</center></NavLink></div>
                </div>
                <div className="cs">
                    <div className="pill c2"><NavLink className="link" exact to="/cplus"><center>C++</center></NavLink></div>
                    <div className="pill c1"><NavLink className="link" exact to="/java"><center>Java</center></NavLink></div>
                    <div className="pill c2"><NavLink className="link" exact to="/python"><center>Python</center></NavLink></div>
                </div>
                <div className="ct">
                    <div className="pill c1"><NavLink className="link" exact to="/science"><center>Science</center></NavLink></div>
                    <div className="pill c2"><NavLink className="link" exact to="/react"><center>React</center></NavLink></div>
                    <div className="pill c1"><NavLink className="link" exact to="/javascript"><center>JavaScript</center></NavLink></div>
                </div>
            </div>
        </div>
    );
}

export default Scat;
import React from "react";
import Studnav from "../components/studnav";
import "../pages/teacher.css";

function Teacher(){
    return(
        <div>
            <Studnav/>
            <div className="head">Welcome Back, Username !!</div>
            <img src="hey.gif"  className="hi" />
            <div className="crs"><center>Course- course<br/> Cost- cost <br/> By- Username</center></div>
            <img src="profile.png"  className="profile"/>
        </div>
    );
}

export default Teacher;
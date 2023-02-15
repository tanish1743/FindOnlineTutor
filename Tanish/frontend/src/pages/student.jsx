import React from "react";
import Studnav from "../components/studnav";
import "../pages/student.css";

function Student(){
    return(
        <div>
            <Studnav/>
            <div className="head">Welcome Back !!</div>
            <img src="hey.gif"  className="hi" />
            <div className="bx1">Enroll for courses <br/> at the best prices.</div>
            <div className="offer">Get 50 % discount on courses. <br/> Offer valid till 12 pm today !!</div>
        </div>
    );
}

export default Student;
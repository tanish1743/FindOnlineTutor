import React from "react";
import Navbar from "../components/navbar";
import "../pages/categories.css";

function Categories(){
    return(
        <div>
            <Navbar/>
            <div className="all">
                <div className="cf"> 
                    <div className="pill c1"><center>English</center></div>
                    <div className="pill c2"><center>Hindi</center></div>
                    <div className="pill c1"><center>Maths</center></div>
                </div>
                <div className="cs">
                    <div className="pill c2"><center>C++</center></div>
                    <div className="pill c1"><center>Java</center></div>
                    <div className="pill c2"><center>Python</center></div>
                </div>
                <div className="ct">
                    <div className="pill c1"><center>Science</center></div>
                    <div className="pill c2"><center>React</center></div>
                    <div className="pill c1"><center>JavaScript</center></div>
                </div>
            </div>
        </div>
    );
}

export default Categories;
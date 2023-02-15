import React, {useState} from "react";
import Axios from "axios";
import "../pages/login.css";

function Tsignup(){
    const [courseReg, setCourseReg]=useState('')
    const [usernameReg, setUsernameReg]=useState('')
    const [passwordReg, setPasswordReg]=useState('')
    const [contactReg, setContactReg]=useState('')
    
    const tregister=()=>{
      Axios.post("http://localhost:3001/tregister", {
        Course: courseReg,
        Username:usernameReg,
        Password: passwordReg,
        Contact: contactReg,
      }).then((response)=>{
        console.log(response);
      });
    };


  return(
    <div className="obox">
      <div>
        <center><h1 className="heading nhead">FOT</h1></center>
        <center>
        <p className="para">Sign up to find the best tutors online.</p>
        {/* <select id="course" name="course" >
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="maths">Maths</option>
            <option value="c++">C++</option>
            <option value="java">Java</option>
            <option value="oython">Python</option>
            <option value="science">Science</option>
            <option value="react">React</option>
            <option value="javascript">JavaScript</option>
        </select><br/><br/> */}
        <input type="text" className="inpbox" placeholder="Course" onChange={(e)=>{
            setCourseReg(e.target.value);
        }}/>
        <input type="text" className="inpbox" placeholder="Username" onChange={(e)=>{
            setUsernameReg(e.target.value);
        }}/>   <br/>
        <input type="password" className="inpbox" placeholder="Password" onChange={(e)=>{
            setPasswordReg(e.target.value);
        }}/>   <br/>
        <input type="number" className="inpbox" placeholder="Contact" onChange={(e)=>{
            setContactReg(e.target.value);
        }}/>   <br/>
        <p>By signing up, you agree to our Terms , Privacy<br/> Policy and Cookies Policy .</p>
        <button onClick={tregister} className="btn sign">Sign up</button>
        </center>

      </div>
    </div>
  );
} 
export default Tsignup;
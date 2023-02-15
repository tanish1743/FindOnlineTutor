import React, {useState} from "react";
import Axios from "axios";
import "../pages/login.css";

function Signup(){
    const [usernameReg, setUsernameReg]=useState('')
    const [passwordReg, setPasswordReg]=useState('')
    
    const sregister=()=>{
      Axios.post("http://localhost:3001/sregister", {
        Username:usernameReg,
        Password: passwordReg,
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
        {/* <input type="email" placeholder="Email"/><br/>
        <input type="text" placeholder="Full Text"/><br/> */}
        <input type="text" className="inpbox" placeholder="Username" onChange={(e)=>{
            setUsernameReg(e.target.value);
        }}/>   <br/>
        <input type="password" className="inpbox" placeholder="Password" onChange={(e)=>{
            setPasswordReg(e.target.value);
        }}/>   <br/>
        <p>By signing up, you agree to our Terms , Privacy<br/> Policy and Cookies Policy .</p>
        <button onClick={sregister} className="btn sign">Sign up</button>
        </center>

      </div>
    </div>
  );
} 
export default Signup;
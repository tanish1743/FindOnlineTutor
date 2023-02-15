import React, {useState} from "react";
import "../pages/login.css";
import Axios from 'axios';
import {NavLink} from "react-router-dom";

function Login(){
  const [username, setUsername]=useState("")
  const [password, setPassword]=useState("")

  const [loginStatus, setLoginStatus]= useState("")

  const log=()=>{
    Axios.post("http://localhost:3001/slogin", {
      Username:username,
      Password: password,
    }).then((response)=>{
      if(response.data.message){
        setLoginStatus(response.data.message);
      }else{
        setLoginStatus(response.data[0].username);
      }
    });
  };

  return(
    <div className="obox">
      <div>
        <center><h1 className="heading">Find Online Tutor</h1></center>
        <center>
        <form className="choice">
          <input type="radio" name="role" value="teacher"/>Teacher &nbsp;
          <input type="radio" name="role" value="student"/>Student &nbsp;
        </form>
        <input type="text" className="inpbox" placeholder="Username" onChange={(e)=>{
            setUsername(e.target.value);
        }}/>    <br /> <br />
        <input type="password" className="inpbox" placeholder="Password" onChange={(e)=>{
            setPassword(e.target.value);
        }}/>    <br/>
        <NavLink className="link" exact to="/student"><button onClick={log} className="btn">Log in</button></NavLink>
        </center>
      </div>
      <div>
       <center className="noacc"> Don't have an account? Sign up</center>
      </div>
    </div>
  );
} 
export default Login;
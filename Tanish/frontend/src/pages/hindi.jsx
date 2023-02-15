import React, { useState, useEffect } from 'react';
import Studnav from "../components/studnav";
import axios from 'axios'
import "../pages/scat.css";

function Hindi(){
    const [books, setBooks] = useState([]);
      
    useEffect(() => {
    axios.get("http://localhost:3001/hin")
        .then((res)=>{
            setBooks(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, []);
  
    // console.log(books);
    return(
        <div>
            <Studnav/>
            <div className="books">
                {books.map((teacher) => (
                <div key={teacher.id} className="book">
                    <img src="profile.png" className="pr"/>
                    <center><div className="name">{teacher.Username}</div></center>
                </div>
                ))}
            </div>
            
        </div>
    );
}

export default Hindi;
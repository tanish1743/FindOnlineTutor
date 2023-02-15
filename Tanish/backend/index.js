const express = require ("express");
const mysql = require ("mysql");
const cors = require("cors");

const app= express();

app.use(express.json());
app.use(cors());

const db=mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "loginsystem",
});

app.post("/sregister", (req,res)=>{
    const username=req.body.Username;
    const password= req.body.Password;
    db.query(
        "INSERT INTO student (Username, Password) VALUES (?,?)",
        [username, password],
        (err, result)=>{
            console.log(err);
        }
    );
});

app.post("/tregister", (req,res)=>{
    const course=req.body.Course;
    const username=req.body.Username;
    const password= req.body.Password;
    const contact= req.body.Contact;
    console.log("wowowow ",course,username,password,contact);
    db.query(
        "INSERT INTO teacher ( Username, Password, Course, Contact) VALUES (?,?,?,?)",
        [username, password, course,contact],
        (err, result)=>{
            console.log(err);
        }
    );
});

app.post("/slogin", (req,res)=>{
    const username=req.body.Username;
    const password= req.body.Password;
    db.query(
        "SELECT * FROM student where Username=? AND password=?",
        [username, password],
        (err, result)=>{
            if(err){
                res.send({err:err});
            }
            if(result.length > 0){
                res.send(result);
            }else{
                res.send({message: "Wrong username/password"});
            }
        }
    );
});

app.post("/tlogin", (req,res)=>{
    const username=req.body.Username;
    const password= req.body.Password;
    db.query(
        "SELECT * FROM teacher where Username=? AND password=?",
        [username, password],
        (err, result)=>{
            if(err){
                res.send({err:err});
            }
            if(result.length > 0){
                res.send(result);
            }else{
                res.send({message: "Wrong username/password"});
            }
        }
    );
});

app.get("/eng", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'English'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/hin", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'Hindi'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/math", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'Maths'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/cp", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'C++'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/java", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'Java'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/py", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'Python'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/sc", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'Science'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/rea", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'React'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/js", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'JavaScript'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});

app.listen(3001, ()=>{
    console.log("running server");
});
const express = require("express");
const mysql = require("mysql");

// Create connection to mysql
const db = mysql.createConnection({
    hosthost:"localt",
    user :"sebastian",
    password : "123456",
    database:''
});

// connect 
db.connect((err)=>{
    if (err){
        throw err;
    }else{
        console.log("Successfully connected to mysql.")
    }
});

const app= express();

// Create DB
app.get('createdb',(req,res)=>{
    console.log("APP GET -----> createdb ");
    let sql = 'CREATE DATABASE nodemysql;';
    db.query(sql,(err, result)=>{
        if(err){
            throw err;
        }else{
            console.log('Database was created succesfully.');
            console.log(result);
            res.send('Created succesfully');
        }
    });

})

// Create DB
app.get('hello',(req,res)=>{
    console.log("APP GET -----> HELLO ");
    res.send("Hello");

})


app.listen('3000',()=>{
    console.log("Server started at port 3000");
});
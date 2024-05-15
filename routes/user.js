const express = require('express');
const user = express.Router();
const path = require('path');

user.get('/login',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"..","views","user.html"));
});

user.post('/result',(req,res,next)=>{
    console.log(req.body);
    res.send('Logged in Successfully!');
});

module.exports = user;
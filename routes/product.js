const express = require('express');
const product = express.Router();
const path = require('path');

product.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"..",'views','product.html'));
});

product.post('/result',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/products/add-product');
});

module.exports = product;



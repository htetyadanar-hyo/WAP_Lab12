const express = require('express');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
const path = require('path');
const Express = express();

Express.use(express.urlencoded());
Express.use('/products',productRouter);
Express.use('/users',userRouter);
Express.get("/",(req,res,next) => {
    res.sendFile(path.join(__dirname,".","views","general.html"));
});

Express.use(express.static(path.join(__dirname,'public','css')));

Express.get('/TestError',(req,res,next)=>{
    console.log(abc);
})

Express.use((err,req,res,next)=>{
    res.status(500).send("My Own Error Handling");
})

Express.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,".","views","404.html"))
})

Express.listen(3000, () => {
    console.log("Listening on 3000...");
})



const express = require('express')
const app = express();
function a(res,req,next){
    console.log('in function 1');
    next();
}
function b(req,res,next){
    console.log('in function 2');
    res.send("completed");
}
app.use(a);
app.use(b);
app.listen('3001');
console.log('completed test');
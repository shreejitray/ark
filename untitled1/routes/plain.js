const express = require('express');
const router = express.Router();
function sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}
router.get('/',function(req,res,next){
    sleep(3000);
   res.send('Sending plain test');
});

module.exports=router;
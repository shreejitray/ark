var t = require('exectimer');

function mark2(req,res,next) {
    console.log('mark two testing');
    req.performance = {
        start:new t.Tick('response_time'),
        timer:t.timers
    }
    req.performance.start.start();
    res.func1 = res.send;
    res.send = function(body) {
        console.log('modifying send');
        req.performance.start.stop();
        console.log(`Time taken for execution: ${req.performance.timer.response_time.mean()/1000000} milli seconds`);
        res.func1(body);
    }
    next();
}
module.exports = {
    mark2
}
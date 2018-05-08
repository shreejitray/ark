var object  = {
    func:function(msg,callback) {
        if(callback) {
            callback(msg);
        }
    }
}
object.func('shreejit',function(msg){
    console.log(msg);
});

var func_old = object.func;
object.func = function(msg,callback) {
    msg = msg+'modified';
    func_old(msg,callback);
}

object.func('shreejit',function(msg){
    console.log(msg);
});
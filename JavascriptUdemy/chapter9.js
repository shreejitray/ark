
function a(){
    function b() {
        //var myvar;
        console.log(`inside b value for myvar ${myvar}`);
    }
    var myvar =2;
    b();
    console.log(`inside a value for myvar ${myvar}`);
}
var myvar=1;
a();
console.log(`inside global context, value for myvar ${myvar}`);
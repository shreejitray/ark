function a(item,index){
    console.log('inside a');
}

var arr =['a','b','c'];

arr.forEach((item,index)=>{
    a(item,index);
});
console.log('program completed');
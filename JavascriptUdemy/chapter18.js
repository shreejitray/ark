function wait(){
    var timer = 3000 + new Date().getTime();
    while(new Date() < timer) {

    }
    console.log('timer done');
}

console.log(wait.toString());
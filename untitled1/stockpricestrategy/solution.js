var input = [100,30,20,40,10,30,40,100,1,2,3];
var buyIndex=0;
var sellIndex=1;
var profit=0;
while(sellIndex < input.length) {
    if(profit < input[sellIndex] - input[buyIndex]){
        profit = input[sellIndex] - input[buyIndex];
    } else {
        if (input[sellIndex] < input[buyIndex]) {
            buyIndex = sellIndex;
        }
    }
    sellIndex++;
}

console.log(profit);
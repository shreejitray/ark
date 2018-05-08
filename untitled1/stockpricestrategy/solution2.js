var prices =[1,2,100];

function processStock(day,spent,numOfStocks,prices){
    var buyProfit,sellProfit,nothingProfit;
    if(day === prices.length){
        return 0;
    }
    buyProfit = processStock(day+1,spent+prices[day],numOfStocks+1,prices);
    nothingProfit = processStock(day+1,spent,numOfStocks,prices);
    if(numOfStocks === 0) {
        sellProfit = 0;
    }else {
        sellProfit = processStock(day+1,0,0,prices)+(prices[day]*numOfStocks-spent);
    }
    var profit = Math.max(buyProfit,sellProfit,nothingProfit);
    return profit;
}

function stockmax(prices) {
    var profit = processStock(0,0,0,prices);
    return profit;
    // Complete ths function
}

console.log(stockmax(prices));
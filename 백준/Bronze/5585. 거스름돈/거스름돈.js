const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const cost = +input[0];
const coins = [500,100,50,10,5,1];
let change = 1000 - cost;
let count = 0;

for(coin of coins){
    const cnt = Math.floor(change / coin);
    count += cnt;
    change -= coin * cnt;
}
console.log(count);
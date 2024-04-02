let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];

const fib = (n,memo=[]) => {
    if(memo[n] !== undefined) return memo[n];
    if(n < 2) {
        memo[n]=n;
    }
    else{
        memo[n]=BigInt(fib(n-1,memo))+BigInt(fib(n-2,memo));
    }
    return memo[n];
}

console.log(fib(n).toString());
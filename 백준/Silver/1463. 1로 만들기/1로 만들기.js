let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const dp = Array(N+1).fill(0);

const makeOne = (num) => {
     for(let i=2;i<num+1;i++){
         dp[i] = dp[i-1]+1;
         if(i % 2 === 0){
             const quote = Math.floor(i/2);
             dp[i]=Math.min(dp[i],dp[quote]+1);
         }
         if (i % 3 === 0){
             const quote = Math.floor(i/3);
             dp[i]=Math.min(dp[i],dp[quote]+1);
         }
     }
    return dp[num];
}

console.log(makeOne(N));
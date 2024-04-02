let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const S = +input[0]*2;
let n = Math.floor(Math.sqrt(S));

    while(n*(n+1) > S){
        n-=1;
    }
 console.log(n);


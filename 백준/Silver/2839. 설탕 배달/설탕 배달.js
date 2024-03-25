let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
let cnt = 0;

const greedy = (num) => {
     while(num > 0){
        if(num % 5 == 0){
            num -= 5;
        }
        else {
           num -= 3; 
        }
        cnt+=1;
    }
    return num === 0 ? cnt : -1;
}

console.log(greedy(N));
   
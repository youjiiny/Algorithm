const fs = require('fs');
let [N,input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.split(' ').sort((a,b)=> a-b); 

let time = 0;
let sum = 0;

for(let i =0; i < N;i++){
    time += +input[i];
    sum += time;
}
console.log(sum);
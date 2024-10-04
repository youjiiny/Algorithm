const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const map = new Map();

for(let i = 1; i <= n; i++){
   const [url, password] = input[i].split(" ");
    map.set(url,password);
}
for(let i = n+1; i <= n+m;i++){
   const url = input[i];
   console.log(map.get(url));
}
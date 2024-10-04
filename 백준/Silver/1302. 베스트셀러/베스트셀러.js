const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const obj = {};

for(let i = 1; i <= n; i++){
    const title = input[i];
    obj[title] = (obj[title] || 0) + 1; 
}
const sorted = Object.entries(obj).sort((a,b) => {
    if(a[1] !== b[1]) return b[1]-a[1];
    return a[0].localeCompare(b[0]);
});
console.log(sorted[0][0]);
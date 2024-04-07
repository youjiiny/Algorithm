let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const node = +input[0];
const edge = +input[1];
const graph = [...new Array(node+1)].map(x => []);
const visited = new Array(node+1).fill(0);
let cnt = 0;

for(let i =0;i<edge;i++){
   const start = +input[i+2].split(' ')[0];
   const end = +input[i+2].split(' ')[1];
   graph[start].push(end);
   graph[end].push(start);
}


visited[1] = 1;
const dfs = (start) => {
      for(let end of graph[start]){
	      if(!visited[end]){
            visited[end] = 1;
            cnt+=1;
            dfs(end);
          }
     }
}
dfs(1);
console.log(cnt);
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input.shift();
input = input.map((item)=> item.split(''));
let visited = [...new Array(N)].map((_)=> Array(N).fill(0));
let cnt = 0;
let cnt2 = 0;

const dx=[-1,1,0,0];
const dy=[0,0,-1,1];

const dfs = (x,y) => {
    visited[x][y] = 1;
    for(let i=0;i<4;i++){
        const nx = x+dx[i];
        const ny = y+dy[i];
        if(nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
        if(!visited[nx][ny] && input[x][y] == input[nx][ny]) dfs(nx,ny);
    }
}           

//적록색약이 아닌 사람
for(let i=0;i<N;i++){
    for(let j=0;j<N;j++){
        if(!visited[i][j]){
            dfs(i,j); 
            cnt+=1;
        }
    }
}

//적록색약인 사람
visited = [...new Array(N)].map((_)=> Array(N).fill(0));
for(let i=0;i<N;i++){
    for(let j=0;j<N;j++){
     if(input[i][j] == 'G') {
         input[i][j]='R';
       }
    }
}

for(let i=0;i<N;i++){
    for(let j=0;j<N;j++){
        if(!visited[i][j]){
            dfs(i,j);
            cnt2+=1;
        }
    }
}

console.log(cnt, cnt2);




function solution(n, computers) {
  const visited = new Array(n).fill(false);
  let network = 0;

  const dfs = (x) => {
      visited[x] = true;
      for(let i = 0; i < n ;i++){
          if(!visited[i] && computers[x][i]){
              dfs(i);
          }
      }
  }
  for(let i = 0; i < n; i++){
      if(!visited[i]){
          dfs(i); 
          network++;
      }
  }
  return network;
}
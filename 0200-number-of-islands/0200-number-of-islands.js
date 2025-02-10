/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const row = grid.length;
    const col = grid[0].length;
    const visited = Array(row).fill().map(()=> Array(col).fill(false));
    let cnt = 0;

    function bfs(x, y){
        const dx = [-1, 1, 0, 0];
        const dy = [0, 0, -1, 1];
        const q = [];
        q.push([x, y]);
        visited[x][y] = true;

        while(q.length){
            const [cur_x, cur_y] = q.shift();
            for(let i = 0; i < 4; i++){
                const next_x = cur_x + dx[i];
                const next_y = cur_y + dy[i];

                if(next_x >= 0 && next_x < row && next_y >= 0 && next_y < col){
                    if(grid[next_x][next_y] === "1" && !visited[next_x][next_y]){
                        visited[next_x][next_y] = true;
                        q.push([next_x, next_y]);
                    }
                }
            }
        }

    }

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
           if(grid[i][j] === '1' && !visited[i][j]){
             bfs(i, j);
             cnt++;
           }
        }
    }
    return cnt;
};
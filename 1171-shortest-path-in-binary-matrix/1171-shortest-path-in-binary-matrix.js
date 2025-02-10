/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const row = grid.length;
    const col = grid[0].length;

    if(grid[0][0] || grid[row-1][col-1]){
        return -1;
    }
    const visited = Array(row).fill().map(() => Array(col).fill(0));
    visited[0][0] = 1;

    function bfs(x, y){
        const  direction = [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]];
        const q = [];
        q.push([x, y]);

        while(q.length){
            const [cur_x, cur_y]  = q.shift();
            if(cur_x === row - 1 && cur_y === col - 1){
                return visited[cur_x][cur_y];
            }
            for(const [dx, dy] of direction){
                const next_x = cur_x + dx;
                const next_y = cur_y + dy;
                if(next_x >= 0 && next_x < row && next_y >= 0 && next_y < col){
                    if(!grid[next_x][next_y] && !visited[next_x][next_y]){
                        q.push([next_x, next_y]);
                        visited[next_x][next_y] = visited[cur_x][cur_y] + 1;
                    }
                }
            }
        }
        return -1;
    }
    return bfs(0, 0);
};
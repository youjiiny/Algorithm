/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = new Array(rooms.length).fill(0);
    function dfs(v){
        visited[v] = 1;
        for(const next_v of rooms[v]){
            if(!visited[next_v]){
                dfs(next_v);
            }
        }
    }
    dfs(0);
    return visited.every(v =>  v);

};
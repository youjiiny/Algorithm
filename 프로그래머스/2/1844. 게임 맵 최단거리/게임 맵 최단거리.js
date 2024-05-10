function solution(maps) {
    const n = maps.length - 1;
    const m = maps[0].length - 1;
    const route = [[0,0,1]];
    
    while(route.length){
        const [x,y,move] = route.shift();
        if(x == n && y == m) return move;
        if(!maps[x][y]) continue;
        maps[x][y] = 0;
        if(x+1 <= n && maps[x+1][y]) route.push([x+1,y,move+1]);
        if(x-1 >= 0 && maps[x-1][y]) route.push([x-1,y,move+1]);
        if(y+1 <= m && maps[x][y+1]) route.push([x,y+1,move+1]);
        if(y-1 >= 0 && maps[x][y-1]) route.push([x,y-1,move+1]);
    }
    return -1;  
}


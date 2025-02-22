function solution(tickets) {
    const graph = {}; 
    const path = [];
    
    for(let i = 0; i < tickets.length; i++){
        const [start, end] = tickets[i];
        graph[start] = (graph[start] || []);
        graph[start].push(end);
    }
    for (const key in graph) {
        graph[key].sort();
    }

    const dfs = (airport) => {
        while(graph[airport] && graph[airport].length){
            const next = graph[airport].shift();
            dfs(next);
        }
         path.push(airport);
    }
    
    dfs('ICN');
    return path.reverse();
}
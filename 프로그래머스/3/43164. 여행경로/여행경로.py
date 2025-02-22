from collections import defaultdict, deque
    
def solution(tickets):
    graph = defaultdict(deque)
    path = []
    
    for start, end in tickets:
        graph[start].append(end)
    
    for key in graph:
         graph[key] = deque(sorted(graph[key]))
    
    def dfs(airport):
        while graph[airport] and len(graph[airport]) > 0:
            next = graph[airport].popleft()
            dfs(next)
        path.append(airport)

    dfs('ICN')
    return path[::-1]
            
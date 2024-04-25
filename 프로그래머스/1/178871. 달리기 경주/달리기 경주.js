function solution(players, callings) {
   const mapping = {};
   players.forEach((player,i) => mapping[player] = i+1);
    
    callings.forEach(name => {
        const place = mapping[name];
        const front = players[place-2];
        players[place-1] = front;
        players[place-2] = name;
        mapping[name] -= 1;
        mapping[front] += 1;
    })
    return players;
}
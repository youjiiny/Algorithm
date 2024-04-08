function solution(n, words) {
    let failIdx = -1;
    for(let i=1;i<words.length;i++){
        const prev = words[i-1];
        const cur = words[i];
        if(prev[prev.length-1] !== cur[0]){
            failIdx = i;
            break;
        }
        if(words.indexOf(cur) !== i){
            failIdx = i;
            break;
        }
    }
    const person = failIdx%n+1;
    const turn = Math.floor(failIdx/n)+1;
    return failIdx ? [person,turn] : [0,0];
}
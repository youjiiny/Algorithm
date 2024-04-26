
function solution(k, score) {
    const good = [];
    const announceScore = [];
    
    score.forEach(s => {
        if(good.length < k){
            good.push(s);
            good.sort((a,b) => b-a);
        }
        else {
            if(s > good[good.length-1]){
              good.pop();
              good.push(s);
              good.sort((a,b)=>b-a)   
            }    
        }
        announceScore.push(good[good.length-1]);
    })
    return announceScore;
}
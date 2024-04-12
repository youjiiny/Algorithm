function solution(n) {
    const result= [];
    
    const hanoi = (n,start,end,rest) => {
        if(!n) return;
        hanoi(n-1,start,rest,end);
        result.push([start,end]);
        hanoi(n-1,rest,end,start);
    }
    hanoi(n,1,3,2);
    return result;
}
function solution(n, s) {
    if(!Math.floor(s / n)) return [-1];
    let list = [];
    
    while(s > 0) {
        const quote = Math.floor(s / n); 
        const rest = s % n; 
        if(!rest) {
            if(list.length) {
                 for(let i=0;i<n;i++){
                    list.push(quote);
                }
            }
            else list = new Array(n).fill(quote);
            break;
        }
        list.push(quote);
        s-=quote; 
        n-=1;
    }
    return list;
}
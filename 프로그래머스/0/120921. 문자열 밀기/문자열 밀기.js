function solution(A, B) {
    let cnt = 1;
    const len = A.length;
    
    if(A === B) return 0;
    while(cnt !== len){
        A =  A.slice(len-1) + A.slice(0,len-1);
        if(A === B) break;
        cnt++;
    }
    return cnt !== len ? cnt:-1;
}
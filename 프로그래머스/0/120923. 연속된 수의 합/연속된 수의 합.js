function solution(num, total) {
    const sum = num*(num+1) / 2;
    const seq = Array.from({length:num},(_,i)=> i+1);   
    if(sum == total) return seq;
    
    const diff = total - sum;
    const step = diff / num;
    return seq.map(n => n + step);   
}
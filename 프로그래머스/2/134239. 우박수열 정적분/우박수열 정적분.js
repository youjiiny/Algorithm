function solution(k, ranges) {
    let n = 0;
    const arr = [[n,k]];
    while(k !== 1){
        if(k % 2 == 0){
            k /= 2;
        }else {
            k = k*3 +1;
        }
        n+=1;
        arr.push([n,k])
    }
    const width = [];
    for(let i = 0;i<arr.length-1;i++){
        const next = arr[i+1];
        if(next){
            width.push((arr[i][1]+next[1])/2);
        }
    }
    const rangeSum = (arr,range) => {
        if(!range[0] && !range[1]) {
            return arr.reduce((acc,cur)=> acc+=cur,0);
        }
        let start = range[0];
        let end = range[1];
        end = arr.length + end;
        if(start > end) return -1;
    
         const sum = arr.slice(start, end).reduce((acc, curr) => acc + curr, 0);
         return sum;
    }
    return ranges.map((range)=> rangeSum(width,range));
}
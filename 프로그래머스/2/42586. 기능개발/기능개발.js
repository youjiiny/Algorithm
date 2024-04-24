function solution(progresses, speeds) {
    const days = progresses.map((p,i)=> Math.ceil((100-p) / speeds[i]));
    const result = [];
    let i = 0;
    
    while(days.length){
        const day = days.shift();
        while(day >= days[i]) i++;
        result.push(i+1);
        days.splice(0,i);
        i = 0;
    }
    return result;
}
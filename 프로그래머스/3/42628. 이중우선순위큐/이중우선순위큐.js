function solution(operations) {
    const queue = [];
    
    operations.forEach(op => {
        const[cmd,num] = op.split(' ');
        
        if(cmd === 'I'){
            queue.push(+num);
        }
        else if(queue.length){
            queue.sort((a,b)=>a-b);
            num == 1 ? queue.pop() : queue.shift();   
        }
        
    })
    queue.sort((a,b)=>a-b);
    return queue.length ? [queue[queue.length-1],queue[0]] : [0,0];
}
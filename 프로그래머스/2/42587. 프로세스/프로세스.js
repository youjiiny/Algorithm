function solution(priorities, location) {
    let order = 0;
    const queue = [];
    priorities = priorities.map((p,i) => [p,i]);
    
    while(priorities.length){
        const [process,index] = priorities.shift();
        if(priorities.some(p => p[0] > process)){
            priorities.push([process,index]);
        }
        else {
            order +=1;
            if(index == location) return order;
        }     
    }
}

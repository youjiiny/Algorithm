function solution(numbers, target) {
     const len = numbers.length;
     let cnt = 0;
     const queue = [[numbers[0],0],[(-1)*numbers[0],0]];
    
         while(queue.length){
               let [temp,idx] = queue.pop();
                idx+=1;
             if(idx < len){
                 queue.push([temp+numbers[idx],idx]);
                 queue.push([temp-numbers[idx],idx]);
             }
             else {
                 if(temp === target){ 
                     cnt+=1;
                 }
             }       
         }
         return cnt;
 
}
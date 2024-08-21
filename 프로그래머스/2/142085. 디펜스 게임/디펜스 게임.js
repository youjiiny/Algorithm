function solution(n, k, enemy) {
   let [left,right] = [0,enemy.length];
   let mid = Math.floor((left+right)/2);
    
   const isDefence = (mid) => {
       let chance = k;
       const sliced = enemy.slice(0,mid).sort((a,b)=>b-a);
       const curEnemy = sliced.reduce((acc,cur)=> {
          if(chance > 0){
              chance--;
              return acc;
          }
          return acc+cur;
       },0);
       if(n-curEnemy >= 0 && chance >= 0){
           return true;
       }
       return false;
   }
   
   while(left <= right){
       if(isDefence(mid)){
           left = mid +1;
       }else {
           right = mid-1;
       }
      mid = Math.floor((left+right)/2);
   }
   return mid;
}
function solution(people, limit) {
  let i = 0;
  let count = 0;
  people.sort((a,b)=>a-b)

  while(people.length){
      const person = people.pop();
      while(person + people[i] <= limit) {
          i+=1;
      }
      if(i){
          people.splice(i-1,1);
      }
      count +=1;
      i = 0;      
  }
    return count;  
}
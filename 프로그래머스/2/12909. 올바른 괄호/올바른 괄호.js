function solution(s){
  let sum = 0;
  const str = s.split('');
  for(let i =0;i<str.length;i++){
      if(str[i] === '(') sum +=1;
      else sum-=1;
      if(sum < 0) return false;
  }
  return sum  == 0 ? true:false;
}
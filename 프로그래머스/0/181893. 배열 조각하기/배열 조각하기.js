function solution(arr, query) {
  query.forEach((q,i)=> i % 2 == 0 ? arr = arr.slice(0,q+1):arr=arr.slice(q));
  return arr;
}
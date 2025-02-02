function solution(nums) {
    const set = new Set();
    nums.forEach((num) =>  set.add(num));
    
    return Math.min(set.size,nums.length / 2);
}
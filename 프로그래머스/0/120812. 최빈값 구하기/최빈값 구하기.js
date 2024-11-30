function solution(array) {
    if(array.length == 1) return array.pop();
    const obj = {};
    array.forEach(a => obj[a] = (obj[a] || 0) + 1);

    const sorted = Object.entries(obj).sort((a,b)=> b[1] - a[1]);
    const [num,max] = sorted[0];
    const cnt = sorted.filter(s => s[1] == max).length;
    return cnt >= 2 ? -1 : +num;
}
function solution(common) {
    const a1 = common[0];
    const n = common.length;
    let d,r;

    const isArithmeticSequence = (arr) => {
        const diff = arr[1] - arr[0];
          for (let i = 2; i < arr.length; i++) {
            if (arr[i] - arr[i - 1] !== diff) {
                return false;
            }
         }
        return true;
    };
    
    if(isArithmeticSequence(common)){
        d = common[1] - common[0];
        const next = a1+d*n;
        return next;
    }else {
        r = common[1] / common[0];
        const next = a1 * Math.pow(r,n);
        return next;
    }
}
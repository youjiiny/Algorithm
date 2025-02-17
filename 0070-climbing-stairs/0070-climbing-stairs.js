/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = new Array(n + 1).fill(-1);
    function dp(n){
        if(n <= 1){
            return 1;
        }
        if(memo[n] === -1){
            memo[n] = dp(n - 1) + dp(n - 2);
        }
        return memo[n];
    }
    return dp(n);
};
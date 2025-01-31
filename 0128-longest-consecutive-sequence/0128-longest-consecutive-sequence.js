var longestConsecutive = function(nums) {
    let longest = 0;
    const num_dict = {};
    let cnt, target;

    for(const num of nums){
        num_dict[num] = true;
    }
    for(const num in num_dict){
        if(!(num - 1 in num_dict)){
            cnt = 1;
            target = +num + 1;

            while(target in num_dict) {
                cnt += 1;
                target += 1;
            }
            longest = Math.max(longest, cnt);
        }
    }
    return longest;
};
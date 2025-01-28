var isValid = function(s) {
    const stack = [];
    const mapping = {'(':')','{':'}','[':']'};
    for(const str of s){
        if(str === '(' || str === '{' || str === '['){
            stack.push(mapping[str]);
        }
        else if(str.length && stack.at(-1) === str){
            stack.pop();
        }
        else return false;
    }
    return stack.length == 0;
};
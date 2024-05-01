function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    const visited = new Array(words.length).fill(0);
    let count;
   
    const isConvert = (word1,word2) => {
        let diff = 0;
        for(let i =0;i < word1.length;i++){
            if(diff > 1) return false;
            if(word1[i] !== word2[i]) {
                diff +=1;
            }
        }
        return diff == 1 ? true:false;
    }
    
    const dfs = (word,cnt) => {
        if(word === target) {
            count = Math.min(count,cnt);
            return;
        }
 
        for(let i=0;i<words.length;i++){
            if(visited[i]) continue;
            if(isConvert(word,words[i])){
                visited[i] = 1;
                count = cnt +1;
                dfs(words[i],cnt+1);
                visited[i] = 0;
            }
        }
    }
    dfs(begin,0);
    return count;
}
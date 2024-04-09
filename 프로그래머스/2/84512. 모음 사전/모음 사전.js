function solution(word) {
   const alphabet = ['A','E','I','O','U'];
   let cnt = 0;
   let go = true;
    
    const dfs = (str) => { 
        if(str.length > 5 || !go) return;
        if(str === word){
            go = false;
            return;
        }
        cnt+=1;
        for(let i=0;i<alphabet.length;i++){
            dfs(str+alphabet[i]);
        }
    }
    dfs('');
    return cnt;
}
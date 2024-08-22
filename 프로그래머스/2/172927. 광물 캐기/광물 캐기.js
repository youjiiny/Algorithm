function solution(picks, minerals) {
   let tiredness = 0;
   const group = [];
   const totalPicks = picks.reduce((acc,cur)=> acc+=cur,0);
   const maxMineral = totalPicks * 5;

   for(let i = 0; i< minerals.length;i+=5){
       let groupTotal = 0;
       let diamondCount = 0;
       let ironCount = 0;
       let stoneCount = 0;

       for(let j = 0; j < 5 && i+j < minerals.length;j++){
           if(i == maxMineral) break;
           const type = minerals[i+j];
           switch(type) {
               case "diamond":
                   groupTotal += 25;
                   diamondCount+=1;
                   break;
               case "iron":
                   groupTotal += 5;
                   ironCount += 1;
                   break;
               case "stone":
                   groupTotal += 1;
                   stoneCount += 1;
                   break;
           }
       }
       group.push({groupTotal,diamondCount,ironCount,stoneCount});
   }
   const sortedGroup = group.sort((a,b)=> b.groupTotal-a.groupTotal);
    
    for(let i =0; i < sortedGroup.length;i++){
        const {diamondCount,ironCount,stoneCount} = sortedGroup[i];
        if(picks[0] > 0){
            tiredness += diamondCount + ironCount + stoneCount;
            picks[0]--;
        }else if(picks[1] > 0){
            tiredness += 5 * diamondCount + ironCount + stoneCount;
            picks[1]--;
        }else if(picks[2] > 0){
            tiredness += 25 * diamondCount + 5 * ironCount + stoneCount;
        }
    }
    return tiredness;
}
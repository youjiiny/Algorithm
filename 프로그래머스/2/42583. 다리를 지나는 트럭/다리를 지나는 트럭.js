function solution(bridge_length, weight, truck_weights) {
    const queue = [[0,0]];
    let time = 0;
    let weightOnBridge = 0;
    
    while(queue.length){ 
        if(queue[0][1] == time){
            weightOnBridge-=queue.shift()[0];
        }
        //현재 무게에서 다음 무게와 함께 건너갈 수 있으면 추가해야함. 
        if(weightOnBridge + truck_weights[0] <= weight){
            weightOnBridge += truck_weights[0];
            queue.push([truck_weights.shift(),time+bridge_length]); 
        }
        else {
            if(queue[0]){
              time = queue[0][1]-1;
            }
           
        }
        time+=1;
    }
    return time;
}
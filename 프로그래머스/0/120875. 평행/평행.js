function solution(dots) {
    const [x1,y1] = dots[0];
    const [x2,y2] = dots[1];
    const [x3,y3] = dots[2];
    const [x4,y4] = dots[3];
    
    let line = [x2-x1,y2-y1];
    let line2 = [x4-x3,y4-y3];
    if(line[0]*line2[1] == line[1]*line2[0]) return 1;
   
    line = [x3-x1,y3-y1];
    line2 = [x4-x2,y4-y2];
    if(line[0]*line2[1] == line[1]*line2[0]) return 1;
    
    line = [x4-x1,y4-y1];
    line2 = [x3-x2,y3-y2];
    if(line[0]*line2[1] == line[1]*line2[0]) return 1;
    return 0;  
}
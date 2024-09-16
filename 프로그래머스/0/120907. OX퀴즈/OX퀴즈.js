function solution(quiz) {
    const regx = /[+|-]/;
    
    return quiz.map((q)=> {
       const [num1,op,num2,_,result] = q.split(' ');
       const cal = op === '+' ? Number(num1) + Number(num2) : Number(num1) - Number(num2);
        return cal === Number(result) ? 'O':'X'
    });
}
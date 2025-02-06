const solution = (name, yearning, photo) => {
    let answer = [];
    const scores = {};
    
    // 이름과 점수를 매핑
    name.forEach((n, i) => scores[n] = yearning[i]);
    
    // 각 사진별 점수 계산
    photo.forEach(p => {
        let sum = 0;
        p.forEach(person => {
            sum += scores[person] || 0;
        });
        answer.push(sum);
    });
    
    return answer;
};
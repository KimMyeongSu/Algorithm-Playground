function solution(answers) {
    // 수포자들의 찍기 패턴
    const pattern1 = [1, 2, 3, 4, 5];                              // 5개
    const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];                    // 8개
    const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];             // 10개
    
    // 각 수포자별 맞힌 개수 저장
    let score1 = 0;
    let score2 = 0;
    let score3 = 0;
    
    // 각 답안 비교
    for(let i = 0; i < answers.length; i++) {
        if(pattern1[i % 5] === answers[i]) score1++;
        if(pattern2[i % 8] === answers[i]) score2++;
        if(pattern3[i % 10] === answers[i]) score3++;
    }
    
    // 가장 높은 점수 찾기
    const max = Math.max(score1, score2, score3);
    
    // 가장 높은 점수를 가진 수포자 찾기
    const result = [];
    if(score1 === max) result.push(1);
    if(score2 === max) result.push(2);
    if(score3 === max) result.push(3);
    
    return result;
}
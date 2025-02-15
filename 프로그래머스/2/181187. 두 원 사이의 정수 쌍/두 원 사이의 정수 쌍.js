const solution = (r1, r2) => {
    let answer = 0;
    let [y1, y2] = [0, 0];  // 내부원, 외부원의 y좌표
    
    // x좌표 기준으로 가능한 y좌표의 개수 계산
    for(let i = 1; i <= r2; i++) {
        // y = √(r² - x²)
        y2 = Math.sqrt(r2**2 - i**2);
        y1 = Math.sqrt(r1**2 - i**2);
        
        if(isNaN(y1)) y1 = 0;
        
        // 해당 x좌표에서 가능한 정수 좌표의 개수
        answer += Math.floor(y2) - Math.ceil(y1) + 1;
    }
    
    return answer * 4;  // 4개의 사분면
};
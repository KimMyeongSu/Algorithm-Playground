const solution = (diffs, times, limit) => {
    const check = level => {
        let total = 0n;
        const limitBig = BigInt(limit);
        
        for(let i = 0; i < diffs.length && total <= limitBig; i++) {
            const diff = diffs[i];
            const time = BigInt(times[i]);
            const prevTime = i > 0 ? BigInt(times[i-1]) : 0n;
            
            if(diff <= level) {
                total += time;
                continue;
            }
            
            // 실패 횟수
            const fails = BigInt(diff - level);
            
            // 실패당 소요 시간
            const failTime = time + prevTime;
            
            // 총 실패 시간
            const totalFailTime = fails * failTime;
            
            // 최종 성공에 필요한 시간
            const successTime = time;
            
            // 이번 퍼즐의 총 소요 시간
            if(totalFailTime > limitBig) return false;
            total += totalFailTime;
            if(total > limitBig) return false;
            total += successTime;
            if(total > limitBig) return false;
        }
        
        return total <= limitBig;
    };
    
    // 이진 탐색
    let left = 1;
    let right = 1;
    
    // right 값을 먼저 찾기
    while(!check(right)) right *= 2;
    
    // 이진 탐색으로 최솟값 찾기
    while(left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if(check(mid)) right = mid;
        else left = mid + 1;
    }
    
    return left;
};
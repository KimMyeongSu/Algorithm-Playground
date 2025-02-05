const solution = (players, callings) => {
    // 선수 이름별 등수를 저장할 Map
    const rankMap = new Map(players.map((name, i) => [name, i]));
    
    // 추월 처리
    callings.forEach(called => {
        const curRank = rankMap.get(called);
        const front = players[curRank - 1];
        
        // 등수 swap
        [players[curRank - 1], players[curRank]] = [called, front];
        
        // Map 업데이트
        rankMap.set(called, curRank - 1);
        rankMap.set(front, curRank);
    });
    
    return players;
};
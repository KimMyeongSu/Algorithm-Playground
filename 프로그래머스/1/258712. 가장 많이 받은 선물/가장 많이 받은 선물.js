const solution = (friends, gifts) => {
    // 선물 기록을 저장할 2차원 배열 초기화
    const giftRecord = {};
    friends.forEach(friend => {
        giftRecord[friend] = {};
        friends.forEach(f => {
            giftRecord[friend][f] = 0;
        });
    });
    
    // 선물 기록 채우기
    gifts.forEach(gift => {
        const [giver, receiver] = gift.split(' ');
        giftRecord[giver][receiver]++;
    });
    
    // 선물 지수 계산
    const giftIndex = {};
    friends.forEach(friend => {
        let given = 0;
        let received = 0;
        
        friends.forEach(f => {
            given += giftRecord[friend][f];
            received += giftRecord[f][friend];
        });
        
        giftIndex[friend] = given - received;
    });
    
    // 다음 달 선물 받을 수 계산
    const nextMonthGifts = {};
    friends.forEach(friend => {
        nextMonthGifts[friend] = 0;
    });
    
    // 모든 친구 쌍에 대해 검사
    for(let i = 0; i < friends.length; i++) {
        for(let j = i + 1; j < friends.length; j++) {
            const friend1 = friends[i];
            const friend2 = friends[j];
            
            // 서로 주고받은 선물 수 확인
            const friend1ToFriend2 = giftRecord[friend1][friend2];
            const friend2ToFriend1 = giftRecord[friend2][friend1];
            
            if(friend1ToFriend2 !== friend2ToFriend1) {
                // 더 많이 준 사람이 선물을 받음
                if(friend1ToFriend2 > friend2ToFriend1) {
                    nextMonthGifts[friend1]++;
                } else {
                    nextMonthGifts[friend2]++;
                }
            } else {
                // 선물 지수 비교
                if(giftIndex[friend1] !== giftIndex[friend2]) {
                    if(giftIndex[friend1] > giftIndex[friend2]) {
                        nextMonthGifts[friend1]++;
                    } else {
                        nextMonthGifts[friend2]++;
                    }
                }
            }
        }
    }
    
    // 가장 많은 선물을 받는 수 반환
    return Math.max(...Object.values(nextMonthGifts));
}
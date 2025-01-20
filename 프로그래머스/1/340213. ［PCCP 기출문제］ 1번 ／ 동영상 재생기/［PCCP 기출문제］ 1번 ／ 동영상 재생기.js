const solution = (video_len, pos, op_start, op_end, commands) => {
    // 시간 문자열을 초 단위로 변환
    const toSeconds = time => {
        const [min, sec] = time.split(':').map(Number);
        return min * 60 + sec;
    };
    
    // 초 단위를 mm:ss 형식으로 변환
    const toTimeFormat = seconds => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    };
    
    // 시간값들을 초 단위로 변환
    const videoLength = toSeconds(video_len);
    const opStart = toSeconds(op_start);
    const opEnd = toSeconds(op_end);
    let currentPos = toSeconds(pos);
    
    // 명령어 실행
    commands.forEach(cmd => {
        // 먼저 오프닝 구간인지 확인하고 건너뛰기
        if (currentPos >= opStart && currentPos <= opEnd) {
            currentPos = opEnd;
        }
        
        // 이전/다음 10초 이동
        if (cmd === 'prev') {
            currentPos = currentPos < 10 ? 0 : currentPos - 10;
        } else {
            currentPos = currentPos + 10 > videoLength ? videoLength : currentPos + 10;
        }
        
        // 이동 후 다시 오프닝 구간 체크
        if (currentPos >= opStart && currentPos <= opEnd) {
            currentPos = opEnd;
        }
    });
    
    return toTimeFormat(currentPos);
};
function solution(info, n, m) {
    const dp = Array(info.length + 1).fill().map(() => Array(m).fill(-1));
    dp[0][0] = 0;
    
    for (let i = 0; i < info.length; i++) {
        for (let j = 0; j < m; j++) {
            if (dp[i][j] === -1) continue;
            
            const newA = dp[i][j] + info[i][0];
            if (newA < n && (dp[i + 1][j] === -1 || dp[i + 1][j] > newA)) {
                dp[i + 1][j] = newA;
            }
            
            const newB = j + info[i][1];
            if (newB < m && (dp[i + 1][newB] === -1 || dp[i + 1][newB] > dp[i][j])) {
                dp[i + 1][newB] = dp[i][j];
            }
        }
    }
    
    const valid = dp[info.length].filter(x => x !== -1);
    return valid.length ? Math.min(...valid) : -1;
}
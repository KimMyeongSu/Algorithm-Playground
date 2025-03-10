const solution = dice => {
    const n = dice.length, half = n / 2;
    
    const getCombinations = (arr, r) => {
        const result = [];
        const dfs = (start, current) => {
            if (current.length === r) {
                result.push([...current]);
                return;
            }
            for (let i = start; i < arr.length; i++) {
                current.push(arr[i]);
                dfs(i + 1, current);
                current.pop();
            }
        };
        dfs(0, []);
        return result;
    };
    
    const getScoreCounts = diceIndices => {
        let counts = {0: 1};
        for (const idx of diceIndices) {
            const newCounts = {};
            for (const [score, count] of Object.entries(counts)) {
                for (const face of dice[idx]) {
                    const newScore = Number(score) + face;
                    newCounts[newScore] = (newCounts[newScore] || 0) + count;
                }
            }
            counts = newCounts;
        }
        return counts;
    };
    
    const indices = [...Array(n)].map((_, i) => i);
    const combinations = getCombinations(indices, half);
    
    let maxWinRate = -1, bestChoice;
    
    for (const aIndices of combinations) {
        const bIndices = indices.filter(i => !aIndices.includes(i));
        
        const aScoreCounts = getScoreCounts(aIndices);
        const bScoreCounts = getScoreCounts(bIndices);
        
        let wins = 0, total = 0;
        
        for (const [aScore, aCount] of Object.entries(aScoreCounts)) {
            for (const [bScore, bCount] of Object.entries(bScoreCounts)) {
                const cases = aCount * bCount;
                total += cases;
                if (+aScore > +bScore) wins += cases;
            }
        }
        
        const winRate = wins / total;
        if (winRate > maxWinRate) {
            maxWinRate = winRate;
            bestChoice = aIndices.map(i => i + 1);
        }
    }
    
    return bestChoice.sort((a, b) => a - b);
};
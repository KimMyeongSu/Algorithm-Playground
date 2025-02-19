const solution = targets => {
    const sorted = targets.sort((a, b) => a[1] - b[1]);
    let count = 0;
    let last = -1;
    
    sorted.forEach(([s, e]) => {
        if (s > last) {
            count++;
            last = e - 0.1;
        }
    });
    
    return count;
}
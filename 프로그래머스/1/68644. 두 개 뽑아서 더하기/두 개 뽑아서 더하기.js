const solution = numbers => [...new Set(numbers.reduce((acc, cur, idx) => {
    numbers.slice(idx + 1).forEach(num => acc.push(cur + num));
    return acc;
}, []))].sort((a, b) => a - b);
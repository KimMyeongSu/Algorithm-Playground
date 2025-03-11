const solution = (n, q, ans) => {
  const codes = [];
  
  const gen = (cur = [], start = 1) => {
    if (cur.length === 5) 
      return q.every((attempt, i) => 
        attempt.filter(num => cur.includes(num)).length === ans[i]
      ) && codes.push([...cur]);
    
    if (n - start + 1 < 5 - cur.length) return;
    
    for (let i = start; i <= n; i++) {
      cur.push(i);
      gen(cur, i + 1);
      cur.pop();
    }
  };
  
  gen();
  return codes.length;
};
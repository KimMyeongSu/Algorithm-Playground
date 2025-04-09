const solution = maps => {
  let start, lever, exit;
  
  maps.forEach((row, i) => 
    [...row].forEach((cell, j) => {
      if (cell === 'S') start = [i, j];
      else if (cell === 'L') lever = [i, j];
      else if (cell === 'E') exit = [i, j];
    })
  );
  
  const startToLever = bfs(maps, start, lever);
  const leverToExit = bfs(maps, lever, exit);
  
  return startToLever === -1 || leverToExit === -1 ? -1 : startToLever + leverToExit;
};

const bfs = (maps, start, end) => {
  const dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];
  const [n, m] = [maps.length, maps[0].length];
  const visited = Array.from({length: n}, () => Array(m).fill(false));
  const queue = [[...start, 0]];
  visited[start[0]][start[1]] = true;
  
  while (queue.length) {
    const [x, y, dist] = queue.shift();
    
    if (x === end[0] && y === end[1]) return dist;
    
    dx.forEach((_, i) => {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] && maps[nx][ny] !== 'X') {
        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
      }
    });
  }
  
  return -1;
};
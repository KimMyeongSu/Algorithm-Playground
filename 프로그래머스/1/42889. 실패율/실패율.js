const solution = (N, stages) => {
  const challenger = stages.reduce((acc, stage) => {
    acc[stage] = (acc[stage] || 0) + 1;
    return acc;
  }, new Array(N + 2).fill(0));

  return [...Array(N)]
    .map((_, i) => [
      i + 1,
      challenger[i + 1] / 
      (stages.length - stages.filter(v => v <= i).length) || 0
    ])
    .sort(([, a], [, b]) => b - a)
    .map(([stage]) => stage);
};
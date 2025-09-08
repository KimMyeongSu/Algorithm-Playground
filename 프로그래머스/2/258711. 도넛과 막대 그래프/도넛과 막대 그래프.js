const solution = edges => {
    const inDegree = {}, outDegree = {};
    
    edges.forEach(([a, b]) => {
        outDegree[a] = (outDegree[a] || 0) + 1;
        inDegree[b] = (inDegree[b] || 0) + 1;
    });
    
    const vertices = [...new Set(edges.flat())];
    const created = vertices.find(v => !inDegree[v] && outDegree[v] >= 2);
    const total = outDegree[created];
    
    let eightCount = 0, stickCount = 0;
    
    vertices.forEach(v => {
        if (v !== created) {
            if (inDegree[v] >= 2 && outDegree[v] >= 2) eightCount++;
            else if (!outDegree[v]) stickCount++;
        }
    });
    
    return [created, total - stickCount - eightCount, stickCount, eightCount];
};
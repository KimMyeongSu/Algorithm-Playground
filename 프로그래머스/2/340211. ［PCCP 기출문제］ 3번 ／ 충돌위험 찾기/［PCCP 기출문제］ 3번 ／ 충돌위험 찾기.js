const solution = (points, routes) => {
    const robotPositions = {};
    
    routes.forEach((route, robotIdx) => {
        const startPointIdx = route[0] - 1;
        const [r, c] = points[startPointIdx];
        
        const posKey = `0,${r},${c}`;
        if (!robotPositions[posKey]) robotPositions[posKey] = [];
        robotPositions[posKey].push(robotIdx);
    });

    routes.forEach((route, robotIdx) => {
        let time = 0;
        
        for (let i = 0; i < route.length - 1; i++) {
            const [startR, startC] = points[route[i] - 1];
            const [endR, endC] = points[route[i + 1] - 1];
            
            let [currR, currC] = [startR, startC];
            
            while (currR !== endR || currC !== endC) {
                time++;
                
                if (currR < endR) currR++;
                else if (currR > endR) currR--;
                else if (currC < endC) currC++;
                else if (currC > endC) currC--;
                
                const posKey = `${time},${currR},${currC}`;
                if (!robotPositions[posKey]) robotPositions[posKey] = [];
                robotPositions[posKey].push(robotIdx);
            }
        }
    });
    let dangerCount = 0;
    
    Object.entries(robotPositions).forEach(([posKey, robots]) => {
        if (robots.length >= 2) {
            dangerCount++;
        }
    });
    
    return dangerCount;
}
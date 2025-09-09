const solution = (m, n, startX, startY, balls) =>
    balls.map(([targetX, targetY]) =>
        Math.min(...[
            [-targetX, targetY],
            [2 * m - targetX, targetY],
            [targetX, -targetY],
            [targetX, 2 * n - targetY]
        ].map(([refX, refY]) => {
            const dx = refX - startX, dy = refY - startY;
            const t = Math.abs(dx) > Math.abs(dy) ? (targetX - startX) / dx : (targetY - startY) / dy;
            return t > 0 && t < 1 && 
                   Math.abs(startX + t * dx - targetX) < 1e-9 && 
                   Math.abs(startY + t * dy - targetY) < 1e-9
                ? Infinity
                : dx ** 2 + dy ** 2;
        }))
    );
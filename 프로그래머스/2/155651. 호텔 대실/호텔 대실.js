const solution = book_time => {
    const timeToMinutes = timeStr => {
        const [h, m] = timeStr.split(':').map(Number);
        return h * 60 + m;
    };
    
    const times = book_time.flatMap(([start, end]) => [
        [timeToMinutes(start), 1],
        [timeToMinutes(end) + 10, -1]
    ]);
    
    times.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    
    let rooms = 0, maxRooms = 0;
    
    times.forEach(([_, change]) => {
        rooms += change;
        maxRooms = Math.max(maxRooms, rooms);
    });
    
    return maxRooms;
};
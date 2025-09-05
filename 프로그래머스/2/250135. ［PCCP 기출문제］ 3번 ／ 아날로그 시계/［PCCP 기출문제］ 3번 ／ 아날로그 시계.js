
const solution = (h1, m1, s1, h2, m2, s2) => {
    const startTime = h1 * 3600 + m1 * 60 + s1;
    const endTime = h2 * 3600 + m2 * 60 + s2;
    
    const countAlarmsUpTo = time => time < 0 ? 0 : 
        Math.floor(time * 59 / 3600) + 
        Math.floor(time * 719 / 43200) - 
        Math.floor(time / 43200);
    
    const isAlarmTime = time => {
        const minuteCheck = (time * 59) % 3600 === 0;
        const hourCheck = (time * 719) % 43200 === 0;
        return minuteCheck || hourCheck;
    };
    
    return countAlarmsUpTo(endTime) - countAlarmsUpTo(startTime) + (isAlarmTime(startTime) ? 1 : 0);
};
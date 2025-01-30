const solution = (bandage, health, attacks) => {
    const [t, x, y] = bandage;
    let curHealth = health;
    let combo = 0;
    let lastTime = 0;
    
    const heal = time => {
        const healTime = time - lastTime - 1;
        if (healTime > 0) {
            const fullCombo = Math.floor(healTime / t);
            const remainder = healTime % t;
            curHealth = Math.min(health, 
                curHealth + (healTime * x) + (fullCombo * y));
        }
    };
    
    for (const [time, damage] of attacks) {
        heal(time);
        curHealth -= damage;
        if (curHealth <= 0) return -1;
        lastTime = time;
    }
    
    heal(attacks[attacks.length - 1][0] + 1);
    
    return curHealth;
};
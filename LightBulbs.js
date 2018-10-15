function lightBulbs(N) {
    // create N lightbulbs and set them to off
    let lightbulbs = [];

    for (let i = 0; i < N; i++) {
        lightbulbs.push(false); 
    }
    
    // each person i labeled from 1 to N sets each kth 
    // lightbulb on or off where k = 2*i, 3*i, etc. 
    // Fori=1, change1,2,3,4,etc. Fori=2, change2,4,6,8,etc. Fori=3, change3,6,9,12,etc.
    for (let i = 1; i <= N; i++) {
        let w = 1;
        let k = w * i; 
        
        while (k <= N) {
            lightbulbs[k - 1] = !lightbulbs[k - 1]; 
            w += 1;
            k = w * i;
        } 
    }
    
    return lightbulbs; 
}

console.log(lightBulbs(34));
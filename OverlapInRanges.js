function overlapping(range1, range2) { 
    let overlap = [];
    // check whether each number within range 1
    // is within the numbers in range 2
    
    for (let i = range1[0]; i <= range1[1]; i++) {
        if (i >= range2[0] && i <= range2[1]) {
            overlap.push(i);
        } 
    }
    
    return overlap; 
}

console.log(overlapping([17, 20], [10, 18]));
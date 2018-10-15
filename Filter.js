function filter(arr, fn) { 
    let result = [];
    
    // pass the element to the function and check 
    // if the result comes back true
    for (let i of arr) {
        let check = fn(i);
        if (check) { result.push(i); } 
    }
    
    return result; 
}
// usage
let isPositive = (x) => x > 0;
console.log(filter([-2, 4, 5, 8, -44, -6], isPositive)); // => [4, 5, 8]
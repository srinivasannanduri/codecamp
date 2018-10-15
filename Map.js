function map(arr, fn) { 
    let result = [];
    
    // apply the function to each element and store the result
    for (let i of arr) { 
        let applied = fn(i); 
        result.push(applied);
    }
    return result; 
}

// usage

let square = (x) => x * x;
let addZeros = (x) => parseInt(x += '00');

map([1, 2, 3, 4], square); // => [1, 4, 9, 16]
map([1, 2, 3, 4], addZeros); // => [100, 200, 300, 400]
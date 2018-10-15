/**
 * Majority element: 
 * An element that appears strictly more than n/2 times where n is the size of the array. 
 */
function majorityElement(arr) { 
    let candidate = null;
    var count = 0;
    
    // 1. if candidate is null or count = 0 set candidate to the current element 
    // 2. if candidate matches current element we increase the count
    // 3. if candidate does not match current element, decrease the count by 1 
    for (let i = 0; i < arr.length; i++) {
        if (candidate === null || count === 0) { 
            candidate = arr[i];
            count = 1;
        } else if (arr[i] === candidate) { 
            count += 1;
        } else { 
            count -= 1;
        } 
    }

    // once we have to make sure
    count = 0;
    for (let el of arr) {
        // a majority element we check it occurs more than n/2 times
        if (el === candidate) { 
            count += 1;
        }
    }
    
    return (count > Math.floor(arr.length / 2)) ? candidate : null; 
}

console.log(majorityElement([1, 4, 5, 5, 6, 6]));
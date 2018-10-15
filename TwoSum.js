/**
 * You are given an array and some number S. 
 * Determine if any two numbers within the array sum to S. 
 * You are given an array and some number S. 
 * Determine if any two numbers within the array sum to S.
 */
function twoSum(arr, S) { 
    let hashTable = {};
    
    // check each element in array
    for (let i = 0; i < arr.length; i++) { 
        // calculate S - current element
        let sumMinusElement = S - arr[i];
        
        // check if this number exists in hash table
        if (hashTable[sumMinusElement] !== undefined) { return true; }
        
        // add the current number to the hash table
        hashTable[arr[i]] = true; 
    }
    
    return false; 
}

console.log(twoSum([1,2,3,4,5,6,7], 13));
console.log(twoSum([1,2,3,4,5,6,7], 23));


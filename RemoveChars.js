/**
 *  You are given an array of characters and a string S. 
 *  Write a function to return the string S with all the characters 
 *  from the array removed.
 */
function removeChars(arr, string) {
    // store characters of arr in a hash table
    var hashTable = {}; 
    for (let c of arr) {
        hashTable[c] = true; 
    }
    
    // loop through the string and check if the character exists in 
    // the hash table, if so, do not add it to the result string 
    let result = '';
    for (let c of string) {
        if (hashTable[c] === undefined) { 
            result += c;
        } 
    }
    
    return result; 
}

// usage
console.log(removeChars(['h', 'e', 'w', 'o'], "hello world")); // => "ll rld"
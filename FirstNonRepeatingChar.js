/**
 * You are given a string and you should return the first character 
 * that is unique in the entire string.
 */
function firstNonrepChar(string) { 
    let hashTable = {};
    
    // store each character in the hash table with 
    // the frequency of times it occurs
    for (let c of string) {
        if (hashTable[c] === undefined) { 
            hashTable[c] = 1;
        } else { 
            hashTable[c] += 1;
        } 
    }

    // loop through string and return the first character 
    // with a count of 1 in the hash table
    for (let c of string) {
        if (hashTable[c] === 1) { 
            return c;
        }
    }

    // return -1 if no unique character exists
    return -1; 
}

console.log(firstNonrepChar('Hello Henry'));
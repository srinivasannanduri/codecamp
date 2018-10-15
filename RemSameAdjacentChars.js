/**
 * Remove all matching adjacent pairs of letters from a string and return the modified string. 
 */
function removePairs(string) {
    // new string that will be returned
    let result = '';

    // loop through entire string
    for (let i = 0; i < string.length; i++) { 
        // if on last character
        if (i === string.length - 1) {
            result += string[i]; 
        }
        // characters are not equal then add to new string
        else if (string[i] !== string[i + 1]) { 
            result += string[i];
        }
        // if adjacent characters are equal to each other 
        // skip the next character entirely
        else {
            i += 1; 
        }
    }

    return result; 
}

console.log(removePairs("aaagykkok"));
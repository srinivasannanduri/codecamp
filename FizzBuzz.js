/**
 * Print out all the numbers from 1 to 100. 
 * But for every number divisible by 3, print the word “Fizz,” 
 * for any number divisible by 5 print the word “Buzz” and 
 * for a number divisible by both 3 and 5 print the word “FizzBuzz.”
 */

 function fizzbuzz(n) { 

    let result = [];
    for (let i = 1; i <=n; i++) {
        let add = '';
        
        // check if there is a remainder when dividing by 3, 
        // if yes, then we know this number is divisible by 3
        if (i % 3 === 0) { add += 'Fizz'; }
        
        // check if divisible by 5
        if (i % 5 === 0) { add += 'Buzz'; }
        
        // not divisible by either 3 or 5
        if (add === '') { result.push(i); } else { result.push(add); }
    }

    return result; 
}

console.log(fizzbuzz(20));
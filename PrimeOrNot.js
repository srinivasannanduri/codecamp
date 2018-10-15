/**
 * Idenity if a given number is prime or not
 * 
 * For a number to be a prime, it should have no divisors besides 1 and itself
 * For example, 2, 3, 5, 7, 11, 17, ...
 * 
 * But there is a tiny detail we can implement to make the algorithm run a bit faster. 
 * The detail is that if N is not a prime number, then there are two numbers when multipled 
 * give N: a * b = N. 
 * The detail is that one of the numbers, a or b, 
 * will always be less than the square root of N.
 * With this detail in mind, we don’t need to loop from 2 to N now, 
 * we can simply loop from 2 to the square root of N. 
 * The running time will therefore be O(√n).
 */

function isprime(n) {
    // all numbers less than 2 are not primes
    if (n < 2) { return false; } // loop from 2 to sqrt(n)
    
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
        // check if (n mod i) is equal to 0, 
        // if so then there are // two numbers, a and b, that can multiply to give n
        if (n % i === 0) { return false; }
    }
    
    return true; 
}

console.log(isprime(23));
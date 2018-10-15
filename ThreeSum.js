/**
 * You are given an array and some number S. 
 * Determine if any three numbers within the array sum to S.
 * 
 * First we sort the array into ascending order. 
 * We can use a built-in sort function which will run in O(nlogn).
 * Then we loop through each element in the array and for each of the 
 * elements we maintain two pointers (or indices), 
 * one from the (current position + 1) and the second pointer starting 
 * from the end of the array. Then we check to see if these 3 elements sum to S. 
 * One of 3 things will be true:
 * 1. If the current element plus the 2 other elements is greater than S, 
 * we decrease the pointer at the end of the array at 1.
 * 2. If the current element plus the other 2 elements is less than S, 
 * we increase the pointer at the beginning by 1.
 * 3. If the pointers end up meeting, then we know 
 * we cannot add 2 elements plus the current element to sum to S. 
 * We move on to the next element in the array and reset the pointers.
 * This algorithm needs to loop through every single element in the array, and for each element in the worst case we will loop 
 * through all the other elements until the pointers end up at the same point. 
 * This algorithm therefore runs in O(nlogn) + O(n2) which reduces to O(n2).
 */

function threeSum(arr, S) { 
    // sort the array
    
    var arr = arr.sort();
    
    // loop and check each element
    for (let i = 0; i < arr.length - 2; i++) {
        // start two pointers, one from the current position + 1 // and the other at the end of the array
        let ptr_start = i + 1;
        let ptr_end = arr.length - 1;
    
        // check all other elements
        while (ptr_start < ptr_end) {
            let add = arr[i] + arr[ptr_start] + arr[ptr_end];
            
            // if we find a sum
            if (add === S) { return true; } // if the sum is < S
            else if (add < S) { ptr_start += 1; } // otherwise the sum is > S
            else { ptr_end -= 1; } 
        }
    }
        
    return false; 
}

console.log(threeSum([1,3,3,4,5,6,8], 77));
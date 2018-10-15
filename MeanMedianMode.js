function meanMedianMode(arr) {
    // to calculcate the mean we add up all the numbers
    // and divide by the length
    let mean = arr.reduce((prev, cur) => prev + cur) / arr.length;
    // to calculcate the median we need to sort the array 
    // and return the middle element
    arr = arr.sort();
    console.log(arr);
    let median = arr[Math.floor(arr.length / 2)];
    // to get the mode we will store all the elements in a hash table 
    // and keep a count and also always maintain the largest count 
    let mode = undefined;
    let hashTable = {};
    for (let i of arr) {
        hashTable[i] === undefined ? hashTable[i] = 1 : hashTable[i] += 1; 
        if (mode === undefined || hashTable[i] > mode) {
            mode = i; 
        }
    }
    return { 'mean': mean, 'median': median, 'mode': mode };
}
console.log(meanMedianMode([23,34,5,3,4,2,6,3]));
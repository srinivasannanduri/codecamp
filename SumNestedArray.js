function nestedSum(arr) {
    let result = 0;

    var arrLen = arr.length;
    for (let i = 0; i < arrLen; i++) {
        if (typeof arr[i]  !== 'number') {
            result += nestedSum(arr[i]);
        } else {
            result += arr[i];
        }
    }

    return result;
}

console.log(nestedSum([1, 1, 1, [3, 4, [8]], [5]]));
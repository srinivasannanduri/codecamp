function SimpleAdd(arg) {
    var sum = 0;
    for (var i = 1; i <= arg; i++) {
        sum += i;
    }

    return sum;
}

console.log(SimpleAdd(3));
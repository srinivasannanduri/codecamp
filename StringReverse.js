function reverse(str) {

    var reversed = '';
    var strLen = str.length;
    for (var i = strLen; i > 0; i--) {
        reversed = reversed + str[i-1];
    }

    return reversed;
}

console.log(reverse('srinu'));
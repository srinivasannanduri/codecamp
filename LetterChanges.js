/**
 * Using the JavaScript language, have the function LetterChanges(str) 
 * take the str parameter being passed and modify it using the following algorithm. 
 * Replace every letter in the string with the letter following it in the alphabet 
 * (ie. c becomes d, z becomes a). 
 * Then capitalize every vowel in this new string (a, e, i, o, u) and 
 * finally return this modified string. 
 */
function LetterChanges(str) {
    var processed = '';
    var strLen = str.length;
    for (var i = 0; i < strLen; i++) {
        var nextL = nextLetter(str[i].charCodeAt());
        if (isVowel(nextL)) {
            nextL = nextL.toUpperCase();
        }

        processed = processed + nextL;
    }

    return processed;
}

function isVowel(x) {
    return /[aeiouAEIOU]/.test(x);
}

function nextLetter(charCode) {
    if ((charCode > 96 && charCode < 122) || (charCode > 64 && charCode < 90)) {
        return String.fromCharCode(++charCode);
    } else if (charCode == 90) {
        return 'A';
    } else if (charCode == 122) {
        return 'a'
    } else {
        return String.fromCharCode(charCode);
    }
}

console.log(LetterChanges("hello*3"));
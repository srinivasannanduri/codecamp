/**
 * You are given a string with the symbols ( and ) and you need to write 
 * a function that will determine if the parenthesis are correctly nested 
 * in the string which means every opening ( has a closing )
 **/
function matchingParens(string) {
    let counter = 0;
    for (let c of string) {
        if (c === '(') { counter += 1; } 
        if (c === ')') { counter -= 1; }
    }
    
    return (counter === 0) ? true : false; 
}

console.log(matchingParens("((()()))"));
console.log(matchingParens("()()())"));
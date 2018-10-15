function convert(string) { 
    // create empty object
    let obj = {};
    
    // split the string at each person
    const people = string.split(' '); 
    
    // loop through all people
    for (let p of people) {
        
        // split information for each person
        const info = p.split(',');
        // store this information in the user object
        let userObj = {
            'email': info[1] || null,
            'age': parseInt(info[2]) || null, 
            'occupation': info[3] || null
        };
        
        // store key-value in object of users now
        obj[info[0]] = userObj; 
    }
    
    return obj; 
}

// usage
let s = "Daniel,me@test.com,56,Coder John,,,Teacher Michael,mike@test.com,,"; 
let people = convert(s);
// testing
console.log(people['Daniel']['age']); // => 56 
console.log(people['Michael']['occupation']); // => null
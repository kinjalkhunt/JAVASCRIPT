
// 1. How to assign to existing variable names

var employe = {    // Object we want to destructure
    fname: 'kinjal',
    lname: 'Khunt',
    dob: '1990'
};

// Destructuring the object into our variables
var {fname, lname, dob } = employe;
console.log( fname, lname, dob);

// 2. How to assign new variable names
var employee = {    // Object we want to destructure
    firstname: 'aastha',
    lastname: 'Khunt',
    dateofbirth: '2011'
};

// Destructuring the object into variables with
// different names than the object variables
var { firstname: fn, lastname: ln, dateofbirth: dob } = employee;
console.log( fn, ln, dob);

// ...3. How to assign to a variable with default values

// Destructuring the object into variables without 
// assigning default values 
var { firstname, lastname, country } = employee;
console.log("Without setting default values")
console.log( firstname, lastname, country);

// Destructuring the object into variables by 
// assigning default values 
var { firstname = 'default firstname', 
      lastname = 'default lastname', 
      country = 'default country' } = employee;
console.log("\n After setting default values")
console.log( firstname, lastname, country);


// array destructor
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]

// spread operator


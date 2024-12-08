const prompt = require('prompt-sync')();

/*//program:21 W.A.P. to generate 0 – 10 using unary increment & decrement operator.

// Generate numbers from 0 to 10 using unary increment operator (++i)
console.log("Numbers from 0 to 10 using unary increment operator:");
for (let i = 0; i <= 10; ++i) {
    console.log(i);
}

// Generate numbers from 0 to 10 using unary decrement operator (--j)
console.log("\nNumbers from 0 to 10 using unary decrement operator:");
for (let j = 10; j >= 0; --j) {
    console.log(j);
}*/

//program:22..bitwise operator

// Define two variables
let a =128; // Binary: 0101
let b = 128; // Binary: 0011

// Bitwise AND (&) operation
let resultAnd = a & b;
console.log("Bitwise AND:", resultAnd); // Output: 1 (Binary: 0001)

// Bitwise OR (|) operation
let resultOr = a | b;
console.log("Bitwise OR:", resultOr); // Output: 7 (Binary: 0111)

// Bitwise XOR (^) operation
let resultXor = a ^ b;
console.log("Bitwise XOR:", resultXor); // Output: 6 (Binary: 0110)

// Bitwise NOT (~) operation (Unary)
let resultNotA = ~a;
console.log("Bitwise NOT for a:", resultNotA); // Output: -6 (Binary: 11111111111111111111111111111010)

let resultNotB = ~b;
console.log("Bitwise NOT for b:", resultNotB); // Output: -4 (Binary: 11111111111111111111111111111100)

// Bitwise left shift (<<) operation..leftshift a=5*2 karvaano...
let resultLeftShift = a << 2;
console.log("Bitwise left shift for a:", resultLeftShift); // Output: 10 (Binary: 1010)

// Bitwise right shift (>>) operation...rightshift a=5/2 karvanu...
let resultRightShift = a >> 1;
console.log("Bitwise right shift for a:", resultRightShift); // Output: 2 (Binary: 0010)*/

/*//program:23..write a program that will take a value of variable through keyboard and check if number is greaterthan 100 or not

// Prompt the user to enter a value through the keyboard
let inputValue = prompt("Enter a number:");

// Convert the input value to a number
let number = parseFloat(inputValue);

// Check if the number is greater than 100
if (number > 100) {
    console.log("The number entered is greater than 100.");
} else {
    console.log("The number entered is not greater than 100.");
}*/

/*// program:..check odd or even number

// Prompt the user to enter a number
let number = parseInt(prompt("Enter a number:"));

// Check if the number is even or odd
if (number % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}*/

//program:24..print Table

// Function to print the table of a given number 'n'
/*function printTable(n) {
    // `let n=parseInt(prompt(`enter value of ==>`))
    console.log("Table of " + n + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + (n * i));
    }
}

// Test the function with a number, e.g., 5
let n=parseInt(prompt(`enter value of ==>`))
printTable(n);*/

// program:25..print reverse number

/*function reverseNumber(num) {
    let reversed = 0;
    while (num > 0) {
        let lastDigit = num % 10;
        reversed = reversed * 10 + lastDigit;
        num = Math.floor(num / 10);
    }
    return reversed;
}

let num = parseInt(prompt(`enter digit of reverse number ==>`))
let reversedNum = reverseNumber(num);
console.log("Reversed number: " + reversedNum);

//program:26..to convert given into days years and weeks

    /*function convertDaysToYearsWeeksDays(numberOfDays) {
        const DAYS_IN_WEEK = 7;
        const DAYS_IN_YEAR = 365;
    
        // Calculate years
        let years = Math.floor(numberOfDays / DAYS_IN_YEAR);
    
        // Calculate weeks
        let weeks = Math.floor((numberOfDays % DAYS_IN_YEAR) / DAYS_IN_WEEK);
    
        // Calculate remaining days
        let days = (numberOfDays % DAYS_IN_YEAR) % DAYS_IN_WEEK;
    
        return {
            years: years,
            weeks: weeks,
            days: days
        };
    }
    
    // Example usage
    let numberOfDays = parseInt(prompt(`enter the days =>`));
    let result = conv``ertDaysToYearsWeeksDays(numberOfDays);
    console.log(`Years: ${result.years}, Weeks: ${result.weeks}, Days: ${result.days}`);*/

   // program:27..Find the maximum and minimum number from two numbers given by user.

   /*let num1 = parseInt(prompt(`enter the num1 ==>`));
   let num2 = parseInt(prompt(`enter the num2 ==>`));

   let max = Math.max(num1, num2);
   console.log(`The Maximum value is ==>`,max);

   let min = Math.min(num1, num2);
   console.log(`The Minimum value is ==>`,min);*/
   
//program:28..Find the maximum and minimum number from three number given by user.

/*function findMaxNumber(num1, num2, num3) {
        return Math.max(num1, num2, num3)
    
}
function findMinNumber(num1, num2, num3) {
    return Math.min(num1, num2, num3)

}
let num1 = parseInt(prompt(`Enter the num1 ==>`));
let num2 = parseInt(prompt(`Enter the num2 ==>`));
let num3 = parseInt(prompt(`Enter the num3 ==>`));
console.log(`max is`,findMaxNumber(num1,num2,num3));
console.log(`min is`,findMinNumber(num1,num2,num3));*/

// program:29..student marks and declair result

// Function to calculate the percentage
/*function calculatePercentage(subjects) {
    let totalMarks = 0;
    for (let i = 0; i < subjects.length; i++) {
        totalMarks += subjects[i];
    }
    return (totalMarks / (subjects.length * 100)) * 100;
}

// Function to determine the division
function determineDivision(percentage) {
    if (percentage > 70) {
        return "Distinction";
    } else if (percentage >= 60 && percentage <= 70) {
        return "First class";
    } else if (percentage >= 50 && percentage < 60) {
        return "Second class";
    } else if (percentage >= 40 && percentage < 50) {
        return "Third class";
    } else {
        return "Fail";
    }
}

// Taking input from the user
let subjects = [];
let n = parseInt(prompt(`enter the subject ==>`));

for (let i = 1; i <= n; i++) {
    let marks = parseInt(prompt("Enter marks for subject " + i + ":"));
    subjects.push(marks);
}

// Calculating percentage
let percentage = calculatePercentage(subjects);

// Determining division
let division = determineDivision(percentage);

// Displaying the result
console.log("Percentage:", percentage.toFixed(2) + "%");
console.log("Division:", division);*/

// program:30..number is prime or not

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // Number is not prime
            break; // Exiting the loop as we found a divisor
        }
    }
    
    return true; // Number is prime
}

// Example usage:
const num = parseInt(prompt(`enter the number ==>`))
if (isPrime(num)) {
    console.log(num + " is a prime number");
} else {
    console.log(num + " is not a prime number");
}

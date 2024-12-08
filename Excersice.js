// // program 1 ::->find current days and time
// function getCurrentDayAndTime() {
//     const now = new Date();

//     // Array of days to get the day name
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const dayName = days[now.getDay()];

//     // Formatting date and time
//     const date = now.toLocaleDateString(); // Default locale date format
//     const time = now.toLocaleTimeString(); // Default locale time format

//     // Display the result
//     const result = `Today is: ${dayName}\nCurrent time is: ${time}`;
//     console.log(result);
// }

// // Call the function to display the current day and time
// getCurrentDayAndTime();

//Program::->2 Write a JavaScript program to print the current window contents.

//Program ::->3 Write a JavaScript program to get the current date.  
// function currentDate(){
//     const now = new Date();

//     const date = now.getDate();

//     const mm = now.getMonth()+1;// getMonth() returns month index starting from 0


//     const yy = now.getFullYear();

//     // if(date < 10){
//     //     date = '0' + date;
//     // }
//     // if (mm < 10){
//     //     mm = '0' + mm;
//     // }

//     result1 = mm + ' /' + date + '/' + yy;
//      console.log(result1);

//      result2 = date + '/' + mm + '/' + yy;
//      console.log(result2);

//     // const result =  `Date is ::->${date}`;
//     // console.log(result);
// }
// currentDate();

//Program ::-> 4 Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
function findAreaOfTriangle(){
const a = 5;
const b = 6;
const c = 7;

const perimeter = (a + b + c)/2;

const area = Math.sqrt(perimeter *((perimeter - a) * (perimeter - b) * (perimeter - c)));

console.log(area);


}
findAreaOfTriangle();

// Program ::->5 Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  

// `function rotateStringRight(str){
//     let arr = str.split('');// Convert the string to an array to manipulate it easily


//     function rotate(){
//         const lastchar = arr.pop();// Remove the last character and insert it at the beginning

//         arr.unshift(lastchar);
//         console.log(arr.join(''));// Join the array back to a string and log it

//     }
//     setInterval(rotate, 1000);// Set an interval to rotate the string every 1 second (1000 milliseconds)

// }
// rotateStringRight('w3resource');// Call the function with the string 'w3resource'

// program ::-> 6 Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

function leapYear(year) {
        // Return true if the year is divisible by 4 but not divisible by 100 unless it's also divisible by 400
        return(year % 100 === 0)? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapYear(2025));//excepted output: true
console.log(leapYear(2000));//excepted output: true
console.log(leapYear(1700));//excepted output: false
console.log(leapYear(1800));//excepted output: false
console.log(leapYear(100));//excepted output: false

// New formula for calculating leap years:
// The year is evenly divisible by 4;
// If the year can be evenly divided by 100, it is NOT a leap year, unless;
// The year is also evenly divisible by 400: Then it is a leap year.
// 10 days were dropped in October 1582
// New rules for calculating Easter dates
//Divisibility by 100 Check:
// year % 100 === 0 checks if the year is divisible by 100. This helps us determine if the year is a century year (like 1700, 1800, 1900, 2000).
// Nested Condition (Ternary Operator):
// If year % 100 === 0 is true, the function then checks year % 400 === 0. This determines if the century year is also divisible by 400, which makes it a leap year.
// If year % 100 === 0 is false, meaning the year is not a century year, the function checks year % 4 === 0 to see if it is a leap year based on the standard rule for non-century years.

// // Program ::-> 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  


// function findSundays() {
//     const startYear = 2014;
//     const endYear = 2050;
//     const sundays = [];

//     for (let year = startYear; year <= endYear; year++) {
//         // Create a Date object for January 1st of the current year
//         const date = new Date(year, 0, 1); // Month is 0-indexed (0 is January)

//         // Check if the day is Sunday (0 is Sunday)
//         if (date.getDay() === 0) {
//             sundays.push(year);
//         }
//     }

//     return sundays;
// }

// const sundayYears = findSundays();
// console.log(`1st January is a Sunday in the following years between 2014 and 2050: \n\n${sundayYears.join(', ')}\n`);


// // Program ::-> 8 Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  

// function guessRandomNumber(){
//     let num = Math.ceil(Math.random() * 10);

//     console.log(num);

//     let guessnum = 5;

//     console.log(guessnum);

//     if(num == guessnum){
//         console.log("Goodwork");
//     }else{
//         console.log("not matched the number was guess");
//     }

// }
// guessRandomNumber()

// //Program ::-> 9 Write a JavaScript program to calculate the days left before Christmas.  
// // Get the current date
// today = new Date();

// // Create a Date object for Christmas of the current year
// var cmas = new Date(today.getFullYear(), 11, 25);

// // Check if the current date is after December 25th
// if (today.getMonth() == 11 && today.getDate() > 25) {
//     // If true, set Christmas for the next year
//     cmas.setFullYear(cmas.getFullYear() + 1);
// }  

// // Calculate the difference in days between today and Christmas
// var one_day = 1000 * 60 * 60 * 24;
// // This line calculates the number of milliseconds in one day:

// // 1000 milliseconds in a second
// // 60 seconds in a minute
// // 60 minutes in an hour
// // 24 hours in a day

// // Log the number of days left until Christmas to the console
// console.log(Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) +
//     " days left until Christmas!"); 
//     // cmas.getTime(): This gets the timestamp (in milliseconds) for Christmas.
//     // today.getTime(): This gets the timestamp (in milliseconds) for the current date and time.
//     // cmas.getTime() - today.getTime(): This calculates the difference in milliseconds between Christmas and today.

// //Program ::-> 10 Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  

// // Function to calculate multiplication and division of two numbers
// function calculateMultiplicationAndDivision(num1, num2) {
//     // Perform multiplication
//     var multiplication = num1 * num2;

//     // Perform division
//     var division = num1 / num2;

//     // Return the results as an object
//     return {
//         multiplication: multiplication,
//         division: division
//     };
// }

// // Example usage:
// var number1 = 10;
// var number2 = 5;

// var results = calculateMultiplicationAndDivision(number1, number2);

// console.log("Multiplication: " + results.multiplication); // Output: Multiplication: 50
// console.log("Division: " + results.division);             // Output: Division: 2

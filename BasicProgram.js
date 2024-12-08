const prompt = require('prompt-sync')();//this is library

/*//program:1st print hello world!

console.log("hello world !");*/

/*// program:3rd..integer variable declaration,intilization and display values of variable

let FirstVarA = parseInt(prompt(`enter first value A ==>`));
let SecondVarB = parseInt(prompt(`enter second value B ==>`));*/

/*// program:4th..float and double variables, declaration, initialization, printing of the values 

let FirstVarC = parseFloat(prompt(`enter first value C is  ==>`));
let SecondVarD = parseFloat(prompt(`enter second value D is ==>`));*/

/*//program:6th and 7th..to read three variables and find addition/multiplication of three variables

let FirstVarE = parseInt(prompt(`enter first value E ==>`));
let SecondVarF = parseInt(prompt(`enter second value F ==>`));
let ThirdVarG = parseInt(prompt(`enter third value G ==>`));
console.log(`the sum is ==>`, FirstVarE + SecondVarF + ThirdVarG,);
console.log(`the multiplication is ==>`, FirstVarE * SecondVarF * ThirdVarG,);*/

/*//program:8th..to find Sum & Average of 3 integer numbers.

let FirstVarH = parseInt(prompt(`enter first value H ==>`));
let SecondVarI = parseInt(prompt(`enter second value I ==>`));
let ThirdVarJ = parseInt(prompt(`enter third value J ==>`));
console.log(`the sum is ==>`, FirstVarH + SecondVarI + ThirdVarJ,);
console.log(`the Average is ==>`, FirstVarH / SecondVarI / ThirdVarJ,);*/

/*//program:9th..o find area of circle(PI*r2) and rectangle (l*b)

const PI = 3.14;
let Radius = prompt(`enter value of radius ==>`);
console.log(`a find area of circle ==>`,PI * Radius * Radius);*/

/*//rectangle

let Length = parseInt(prompt(`enter first value legnth ==>`));
let Breadth = parseInt(prompt(`enter first value breadth ==>`));
console.log(`a find area of rectangle ==>`, Length * Breadth);*/

/*// program:10th..to calculate simple interest (si=p*r*n/100)

const Principle=parseInt(prompt(`enter value of simple intrest=>`));
const Rate=parseInt(prompt(`enter value of rate=>`));
const Time=parseInt(prompt(`enter value of time=>`));
const SimpleInterest= (Principle * Rate * Time) / 100;
console.log("Simple Interest is: " + SimpleInterest);*/

/*// program:11th..to find perimeter of circle(2*PI*r) using symbolic constant (#define)

let perimeter;
const Pi = 3.14;
const RadiusR = parseFloat(prompt(`Enter the Radius of the Circle ==>`));

//calculate perimeter
perimeter = 2 * Pi * RadiusR;

console.log(`perimeter of the circle ==>`,perimeter);*/

/*//program:12th..to convert the given temperature in Fahrenheit to Celsius.(c=(5/9)(F-32)


let Fahrenheit = parseFloat(prompt(`enter temperature in Fahrenheit ==>`));

//conversion
console.log(`Temprature in celsius ==>`,(5.0/9.0)*(Fahrenheit - 32)); */

// program:13en..throw three digit number and obtain sum of first and last digit number

function sumOfFirstAndLastDigits(number) {
  // Extracting the first digit
  let firstDigit = parseInt(number.toString()[0]);

  // Extracting the last digit
  let lastDigit = parseInt(number.toString()[2]);

  // Calculating the sum of the first and last digits
  let sum = firstDigit + lastDigit;

  return sum;
}

// Example usage:
let number = 385;
let sum = sumOfFirstAndLastDigits(number);
console.log("Sum of the first and last digits:", sum);

//program:14en..throw five digit number and obtain sum of digits using modulo operater

/*const readline = require('readline');//import library radline

const rl = readline.createInterface({//in js program by sum of five digit num..so input stdin or stdout
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a five-digit number: ', (number) => {
  // Parse the input as an integer
  number = parseInt(number);

  // Initialize sum variable to store the sum of digits
  let sum = 0;

  // Calculate sum of digits
  while (number > 0) {
    // Extract the rightmost digit
    let digit = number % 10;
    
    // Add the digit to sum
    sum += digit;
    
    // Remove the rightmost digit
    number = Math.floor(number / 10);
  }

  // Output the sum
  console.log('Sum of digits:', sum);

  rl.close();
});*/

//program:15.. Write a program to interchange the value of two variables.

/*let a = 5;
let b = 10;

console.log("Before interchange:");
console.log("a =", a);
console.log("b =", b);

// Interchanging the values of a and b using a temporary variable
let temp = a;
a = b;
b = temp;

console.log("\n\nAfter interchange:");
console.log("a =", a);
console.log("b =", b);

//program:16..to calculate perimeter of rectangle(2l+2b). (Using Typedef)

// Define a rectangle object using an object literal
const rectangle = {
  length: 5,
  breadth: 3
};

// Function to calculate perimeter of rectangle
function calculatePerimeter(rect) {
  return 2 * (rect.length + rect.breadth);
}

// Calculate perimeter of the rectangle
const perimeter = calculatePerimeter(rectangle);

// Display the perimeter
console.log("Perimeter of the rectangle:", perimeter);

//progra:17..find out the Total Salary.Total Salary = BASIC+DA+HRA+RA Where DA= 40% of basic salary, HRA=20% of basic salary, RA=10% of basic salary.

function calculateTotalSalary(basicSalary) {
  // Calculating DA, HRA, RA
  let DA = 0.4 * basicSalary;
  let HRA = 0.2 * basicSalary;
  let RA = 0.1 * basicSalary;

  // Calculating Total Salary
  let totalSalary = basicSalary + DA + HRA + RA;

  return totalSalary;
}

// Taking input for basic salary
let basicSalary = parseFloat(prompt("Enter the Basic Salary: "));

// Calling the function to calculate total salary
let totalSalary = calculateTotalSalary(basicSalary);

// Displaying the Total Salary
console.log("Total Salary: ", totalSalary);*/

//program:18..program which reads diameter of a circle & calculate area & perimeter of the circle.


/*function calculateArea(diameter) {
  let radius = diameter / 2;
  let area = Math.PI * radius * radius;
  return area;
}

function calculatePerimeter(diameter) {
  let radius = diameter / 2;
  let perimeter = 2 * Math.PI * radius;
  return perimeter;
}

// Taking input for diameter
let diameter = parseFloat(prompt("Enter the diameter of the circle: "));

// Calculating area and perimeter
let area = calculateArea(diameter);
let perimeter = calculatePerimeter(diameter);

// Displaying the results
console.log("Area of the circle: ", area.toFixed(2));
console.log("Perimeter of the circle: ", perimeter.toFixed(2));*/

// program:19..check ASCII value

/*const readline = require('readline');//library import

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a character: ", function(ch) {
  // Get the ASCII value using charCodeAt()
  let asciiValue = ch.charCodeAt(0);
  console.log(`ASCII value of ${ch} is ${asciiValue}`);
  rl.close();
});*/

/*// program:20..which evaluates following algebraic equation: Y=6x2+3x+8, where x is an input value 


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the value of x: ", function(x) {
  x = parseFloat(x);
  const y = 6 * x * x + 3 * x + 8;
  console.log(`For x = ${x.toFixed(2)}, Y = ${y.toFixed(2)}`);
  rl.close();
});*/



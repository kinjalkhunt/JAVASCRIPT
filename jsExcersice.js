

// // program ::> 11  Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// // [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// // Expected Output :
// // 60°C is 140 °F
// // 45°F is 7.222222222222222°C

// function convertTemperature(celsius){
//     return celsius * 9 / 5 + 32;
// }
// function convertFerahanhit(ferhanhit){
//      return (ferhanhit - 32) * 5 / 9;
// }
// console.log(`celsius to ferhanhit conversion: ${convertTemperature(60)}\xb0f`); 
// console.log(`fahrenheit to celsius conversion: ${convertFerahanhit(45)}\xb0c`); 

// //Program ::->12 Write a JavaScript program to get the website URL (loading page).  

// // alert(document.URL);
// // console.log(`${document.URL}`);

// //Program ::> 13 JavaScript: Create a variable using a user-defined name

// var var_name = 'abcd'; //variable declare is in assaign a string

// var n = 120;//variable declare is in assign it the number

// this[var_name] = n;

// console.log(this[var_name]);

// // Program ::-> 14. Write a JavaScript exercise to get the filename extension.  


// // Using ES6 const to declare the variable filename and log the file extension
// let filename = "system.php";
// console.log(filename.split('.').pop());

// // Reassign the variable filename and log the file extension for the new value
// filename = "abc.js";
// console.log(filename.split('.').pop());

// // Program ::-> 15. Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.  

// // Define a function named difference that takes a parameter n
// function difference(n) {
//     // Check if n is less than or equal to 13
//     if (n <= 13) {
//         // If true, return the difference between 13 and n
//         return 13 - n;
//     } else {
//         // If false, return the double of the difference between n and 13
//         return (n - 13) * 2;
//     }
// }

// // Log the result of calling the difference function with the argument 32 to the console
// console.log(difference(32));

// // Log the result of calling the difference function with the argument 11 to the console
// console.log(difference(11)); 

// // Program ::-> 16 Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  

// function sumTriple(x, y){

//     if (x == y){//if true this condition
//         return 3 * (x + y);//return three times of sum..if both value are same 
//     }else{
//         return x + y;//else return gave sum of two values simply 
//     }
// }
// console.log(sumTriple(10 ,20));
// console.log(sumTriple(10,10));

// //Program ::->17 Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.

// function difference(n){
//     if(n>19){
//         return 3 * Math.abs(n-19)
//     }else{
//         return 19 - n;
//     }
// }
// console.log(difference(19));
// console.log(difference(12));
// console.log(difference(22));

// //Program ::->18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  
// function checkNumbers(a, b){
//     if(a == 50 || b == 50 || a+b == 50){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(checkNumbers(20, 30));//true
// console.log(checkNumbers(20, 20));//false
// console.log(checkNumbers(40, 10));//true
// console.log(checkNumbers(20, 10));//false
// console.log(checkNumbers(50, 50));//true


// program::->19 JavaScript: Check whether a given integer is within 20 of 100 or 400
function checkNumbers(n){
    
    if((Math.abs(100 - n)) || (Math.abs(400 - n))) {//aa program jovo ekvar
        
        return true;
      }
    }
console.log("is result",checkNumbers(90));
console.log("is result",checkNumbers(10));
console.log("is result",checkNumbers(85));
console.log("is result",checkNumbers(380));
console.log("is result",checkNumbers(400));

// program::-> 20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.  

function checkIntegerNumber(a, b) {
    if((a <= 0 && b >= 0) || (a >= 0 && b <= 0)){
        return console.log("it is positive");
    }else{
        return console.log("it is not positive");
    }

}
checkIntegerNumber(1, 2);
checkIntegerNumber(-2 , 3);

// 21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  
 // Define a function named string_check that takes a parameter str1
 function string_check(str1) {
    // Check if str1 is null, undefined, or starts with the substring 'Py'
    if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') {
      // If true, return str1
      return str1;
    }
    // If false, prepend 'Py' to str1 and return the result
    return "Py" + str1;
  }
  
  // Log the result of calling the string_check function with the argument "Python" to the console
  console.log(string_check("Python"));
  
  // Log the result of calling the string_check function with the argument "thon" to the console
  console.log(string_check("thon"));
  
  
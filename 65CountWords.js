// 65 WAP to read a string and count total number of words in as string.

/*function Wordslength(str){
    let arr = str.trim().split(/\s+/);
    return arr.length;
}
let str ="welcome to the amazing world";
console.log("word count is ==>",Wordslength(str));*/

// 66 WAP to read a string and count total number of Vowels in as string.

/*function countVowel(str){
    //find the count of vowels
    let count = str.match(/[aeiouAEIOU]/gi).length;
    return count;
}
// main drive
let str = "Hello I Am Kinjal"
console.log(":: to take a vowels ::");
let result = countVowel(str);
console.log(result);*/

// program ::> 67 WAP to read a string and replace a given character from string.
/*let string = "hii i am kinjal";
let replacechar = "i";
let replacementchar = "o";

let modifystring = string.replace(new RegExp(replacechar,`g`),replacementchar);
console.log("after Modifyed String ==>",modifystring);*/

// program ::> 68 WAP to read a string and print reverse of given string.

/*function reverseString(str){
    let strRev = [...str].reverse().join("");
    console.log(strRev);
}
// let str = "javaScript";
reverseString("javascript");*/

// program 69 ::> WAP to check given string is palindrome or not?
/*let checkPalindrome = (stringg) => {
    return stringg === stringg.split("").reverse().join("");
};
 
console.log("Is Palindrome? : " + checkPalindrome("noon"));
console.log("Is Palindrome?: " + checkPalindrome("apple"));*/

// program ::> 70 WAP to append two strings in to one string using string handling function and without it.
/*let str1 = "hello";
let str2 = "javaScript";

let str = str1.concat(str2);
console.log("after change the string ==>",str);*/

//program ::> 71 WAP to compare a two string to check whether they are equal or not?
 
/*let str1 ="hello javascript";
let str2 ="Hello Javascript";

if(str1 === str2){
    console.log("the string are equal");
}else{
    console.log("the strings are not equal");
}*/

// Program ::> 72 WAP to copy one string in to another string using string handling function and without it.
// without string handling function
/*let originalstr = "hello jemini";
let copiedstr = "";
// console.log("Enter string s1: ",s1);
for (let i = 0; i < originalstr.length; i++) {
        copiedstr += originalstr[i];
}
console.log("String s2: " , copiedstr);

// use string handling function

let resultcopystr = originalstr.slice();//using slice()to copy the string
 console.log("using string handling ==>",resultcopystr);*/

// program ::> 73 WAP to create simple function to print a **** line.

/*function linePrint(length){
    let line = ' ';
    for(let i = 0; i < length; i++){
        line += ' * ';
    }
    console.log("after print line ==>",line);
}
linePrint (5);*/

// program ::> 74 WAP to create a function for adding of two numbers
/*function addNumbers(num1, num2){
    return num1 + num2;
}
let result = addNumbers(5,8)
console.log("the result are two num sum is ==>",result);*/

// program ::> 75 WAP to create a function to print Fibonacci series.
 
/*function fibonacciSeries(numTerms) {
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    
    // Generating Fibonacci series
    for (let i = 2; i < numTerms; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    
    // Printing Fibonacci series
    console.log("Fibonacci series:");
    for (let i = 0; i < numTerms; i++) {
        console.log(fibonacci[i]);
    }
}
// Example usage: Printing Fibonacci series up to 10 terms
fibonacciSeries(10);*/

// program ::> 76 WAP to create a function to swap two variables value.
    /*function swapVariables(a,b){
        let temp = a;
        a = b;
        b = temp;

        return [a,b];

    }
    let x = 55;
    let y = 44;
    console.log("before swapping ::> x ==",x,",y ==",y);

    [x,y] = swapVariables(x,y);
    console.log("after swapping ==> x ==",x,", y ==",y);*/

    // program ::> 77 WAP to find area of triangle ,Rectangle and circle using user defined function.
    /*function triangle(base, height){
        return 0.55 * base * height;
    }
    function rectangle(length, width){
        return length * width;
    }
    function circle(radius){
        return Math.PI * radius * radius;
    }

    let trianglebase = 5;
    let triangleheight = 8;
    let rectanglelength = 6;
    let rectangleWidth = 4;
    let circleRadius = 3;

    console.log("area of triangle ::>", triangle(trianglebase,triangleheight));
    console.log("area of rectangle ::>",rectangle(rectanglelength, rectangleWidth));
    console.log("area of circle ::>",circle(circleRadius));*/

    // program ::> 78 WAP to find factorial of given number using recursion.
// Function to find factorial using recursion
/*function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Recursive case: factorial of n is n multiplied by factorial of (n - 1)
        return n * factorial(n - 1);
    }
}

// Example usage
const number = 5;
const result = factorial(number);
console.log("Factorial of", number, "is", result);*/

// program ::> 79WAP to print following serie X+X2/2!+X4/4!+X6/6+….+X

// Javascript program to get
// the sum of the series
 
    // Function to get
    // the series
    function Series(x , n) {
        var sum = 1, term = 1, fct = 1;
        var p = 1, multi = 1;
 
        // Computing sum of remaining
        // n-1 terms.
        for (let i = 1; i < n; i++) {
            fct = fct * multi * (multi + 1);
            p = p * x * x;
            term = (-1) * term;
            multi += 2;
            sum = sum + (term * p) / fct;
        }
        return sum;
    }
 
    // Driver Code
     
        var x = 9;
        var n = 10;
        console.log(Series(x,n).toFixed(4));

        //program ::> 80 WAP to find maximum elements from 1D array using user defined function.
 // Function to find the maximum element in an array
function findMax(arr) {
    let max = arr[0]; // Assume the first element as maximum
    
    // Iterate through the array to find the maximum element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max; // Return the maximum element
}

// Example usage
const array = [10, 3, 8, 20, 15, 5];
const maxElement = findMax(array);
console.log("Maximum element in the array:", maxElement);

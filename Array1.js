//  const prompt = require('prompt-sync')();//this is library

// program ::> 44 Write a program that will insert values in array and display values of array.

// var n = prompt(`how to get elements of array =>`);

console.log("Elements of array ==>");
let Array = [1,2,3,4,5];
// var Array = n.split(",");

for(let i = 0; i <Array.length; i++){
    console.log("Element at index " + [i] +":"+ Array[i]);
}

// program ::> 45 Write a program that will find sum all the elements of array.

let num = [10,20,30,40,50];//define Array
let sum = 0; //int variable to hold the sum
for (let i = 0; i < num.length; i++){

    sum += num[i];
}
console.log();
console.log(`before sums of variable ==>`,num);
console.log(`after sums of elements ==>`,sum);

// program ::> 46 Write a program that will find minimum and maximum element from the array.

let number = [10, 30, 50, 3, 2, 11];
let min = number[0];//intialize variable to hold the min and max value
let max = number[0];

for(let i = 0; i < num.length; i++){
    number[i]? min = number[i]: max = number[i];

}
console.log();
console.log(`minimum element is ==>`, min);
console.log(`maximum element is ==>`,max);

//program ::> 47 Write a program that will merge two arrays in third one.
 
let a1 = [1, 2, 3, 4, 5];
let a2 = [6, 7, 8, 9, 2];

let mergearray = [...a1, ...a2];//merge array using the spread operator
console.log();
console.log(`Merged Array ==>`,mergearray);

// program ::> 48 Write a program that will reverse the element of the array.
let arr = [1, 2, 3, 4, 5];

let a = arr.reverse();

console.log(`Reversed array ==>`,a);

// program ::> 49 Write a program that will take 10 numbers from user and then find out how many of them are
// positive and negative. Also find out how many of them are even and odd.

/*let positive = 0;
let negative = 0;
let even = 0;
let odd = 0;
let n = 10;
// let n = parseInt(prompt(`Enter number ==>` + (i + 1) + ":"));
for(let i = 1; i < n; i++){
    // let n = parseInt(prompt(`Enter number ==>` + (i + 1) + ":"));
    if(n > 0){
        positive++;
    }else if(n < 0){
        negative++;
    }

    if(n % 2 === 0){
        even++;
    }else{
        odd++;
    }

}
console.log(`positive number is ==>`,positive);
console.log(`negative number is ==>`,negative);
console.log(`even number is ==>`,even);
console.log(`odd number is ==>`,odd);*/

// program 50 ::> compute the sum of following:1 -2*2 +3*2 -4*2+...+50*2;
// Initialize variables
var sum1 = 0;
var sign = 1; // Starting with positive sign

// Loop through the series from 1 to 50 (inclusive)
for (var i = 1; i <= 50; i++) {
    // Calculate the term based on the current index (i)
    var term = i * sign;

    // Add the term to the sum
    sum1 += term;

    // Change the sign for the next term
    sign *= -1;
}

// Output the result
console.log("Sum of the series:", sum1);

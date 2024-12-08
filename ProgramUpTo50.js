

// Program ::> 51 W.A.P. to sort array of 10 elements in ascending order.
/*function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
var array = [5, 3, 9, 1, 7, 2, 8, 4, 6, 0];
console.log("Original array:", array);
console.log("Sorted array:", bubbleSort(array));*/

// program ::> 52 Write a Program which finds maximum out of 10 numbers and also finds 
// the number of times maximum is repeated

// Function to find maximum number and count its occurrences
/*function findMax() {
    let numbers = [];
    let max = -Infinity;
    let maxCount = 0;

    // Input 10 numbers
    for (let i = 0; i < 10; i++) {
        let number = parseFloat(prompt(`Enter number ${i + 1}:`));
        numbers.push(number);

        // Update max and maxCount if necessary
        (number > max) ? (max = number, maxCount = 1) : (number === max) && maxCount++;
    }

    // Output the maximum number and its count of occurrences
    console.log(`Maximum number: ${max}`);
    console.log(`Number of times maximum is repeated: ${maxCount}`);
}

// Call the function to find maximum and count occurrences
findMax();*/

//program ::> 53 WAP to print sum of any 10 numbers using 1D array.

/*// array to store the 10 numbers
var numbers = [];

// Function to calculate the sum of elements in the array
function calculateSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
var arr = [5, 10, 4, 6, 8, 9, 10, 30, 20];
var result = calculateSum(arr);
console.log("Sum of the numbers ==>",result);*/

// program ::> 54 to add corresponding element of two 1d array and store in third 1d array

/*var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];

var sum = arr1.map((element, index) => {
    return element + arr2[index];
});
console.log("add corresponding two array ==>",sum);*/


// program ::> 55 to multiply corresponding element of two 1d array and store in third 1d array

/*var array1 = [1,2,3,4,5];
var array2 = [6,7,8,9,10];

var mul = array1.map((element, index) => {
    return element * array2[index];
});
console.log("multiply two array is ==>",mul);*/

//program ::> 56 WAP to check given element is exist or not from 1D array of size 10.

/*function elementToCheckExist(ar1, element) {
    for (let i = 0; i < ar1.length; i++) {
        if (ar1[i] === element) {
            return true;
        }
    }
    return false;
}
let ar1 = [1, 2, 10, 30, 50, 60, 7, 5];
let ToCheckElement = 20;
let exist = elementToCheckExist(ar1, ToCheckElement);
console.log(`Element ${ToCheckElement} exist in the array ==>${exist}`);*/

// program ::> 57 WAP to delete a given element from 1D array of size 10.
/*function DeleteElement(array, delelement) {
    let index = array.indexOf(delelement); 
        if (index !== -1);{
        array.splice(index, 1);
        return true; //element delete successfully

    }
    return false;//element not found in the array
}

let array = [10, 2, 30, 50, 4, 20, 25, 60];
let  delelement = 4;
let deleted = DeleteElement(array, delelement);
if(deleted){
    console.log(`element ${delelement} deleted successfully `);
    
    console.log("array after deleted ::>",array);
}else{
     console.log(`element ${delelement} not found in array`);
}*/

// program ::> 58 WAP to insert an elements in 1D array at specified location.

/*function ElementInsert(array, element, index){

    if(index < 0 || index > array.length){
        console.log("invalid index!");
        return array;
    }
    for(let i = array.length; i > index; i--){
    array[i] = array[i - 1];
}
    array[index]=element;
    return array;
}
let array = [1, 2, 3, 4, 5];
let element = 8;
let index = 1;

console.log("original array ==>",array);
array = ElementInsert(array, element,index);
console.log("array after insertion ==>",array);*/

// program ::> 59 WAP to read and print 2D array of 3X3 elements

/*let a2d = [];
let row = 3;
let col = 3;
let count = 0;

// to intialize 2d array elements
for(let i = 0; i < row; i++){
    a2d[i]=[];
    let line =" ";
    for(let j = 0; j < col; j++){
        a2d[i][j] = count++;
        line = " ";
    }
}
// print eac row on a new line
for(let i = 0; i< row; i++){
    console.log(a2d[i].join(` `));
}
// console.log("3*3 array is ==>",a2d);*/

// program ::> 60 WAP to find maximum form given 2D array.
 
function getMax(array){
    return Math.max(...array.map(e => Array.isArray(e) ? getMax(e) : e));
  }
  
  var arr = [[1, 2, 3, 4],
             [2, 5, 10, 20],
             [3, 40, 30, 10],
            ];
   console.log(getMax(arr));
  
// length()..property returns the length (size) of an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log("length is =>",size);

 //toString()..convert an array to a string of (comma seprated)array values
 const Fruits = ["Banana","Orange","Apple","Mango"];
 let aa = Fruits.toString();
 console.log("tostring is of Array =>",aa);

//at()..method returns an indexed element from an array.method returns the same as [].
const fruit = ["Banana", "Orange", "Apple", "Mango"];
let f = fruits[2];
console.log("at method is =>",f);

// join().. method also joins all array elements into a string.
const a = ["banana","apple","mango","kiwi"];
let c = a.join("|");
console.log("join method is =>",c);

// push()...add last element of array

 function fu() {
     let arr = ['GfG', 'gfg', 'g4g'];
    //   pushing the element into the array
    arr.push('GeeksforGeeks');
    console.log(arr);    
}
fu();

//1.method of push A task of call back function without push method
  let a1 = [1, 2, 3];
  let b = [10, 20, 30];
 let c1 = [5, 6];

 const pushInArray = (Element, array) => {
    array[array.length] = Element;
};
console.log(a1);
// b = [b+","+a];
b = b.concat(a1)
console.log(b);
console.log(c1);

//2nd method of push Creating a JS object to add array into it 
var Obj = {              
    arrayOne: [1,2], 
    arrayTwo: [] 
};
  // Array to be inserted 
var arraynew = ['Geeks', 'for', 'Geeks']; 
  // Push an array to object 
Obj.arrayOne.push(arraynew);      
let alert = console.log(Obj.arrayOne);


//***pop()..method returns the value that was "popped out":
function poping() {
    // original array
    let arr = [34,324, 567,4];

    // poping the elements
    arr.pop();
    console.log(arr);

}
poping();

// shift()Method..remove a first element
 function shifting() {
    //  original array
       let array = ["gfg", "Geeks", 4, 5, "jkj"];
    //checking for condition in array
         let va = array.shift();
    // console.log(va);
         console.log(array);
     }
     shifting();

    // 2nd method of shift()...
     function func() {
        // Original array
        let array = [1,[2,3,4],5,6];
    
        // shift method on nested array
        let value = array[1].shift();
    
        console.log(value);
        console.log("Array after operation: "+ array);
    }
    func();

// unshift()...method adds a new element to an array (at the beginning), and "unshifts" older elements:
    
    function unshifting() {
        // Original array
        let array = ["GFG", "Geeks", "for", "Geeks"];
     
        // Checking for condition in array
        let value = array.unshift("GeeksforGeeks");
        console.log(value);
        console.log(array);
    }
    unshifting();        
    // // 2nd method...unshift
    // function func() {
    //     let arr = [23, 76, 19, 94];
    //     // Adding elements to the front of the array
    //     console.log(arr.unshift(28, 65));
    //     console.log(arr);
    // }
    // func();
    // // 3rd method...unshift()
    // function func() {
    //     let arr = [];
    //     console.log(arr.unshift(1));
    // }
    // func();

// Arraylength()..property provides an easy way to append a new element to an array:
const f1 = ["Banana", "Orange", "Apple", "Mango"];
f1[f1.length] = "Kiwi";
console.log(f1);

//concat()... method creates a new array by merging (concatenating) existing arrays:
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log("concat is =>",myChildren);

//copywithin()... method copies array elements to another position in an array:
const f2 = ["Banana", "Orange", "Apple", "Mango"];
f2.copyWithin(2, 0);
console.log("copywithin is =>",f2);

//splice()... method can be used to add new items to an array:
const f3 = ["Banana", "Orange", "Apple", "Mango"];
f3.splice(2, 0, "Lemon", "Kiwi");
console.log("splice is =>",f3);

// filter()..method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
const ages = [12, 34, 30, 16, 40];
const result = ages.filter(checkAges);


function checkAges(age){
    return age >= 18;

}
console.log(result);

// map()...creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newArr);

//method calls a function for each element in an array.
// The forEach() method is not executed for empty elements 
// let sum = 0;
// const num = [65, 44, 12, 4];
// num.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
// }
// console.log(num);







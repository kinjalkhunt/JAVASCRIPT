// ***** Math Method *******
 var a = 123.456789;
 console.log(Math.round(Math.random() * 1000)+1);


/*console.log(Math.ceil(a)); //given nearest highest number
console.log(Math.floor(a));//given nearest lowest number
 console.log(Math.round(a)); //given round figur number
console.log(Math.trunc(a));//is given remove decimal point and given by number

// Math.sign(x) returns if x is negative, null or positive:
let a1 = -6;
let a2 = 1;
let a3 = 6;
console.log(Math.sign(a1));
console.log(Math.sign(a2));
console.log(Math.sign(a3));

// math.pow()..returns the value of x to the power of y;
let x = 8;
let y = 2;
console.log(Math.pow(x,y));

// math.sqrt()returns the square root of x;
let z = 64;
console.log(Math.sqrt(z));

// Math.abs(x) returns the absolute (positive) value of x:
let p = -4.7;
console.log(Math.abs(p));

//   toPrecision()Method...
//  this method is formated specified number length and if the formatted number you require more digits than original number then decimals and nulls are also added to create the specifie length
  let num = 213.45689;
console.log(num.toPrecision(3));

// If no arguments are passed to the toPrecision() method then the formatted number will be exactly the same as the input number. 
let num1 = 213.45689;
console.log(num1.toPrecision(5));

// If the length of precision passed to the toPrecision() method is smaller than the original number then the number is rounded off to that precision. 
let num2 = 213.45689;
console.log(num1.toPrecision());

// If the length of precision passed to the toPrecision() method is greater than the original number then zeros are appended to the input number to meet the specified precision.
let num3=213.45689;
console.log(num3.toPrecision(12));
 
let num4 = 123;
console.log(num4.toPrecision(5));

// The toPrecision() method in TypeScript is used to return the string representation in exponential or fixed-point to the specified precision.
// Syntax: toPrecision( [ precision ] )

// tofix()..method

var A = 123.56789;
var B = 123.65478;
console.log(A.toFixed(1)); //to return n length after decimal point...output is 123.6 and its return roundup last
console.log(A.toPrecision(3)); //output is..124..to provide n total length and roundup also..+++++++
// tofix()..
let test=213.73145;
console.log(test.toFixed());

// other way of method use is this..

let aa=[[1,2,3],[4,5,6],[7,8,9]];
console.log(aa[2][2]);
console.log(aa);

let Math = [
    ["John Doe", 20, 60, "A"],
    ["Jane Doe", 10, 52, "B"],
    ["Petr Chess", 5, 24, "F"],
    ["Ling Jess", 28, 43, "A"],
    ["Ben Liard", 16, 51, "B"]
  ];
  
  Math.push(["Tom Right", 30, 32, "B"]);
  
  Math.unshift(["Alice George", 28, 62, "A"]);

  console.log(Math);
  MathScore[0].pop();
  console.log(Math);
  
// is this 2nd method by use foreach()...
  let MathScore = [
    ["John Doe", 20, 60, "A"],
    ["Jane Doe", 10, 52, "B"],
    ["Petr Chess", 5, 24, "F"],
    ["Ling Jess", 28, 43, "A"],
    ["Ben Liard", 16, 51, "B"]
  ];
  
  MathScore.forEach((score) => {
    let totalScore = score[1] + score[2];
    score.push(totalScore);
  });
  
  console.log(MathScore);
  */




const prompt = require('prompt-sync')();

//program: 31..Write a program to display odd number between 1 to 10 using continue and break statement.

/*let n = parseInt(prompt(`Enter the number ==>`))

for (let i = 0; i <= n; i++) {

    if (i % 2 === 0) {//check odd/ even statment if check even number that e.g if(i % 2 === 1)

        continue;
    }
    console.log(i);
}*/

//program: 32..Write a program to Find sum of 1 to 10 numbers using goto statement.

let num = parseInt(prompt("Enter The Value of Num WHich Sum You Needed !"));
let sum = 0;

while (true) {
    sum += num;
    num++;
    if (num <= 10) {
        continue;
    } else {
        break;
    }
}

console.log("Sum of numbers from 1 to 10 is: " + sum);


  

// program: 33..Make a calculator using switch-case pattern.
/*let operator = (prompt("Enter the operator (+ - * /) = "));
n1 = parseInt(prompt(`enter the value n1 ==>`));
n2 = parseInt(prompt(`enter the value n1 ==>`));

switch (operator) {
    case '+':
        result = n1 + n2;
        console.log(`addition is =>`, result);
        break;

    case '-':
        result = n1 - n2;
        console.log(`substration  is =>`, result);
        break;

    case '*':
        result = n1 * n2;
        console.log(`multiplication is =>`, result);
        break;

    case '/':
        if (n2 !== 0) {
            result = n1 / n2;
            console.log(`divided is =>`, result);

        } else {
            result = "Cannot divide by zero";
        }
        break;
    default:
        result = "Invalid operator";
}*/

//program:34..program that will print 1 to 10 numbers using for, do-while and while loop. 


/*// Using for loop
console.log("Using for loop:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Using do-while loop
console.log("\nUsing do-while loop:");
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 10);

// Using while loop
console.log("\nUsing while loop:");
let k = 1;
while (k <= 10) {
    console.log(k);
    k++;
}*/


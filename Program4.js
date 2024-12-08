//program::>40 Write a Program which Generate Fibonacci Series.

/*function Fibonacci(n) {
    let fiboSeries = [0, 1];

    for (let i = 2; i < n; i++) {
        let nextFibonacci = fiboSeries[i - 1] + fiboSeries[i - 2];
        fiboSeries.push(nextFibonacci);
    }

    return fiboSeries;
}

// Example usage:
const n = 10; // Generate Fibonacci series up to the 10th term
const fiboSeries = Fibonacci(n);
console.log("Fibonacci Series:", fiboSeries);*/

//program::>41..write program a factorial number

/*function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Example usage:
const num = 5; // Find factorial of 5
const result = factorial(num);
console.log(`Factorial of ${num} is:`, result);*/

//program ::> 42..Write a Program to find Prime Numbers from 1 to100.

/*function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimesInRange(start, end) {
    const primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

// Example usage:
const start = 1;
const end = 100;
const primeNumbers = findPrimesInRange(start, end);
console.log("Prime numbers between", start, "and", end, "are:", primeNumbers);*/

// program ::> 43 program by armstrong number

// function isArmstrong(num) {
//     const numStr = num.toString();
//     const numDigits = numStr.length;
//     let sum = 0;
//     for (let digit of numStr) {
//         sum += Math.pow(parseInt(digit), numDigits);
//     }
//     return sum === num;
// }

// function displayArmstrongSeries(start, end) {
//     const armstrongNumbers = [];
//     for (let i = start; i <= end; i++) {
//         if (isArmstrong(i)) {
//             armstrongNumbers.push(i);
//         }
//     }
//     return armstrongNumbers;
// }

// // Example usage:
// const start = 1;
// const end = 100000;
// const armstrongSeries = displayArmstrongSeries(start, end);
// console.log("Armstrong numbers between", start, "and", end, "are:", armstrongSeries);
function drawHeart() {
    let n = 6;

    // Upper part of the heart
    for (let i = n / 2; i <= n; i += 2) {
        // Print spaces
        let spaces = '  '.repeat(n - i);
        process.stdout.write(spaces);
        
        // Print first part of the heart
        process.stdout.write(' * '.repeat(i));
        
        // Print spaces between the two parts of the heart
        spaces = '  '.repeat(n - i);
        process.stdout.write(spaces);
        
        // Print second part of the heart
        process.stdout.write(' * '.repeat(i));
        
        console.log();
    }

    // Lower part of the heart
    for (let i = n; i >= 1; i--) {
        // Print spaces
        let spaces = '  '.repeat(i < n ? n - i : 0);
        process.stdout.write(spaces);
        
        // Print the lower part of the heart
        process.stdout.write(' * '.repeat((i * 2) - 1));
        
        console.log();
    }
}

drawHeart();


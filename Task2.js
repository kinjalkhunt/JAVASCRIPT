    function isArmstrong(num) {
        const numStr = num.toString();
        const numDigit = numStr.length;
        return numStr.split('').reduce((sum, digit) => sum + Math.pow(parseInt(digit), numDigit), 0) === num;
    }
    
    function printArmstrongInFibonacci(limit) {
        let [a, b] = [0, 1];
        console.log(`Armstrong numbers in Fibonacci series up to ${limit}:`);
        while (a <= limit) {
            if (isArmstrong(a)) console.log(a);
            [a, b] = [b, a + b];
        }
    }
    // Call the function with the desired limit
    printArmstrongInFibonacci(100000);
    
    
    
    
    


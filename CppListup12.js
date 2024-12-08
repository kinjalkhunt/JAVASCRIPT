//Program ::-> 12 WAP to convert inches into feet.(1 feet = 12 inch)

function inchesToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const inches = 24;
const feet = inchesToFeet(inches);
console.log(`${inches} inches is equal to ${feet} feet ==>`);
console.log();

// Program ::-> 13 Function to find the square root of a number

function findSquareRoot(number) {
    if (number < 0) {
        return 'Square root of a negative number is not a real number.';
    }
    const squareRoot = Math.sqrt(number);
    return squareRoot;
}

// Example usage
const number = 25; // You can change this value to test with different inputs
const result = findSquareRoot(number);
console.log(`The square root of ${number} is ${result}.`);

// program ::-> 14  Function to convert binary number to decimal

function binaryToDecimal(binary) {
    const decimal = parseInt(binary, 2);
    return decimal;
}

// Example usage
const binaryNumber = "1101"; // You can change this value to test with different inputs
const decimalNumber = binaryToDecimal(binaryNumber);
console.log(`The decimal equivalent of binary number ${binaryNumber} is ${decimalNumber}.`);

// program ::-> 15 WAP to convert days into years weeks and days
function convertDays(days){
    const daysInYear = 365;
    const daysInWeek = 7;

    // calculate number of years
    const years = Math.floor(days / daysInYear);
    const remainingDays = days % daysInYear;

    // calculate number of weeks from remaining days
    const weeks = Math.floor(remainingDays / daysInWeek);
    const remainingDay = remainingDays % daysInWeek;

    return {years,weeks,days: remainingDay};
}
const days = 400;
const{years, weeks, days:remainingDay}= convertDays(days);
console.log(`${(days)}  days is equal to   ${(years)}   years,  ${(weeks)}  weeks, and  ${(remainingDay)} days ==>`);

//program::> 16 Enter three subject, marks and find out total percentage or average. output should display like this,
// English = 87,
// Hindi = 78,
// SS = 90
// Total = 255
// Percentage = 85%
// use single cout statement.

let student ={
    name: "aastha",
    age: 20,
    marks:{English : 0, guj : 0,ss : 0,hindi : 0,math : 0},

    displayInfo(){
        console.log(`Name : ${this.name}\nAge : ${this.age}\nMarks: ${JSON.stringify(this.marks)}`);

    },
    updateMarks(English, guj, ss, hindi,math){
            Object.assign(this.marks,{English,guj,ss,hindi,math })
    },
    calculateTotal(){
        return Object.values(this.marks).reduce((sum,mark)=> sum + mark,0)
    },
    calculateAverage(){
        return this.calculateTotal()/3;
    },
    calculatePercentage(){
            return(this.calculateTotal()/500)*100;
    }

};
student.updateMarks(80, 78,90,86,78)
student.displayInfo();
console.log(`Total marks: ${student.calculateTotal()}`);
console.log(`Average Marks: ${student.calculateAverage().toFixed(2)}`);
console.log(`percentage : ${student.calculatePercentage().toFixed(2)}`);
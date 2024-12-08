const prompt = require('prompt-sync')();

// program:35..pattern

/*let n,i,j;
let line = ""

n = parseInt(prompt(`enter the value ==>`));

for(i = 0; i <= n; i++){
    let row =" "
    for(j = 0; j <=n; j++){

        row += "* ";
    }
    console.log(row);
}*/
//pattern 2..// Define the number of rows in the pattern

/*let num = parseInt(prompt(`enter the value ==>`))

// Loop through each row
for (let i = 0; i < num; i++) {
    let line =" "
    // Loop through each column in the row
    for (let j = 0; j <= i; j++) {

            line += (i + j)% 2 + " ";
        }
        console.log(line);
  }*/

// pattern: 3..triangle

/*let n = parseInt(prompt(`Enter the  value ==>`));

for(let i = 1; i <= n; i++ ){
     
    let line = "";

     for (let j = n; j >= 1; j--){

        if(i >= j){
            line += i;

        }

            line += " ";
     }
     console.log(line);
}*/

/*// pattern..4.

let num = 1;
let result = "";

let n = parseInt(prompt(`Enter the value ==>`));

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= i; j++) {

        result += num + " ";
        num++;
    }
    result += "\n";
}
console.log(result);*/

// pattern : 5..wrong code is this.............
let n = parseInt(prompt(`enter the value ==>`));

let px = n;
let py = n;

for (i = 0; i >= n; i++) {
    let line = ""
    for (j = 0; j < n * 2; i++) {

        if(j == px || j == py){
        line += "*";
    }
        else{
        line += " "
        }
    
}
px--;
py++;
console.log(line);
}
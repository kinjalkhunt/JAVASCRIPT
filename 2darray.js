// // Creating a 2D array with 3 rows and 3 columns, initialized with zeros
// let grid = [];
// const rows = 3;
// const cols = 3;

// for (let i = 0; i < rows; i++) {
//     grid[i] = []; // Initialize each row as an empty array
//     for (let j = 0; j < cols; j++) {
//         grid[i][j] = 0; // Initialize each cell with zero
//     }
// }

// // Accessing and modifying elements in the 2D array
// grid[0][0] = 1; // Modify the element at row 0, column 0
// let element = grid[1][2]; // Access the element at row 1, column 2

// // Printing the 2D array
// console.log(grid);
// Creating a 2D array (matrix)
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// // Accessing elements
// console.log(matrix[0][0]); // Output: 1 (first element in the first row)
// console.log(matrix[1][2]); // Output: 6 (third element in the second row)

// // Modifying elements
// matrix[2][1] = 10;
// console.log(matrix); // Output: [[1, 2, 3], [4, 5, 6], [7, 10, 9]]

// // Iterating over the matrix
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//     }
// }

// // Adding a new row
// matrix.push([11, 12, 13]);
// console.log(matrix); // Output: [[1, 2, 3], [4, 5, 6], [7, 10, 9], [11, 12, 13]]


// Creating a 2D array (matrix)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Printing elements step by step
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log("Element at position [" + i + "][" + j + "]: " + matrix[i][j]);
    }
}

// Modifying elements step by step
matrix[2][1] = 10;
console.log("Matrix after modifying element at position [2][1]: ");
console.log(matrix);

// Adding a new row step by step
matrix.push([11, 12, 13]);
console.log("Matrix after adding a new row: ");
console.log(matrix);

// const prompt = require('prompt-sync')();//this is library

function isValidSudoku(board) {
    // Arrays to keep track of numbers seen in rows, columns, and grids
    let rowSet = new Array(9).fill(null).map(() => new Array(10).fill(false)); // For rows
    let colSet = new Array(9).fill(null).map(() => new Array(10).fill(false)); // For columns
    let gridSet = new Array(9).fill(null).map(() => new Array(10).fill(false)); // For 3x3 grids

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            if (num !== 0) {
                // Check if the number is already seen in the row, column, or grid
                if (rowSet[i][num] || colSet[j][num] || gridSet[Math.floor(i / 3) * 3 + Math.floor(j / 3)][num]) {
                    return false; // If seen before, Sudoku is invalid
                }
                // Mark the number as seen in respective row, column, and grid
                rowSet[i][num] = true;
                colSet[j][num] = true;
                gridSet[Math.floor(i / 3) * 3 + Math.floor(j / 3)][num] = true;
            }
        }
    }
    return true; // If all checks passed, Sudoku is valid
}

// Example usage
let SBoard = [
    ["7", "9", "2", "1", "5", "4", "3", "8", "6"],
    ["6", "4", "3", "8", "2", "7", "1", "5", "9"],
    ["8", "5", "1", "3", "9", "6", "7", "2", "4"],
    ["2", "6", "5", "9", "7", "3", "8", "4", "1"],
    ["4", "8", "9", "5", "6", "1", "2", "7", "3"],
    ["3", "1", "7", "4", "8", "2", "9", "6", "5"],
    ["1", "3", "6", "7", "4", "8", "5", "9", "2"],
    ["9", "7", "4", "2", "1", "5", "6", "3", "8"],
    ["5"," 2", "8", "6", "3", "9", "4 ","1", "7"]];


if (isValidSudoku(SBoard)) {
    console.log("The Sudoku puzzle is valid.");
} else {
    console.log("The Sudoku puzzle is not valid.");
}

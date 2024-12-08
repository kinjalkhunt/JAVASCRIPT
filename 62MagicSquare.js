// 62 Write a Program to check given matrix is magic square or not
function isMagicSquare(mat){
    let n = mat.length;

    let sumd1 = 0;
    let sumd2 = 0;
    // sumd1 and sumd2 are sum of two diagonals
    for(let i = 0; i < n; i++){
        // (i, i) is the diagonal from top-left -> bottom-right
        // (i, n - i - 1) is the diagonal from top-right -> bottom-left
        sumd1 += mat[i][i];
        sumd2 += mat[i][n-1-i];

    }
    // if check two digonals are not to equal a magic square
    if(sumd1 != sumd2)
        return false;

        for(let i = 0; i < n; i++){
            let colsum = 0;
            let rowsum = 0;
            for(let j = 0; j < n; j++){
                rowsum += mat[i][j];
                colsum += mat[j][i]; 

            }
            if(rowsum != colsum || colsum != sumd1)
            return false;
        }
        return true;
    }

let mat =   [[2, 7, 6],
              [9, 5, 1],
              [4, 3, 8]
            ];

            if(isMagicSquare(mat))
            console.log("Magic square");
        else
            console.log("not a Magic Square");

let a = [[1,2],[3,4]];
let b = [[2,3],[5,6]];
let c = [[],[]];

for(let i = 0; i < a.length; i++){
    for(let j = 0; j < b.length; j++){
        c[i][j] = a[i][j] + b[i][j];
    }
}
console.log("after adding ==>",c);

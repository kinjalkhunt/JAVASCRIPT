// program ::> 64 WAP to read a string and find length of string using string handling function and without it.
// use length()
let str = "hello javaScript";
// console.log(str.length);

// withoutusing length()
function Findlength(str){
    let count = 0;
    for(let i of str){
        count+=1;
    }
    return count;
}
console.log(Findlength(str));

// length() Method in String
let text = "Hey I Am Kinjal";
let b = text.length;
console.log("length is =>",b);

// charAt()
let charAt = text.charAt(2);
console.log("CharAt is ==>",charAt);

// charCodeAt()
let charCodeAt = text.charCodeAt(3);
console.log("charCodeAt ==>",charCodeAt);

// at()...
let at = text.at(-2);
let att = text[2];//this is string[]..Method this is similar of at()method
console.log("at ==>",at);
console.log("at ==>",att);

//slice(slice, end)...divided a string 
let txt = "Apple, Banana, Kiwi";
let part = txt.slice(7,13);
let a = txt.slice(7)
console.log("slice is ==>",part); //output..banana
console.log("slice is =>",a);

//substring(starts,end) ...substring() is similar to slice()
let aa = txt.substring(7,13);
console.log("substring is =>",aa);

// substr(starts,length)..
let bb = txt.substr(7);
console.log("substr is =>",bb);

// touppercase()..
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log("touppercase is =>",text2);

// tolowercase()..
let text3 = "Hello World!";
let text4 = text1.toLowerCase();
console.log("tolowercase is =>",text4);

// concat()..
aa1 = "Hello" + " " + "World!";
aa2 = "Hello".concat(" ", "World!");
console.log();

// trim()..removes method whitespace from both sides of a string
let t1 = "      Hello World!      ";
let t2 = text1.trim();
console.log("trim is =>",t2);

// trimstart()
let a1 = "     Hello World!     ";
let a2 = text1.trimStart();
console.log("trimstart is =>",a2);
// trimEnd()
let b1 = "     Hello World!     ";
let b2 = text1.trimEnd();
console.log("trimend is =>",b2);

// repeat()..method returns a string with a number of copies of a string.
let c1 = "Hello world!";
let result = text.repeat(2);
console.log("result is =>",result);

// replace()..method replaces a specified value with another value in a string:

let t = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log("replace is =>",t);

// To replace case insensitive, use a regular expression with an /i flag (insensitive):

let p = "Please visit Microsoft!";
let newt = text.replace(/MICROSOFT/i, "W3Schools");
console.log("replace as regex..=>",newt);

// typeof()..this is gives a type of data..
let ktext = "hello javascript..";
let type = typeof ktext;
console.log("typeof is =>",type);//output is string
let tex = [1,2,3,4];
console.log("typeof is =>",typeof tex);

// indexof()
let ab = "hey how are you?"
let bc = ab.indexOf(17);//if include in string then answer is right or not true then answer give us -1 but gives no error 
console.log("index of is =>",bc);

// match()
let aaa = "hello how r hello u";
let bbb = aaa.match("hello");
console.log(bbb);

// split()A string can be converted to an array with the split() method:
let abc = "a, b ,c, d, e, f";
let mystr = abc.split(",")
console.log("split is =>",mystr);



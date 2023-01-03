/*EXAMPLW NO 1  The concat() method concatenates given arguments to the given string.
concat(v1, v2,..)  */ 
var v1 =" what "
var v2 = v1.concat("is ","your name?")
alert(v2);
//OUTPUT  what is your name?



/*  EXAMPLW NO 2 
Using concat() method    */ 
console.log("".concat({})); // [object Object]
console.log("".concat(null)); // null
console.log("".concat(true)); // true
console.log("1".concat(4, 5)); // 145



/*  EXAMPLW NO 3
Using concat() method  concatenating two strings    */ 
let string1 = "Hello";
let string2 = "World";
let newString = string1.concat(", ", string2, "!");
console.log(newString); // Hello, World!




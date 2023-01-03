/*EXAMPLE NO 1
In JavaScript, strings are created by surrounding them with quotes. There are three ways you can use quotes.
Single quotes: 'Hello'
Double quotes: "Hello"
Backticks:`Hello`
*/
let my_name = 'IQRA';
let sister_Name = "SIDRA";
const result = `The names are ${my_name} and ${sister_Name}`; 
console.log(my_name);
console.log(sister_Name);
console.log(result);
/* ---OUTPUT --
    IQRA 
    SIDRA
    The name are IQRA and SIDRA

*/






/*  EXAMPLE NO 2
---Access String Characters---
You can access the characters in a string in two ways.
1. One way is to treat strings as an array
2. Another way is to use the method charAt().
 
*/
let string_1 = "hellow";
console.log(string_1[0]);
let string_2 = "hellow";
console.log(string_2.charAt(0));
/*---OUTPUT--
   h  One way is to treat strings as an array
   h  Another way is to use the method charAt().
*/   







/*EXAMPLE NO 3
You can also create strings using the new keyword. */
const a = 'hello';
const b = new String('hello');
console.log(a); 
console.log(b); 
console.log(typeof a); 
console.log(typeof b);
/*--OUTPUT---
   hellow
   hellow
   string
   object
   */





   

/*
EXAMPLE NO 4
 concatenating two strings
*/
let text1 = 'hello';
let text2 = 'world';
let text3 = '    JavaScript    ';
let result1 = text1.concat(' ',text2);
console.log(result1); 
/* --- output--
hello world
*/






/*EXAMPLE NO 5 
*/
// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); 

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); 
/* --output--
HELLOW
javaSript
*/




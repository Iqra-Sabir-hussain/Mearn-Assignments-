/*EXAMPLE NO 1  
The Number() function is used to convert various data types to numbers.*/
let a = "50";
let b = false;
let c = true;
let result1 = Number(a);
let result2 = Number(b);
let result3 = Number(c);
console.log(a);
console.log(b);
console.log(c);
console.log("result1 =" + typeof result1);
console.log("result2 =" + typeof result2);
console.log("result3 =" + typeof result3);
/*  ---0utput-- 
 50      
 fasle
 true 
 result1 =number
 result2 =number
 result3 =number
   */
       
 





 /*  EXAMPLE NO 2
 You can also create numbers using the new keyword  */
 let NO_1 = 50;
// creating a number object
let NO_2 = new Number(50);
console.log(NO_1); 
console.log(NO_2); 
console.log(typeof NO_1); 
console.log(typeof NO_2); 
/* ---OUTPUT---
    50
    50
    number
    number
*/




/* EXAMPLE NO 3
When + is used with numbers, it is used to add the numbers. */
let no_1 = 14 ;
let no_2 = 23;
console.log(no_1 + no_2);
/*  When a numeric string is used with other numeric operations, the numeric string is converted to a number */
let result = '14'-12;
console.log("result="+result);
/* ---OUTPUT---
     37
     result=2
*/




/*EXAMPLE NO 4
NaN(Not a Number) is a keyword that indicates that the value is not a number.
*/
const B = 4 - 'hello';
console.log(B); 
/*---OUTPUT ---
NaN
*/



/*EXAMPLE NO 5
*/
const g = 89;
console.log(Number.isInteger(g)); // true

const l = NaN;
console.log(Number.isNaN(l)); // true


const d = 5.123;
console.log(d.toFixed(2)); // 5.12



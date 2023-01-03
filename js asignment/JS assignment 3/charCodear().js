/*EXAMPLE NO 1 
The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.*/
let student_Name = "Muzammil Sabir";
let display = student_Name.charCodeAt(6);
console.log(display);
//OUTPUT 105



/*EXAMPLE NO 2
 Using charCodeAt() Method   non integer value*/
 let result = student_Name.charCodeAt(5.5);
 console.log(result);
 // 109
 
 
 /*EXAMPLE NO 3
we have not passed any parameter in charCodeAt(), the default value will be 0.
*/
let resullt1 = student_Name = student_Name.charCodeAt();
console.log(resullt1);
// OUTPUT 77





/*EXAMPLE NO 4
charCodeAt() Method for Index Out of Range
*/
let msg = "hey! how are you?";
// passing index greater than length of string 
let resullt2 = msg.charCodeAt(23);
console.log(resullt2);
//OUTPUT NaN







/*EXAMPLE NO 5
 passing non-negative index value
*/
let sentence = "BELIEVE IN ALLAH"
let resullt3 = sentence.charCodeAt(-9);
console.log(resullt3);
//OUTPUT NaN  here the code sentence.charCodeAt(-9) return Nan becuse index are not present in index -9.

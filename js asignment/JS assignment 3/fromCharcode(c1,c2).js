/* EXAMPLE NO 1
The fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.*/
// use of fromCharCode()
let string1 = String.fromCharCode(65,76,76,65,72);
// printing the equivalent characters
console.log(string1);
// Output:
// ALLAH



/* Example no2
Using fromCodePoint() Method With Hexadecimal Value */
// numbers can be passed as a hexadecimal value
let string2 = String.fromCharCode(0x2018);
console.log(string2); 




/* EXAMPLE NO 3
String.fromCharCode() converts Unicode values to strings.
*/
let text = String.fromCharCode(65);
console.log(text);







// EXAMPLE NO 4
console.log(String.fromCharCode(189, 43, 190, 61));
// expected output: "1/2+3/4;




// EXAMPLE NO 5


function func() {
    let string4 = String.fromCharCode(72, 70, 71);
    console.log(string4);
}
func();



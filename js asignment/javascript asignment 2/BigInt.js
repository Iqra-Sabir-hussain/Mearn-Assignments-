/*EXAMPLE NO 1 
A BigInt number is created by appending n to the end of an integer. 
*/
// BigInt value
let value = 754987589457945745646535657n;
// Adding two big integers
let value1 = value + 75893765n;
console.log(value1);
/*  OUTPUT 
 754987589457945745722429422n
*/






/*EXAMPLE NO 2 */
//Parameter in decimal format
var bigNum = BigInt
("7089667856757645645645468743");
console.log(bigNum);
/*  OUTPUT 
7089667856757645645645468743
*/




/*EXAMPLE NO 3 */
// Parameter in binary format
var bigBin = BigInt("0b1010101001010101001111111111111111");
console.log(bigBin);
/*  OUTPUT 
11430854655n

*/


/*EXAMPLE NO 4 */
// Parameter in hexadecimal format
var bigHex = BigInt("0x1ffffffeeeeeeeeef");
console.log(bigHex);
/*  OUTPUT 
36893488074118328047n
*/


/*EXAMPLE NO 5  
 */
 let bigint = 3n;
 let number = 2;
 // number to bigint
 alert(bigint + BigInt(number)); 
 // bigint to number
 alert(Number(bigint) + number); 
 //OUTPUT 5

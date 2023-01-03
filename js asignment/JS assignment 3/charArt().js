/*EXAMPLE NO 1
The charAt() method returns the character at the specified index in a string.
*/
let string = "Hellow javascript";
let index1 = string.charAt(1);
console.log(index1);  //e

/*EXAMPLE NO 2 
charAt() Method With Integer Index Value
*/
let string1= "Hellow world";
let index6 = string1.charAt(8);
console.log(index6);   //  o


/*EXAMPLE NO 3
A Non-integer Index Value in charAt()
*/
let string2 = "Hey! IQRA HOW ARE YOU?";
let resullt = string2.charAt(7.3);
console.log(resullt); //R


/*EXAMPLE NO 4
Without passing parameter in charAt()
*/

let sentence = "Believe Allah";
let index3 = sentence.charAt();
console.log(index3);  // B
/*  we have not passed any parameter in the charAt() method. The default index value is
 0 so sentence.charAt() returns character at index 0 which is "B".
 */



/*EXAMPLE NO 5
  Index Value Out of Range in charAt()
  return empty string
*/
let sentence1 = "Happy Birthday Iqra";
let result = sentence1.charAt(70);
console.log("Character at index 70 is: " + result)  //Character at index 70 is: 

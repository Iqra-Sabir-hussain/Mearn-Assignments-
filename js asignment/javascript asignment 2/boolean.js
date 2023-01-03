
/* EXAMPLE NO 1 converting to string */
let VALUE = true;
let result = VALUE.toString();
console.log(result);
console.log(typeof result);
/* ---OUTPUT---
true
boolean
*/



/* EXAMPLE NO 2 
 converting to string */
let VALUE_1 = true;
let result1 = VALUE_1.valueOf();
console.log(result1);
console.log(typeof result1);
/*--OUTPUT--
true
boolean
*/




/* EXAMPLE NO 3 
You can also create a boolean value using the new keyword */
const a = false;
// creating a boolean object
const b = new Boolean(false);
console.log(a); 
console.log(b); 
console.log(typeof a); 
console.log(typeof b); 
/* ---OUTPUT--
   false
   false
   boolean
   object
   */


   // EXAMPLE NO 4 
result = -10;
console.log(Boolean(result)); // true

result = 'hey';
console.log(Boolean(result)); // true



//EXAMPLE NO 5
let result2;
// empty string
result = Boolean('');
console.log(result); // false

result = Boolean(0);
console.log(result); // false

result = Boolean(undefined);
console.log(result); // false

result = Boolean(null);
console.log(result); // false

result = Boolean(NaN);
console.log(result); // false

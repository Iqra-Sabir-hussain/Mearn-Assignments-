/*EXAMPLE NO 1 */

if (null || undefined) {
    console.log('null is true');
} else {
    console.log('null is false');
}
/*--OUTPUT--
   null is false
*/



/*EXAMPLE NO 2 
 null gets converted to false when used with the Boolean() function. */
let result;
result = Boolean(null);
console.log(result);
/*--OUTPUT--
    false 
*/



/*EXAMPLE N0 3 
In JavaScript, null is treated as an object. check this using the typeof operator.
*/
const a = null;
console.log(typeof a);
/*--OUTPUT--
    object 
*/



/*EXAMPLE NO 4 
when you pass null to a default parameter function, the function takes the null as a value.
*/
function test(x = 5) {
    console.log(x);
}
test(null);
/*--OUTPUT--
 null
*/

/*Example no 5  
When comparing null and undefined with equal to operator ==, they are considered equal. */
console.log(null == undefined);
/*--OUTPUT--
  true
*/
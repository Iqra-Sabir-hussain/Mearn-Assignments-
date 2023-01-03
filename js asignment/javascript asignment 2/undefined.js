/* EXAMPLE NO 1 
If a variable is declared but the value is not assigned, then the value of that variable will be undefined
*/
let first_name;
console.log(first_name); 
/*--OUTPUT --
undefined
*/



/* EXAMPLE NO 2
 assign undefined to a variable */
 let name1 = "sidra";
name1 = undefined;
console.log(name1); // return undefined



/*EXAMPLE NO 3 */
let a;
console.log(typeof a); // undefined





/*EXAMPLE NO 4
 pass undefined to a function parameter that takes a default value, the undefined is ignored and the default value is used. */
function test_Example(y = 1) {
  console.log(y);
}
test_Example(undefined); // 1


/* EXAMPLE NO 5 */
let result;
result = Boolean(undefined);
console.log(result); // false

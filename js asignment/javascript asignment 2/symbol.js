/*EXAMPLE NO 1
use  Symbol() function to create a Symbol
*/
let k = Symbol();
console.log(typeof k);
/*--OUTPUT--
   symbol
*/





/*EXAMPLE NO 2 
 access the description of a symbol, we use the . operator.
 */
let y = Symbol('iqra');
console.log(y.description);
/*--OUTPUT--
   iqra
*/







/*EXAMPLE NO 3 */

let roll_no = Symbol("id");
let student = { first_name : 'rabia' , [roll_no] :'456'}
console.log(student); 

/*---OUTPUT--
  {first_name: 'rabia', Symbol(id): '456'}
*/







/*EXAMPLE NO 4
The for...in loop does not iterate over Symbolic properties.
*/
let id = Symbol("id");

let studen_Name = {
    name: "iqra",
    age: 22,
    [id]: 92
};
for (let key in studen_Name) {
    console.log(key);
}
/*---OUTPUT--
    name
    age
*/



/*EXAMPLE NO 5 */
let resul1 = Symbol.for('hello');
let result2 = Symbol.for('id');
console.log( Symbol.keyFor( resul1) ); 
console.log( Symbol.keyFor(result2) ); 
/*---OUTPUT--
    hellow
    id
*/
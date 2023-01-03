/*EXAMPLE NO 1
The string indexOf() method returns the index of the first occurence of the substring in a string.


*/
let message = "Think big thoughts but relish small pleasures.";
let index = message.indexOf("k");
console.log('index: ' + index);  // index: 4

/*EXAMPLE NO 2 
 In this example, the function indexOf() finds the index of the string dep. Since the first and only index where this string is present is 6, therefore this function returns 6 as the answer.
*/
function func() {
 
    var str = 'student It department';
    var index1 = str.indexOf('department');
    console.log(index1);  //6
}
func();




/*EXAMPLE NO 3
in this example, the function indexOf() finds the index of the string t It. Since the first and the only index where this string is present is 6, therefore this function returns 6 as the answer.

*/

function func() {
    let  sentence = 'student It department';
    var index2 = sentence.indexOf('t It');
    console.log(index2);//6
}
func();


/*EXAMPLE NO 4 
In this example, the function indexOf() finds the index of the string Train. Since the searchValue is not present in the string, therefore this function returns -1 as the answer.


*/
function student_dep () {
 

    let string1 = 'student It department';
    let index3 = string1.indexOf('Dep');
    console.log(index3); //-1
}
student_dep();






/*EXAMPLE N0 5 */
var paragraph = "Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do.";
var index4 = paragraph.indexOf("Every");
console.log(index4);//125

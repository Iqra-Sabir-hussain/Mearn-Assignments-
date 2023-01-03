/*EXAMPLE NO 1 */
var student_name = ['iqra', 'sidra', 'sadia', 'rabia'];
a = student_name.lastIndexOf('sadia')
console.log(a);// 2




/*EXAMPLE NO 2 */
var Numbers = [11, 22, 23, 24, 25].lastIndexOf(22);
console.log(Numbers);//1



/*EXAMPLE NO 3 */
var cars = ['TeslaLuxury', 'PorscheLuxury', 'ToyotaMass', 'FordMass-Market '];
b = cars.lastIndexOf('')
console.log(b);//-1


/*EXAMPLE NO 4 */
function display_msg() {
    var msg = "hellow  world"
    var text = msg.lastIndexOf("", 4)
    console.log(text);



}
display_msg();//4



/*EXAMPLE NO 5 */
var arr = ["C", "C++", "Python", "C++", "Java"];
var result = arr.lastIndexOf("JavaScript");
console.log(result);//-1


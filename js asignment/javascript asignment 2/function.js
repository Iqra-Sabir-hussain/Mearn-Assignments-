
//EXAMPLE NO 1
// declaring a function named greet()
function greet() {
    console.log("Hello IQRA");
}







//  EXAMPLE 2
// print a text  declaring a function
function display() {
    console.log("HOW ARE YOU");
}
display();



//EXAMPLE NO 3
function greet(name) {
    console.log("hey " + name + " ");
}
let name = prompt("Enter a first_name: ");
greet(name);





//EXAMPLE NO 4
//  add two numbers using a function
// declaring a function
function add(a, b) {
    console.log(a + b);
}
// calling functions
add(12,4);
add(22,9);




//EXAMPLE NO 5
// add two numbers
function add(a, b) {
    return a + b;
}
let number1 = parseFloat(prompt("Enter first num: "));
let number2 = parseFloat(prompt("Enter second num: "));

// calling function
let result = add(number1,number2);

// display the result
console.log(" sum " + result);
// EXAMPLE NO 1
//A seach for "con" using a string:
let text = "If the search value is a string, it is converted to a regular expression";
let result = text.match("con");
console.log(result);


//EXAMPLE NO 2
//A seach for "/con/" using a regular expression:
let text1 = "If the search value is a string, value it is converted to a con regular con expression";
let result1 = text.match(/value/);

console.log(result1);



//EXAMPLE NO 3
//we will search for a regular expression using global flag.
let text2 = "The rain in SPAIN stays mainly rain in the rain plain";
let result2 = text2.match(/rain/g);
console.log(result2)


//Example no 4
//A global, case-insensitive search:
let text3 = "The rain in SPAIN stays mainly rain in the rain plain";
let result3 = text3.match(/ain/gi);
console.log(result3)


//EXAMPLE NO 5
//we will print the array of matched elements.
var str="HEY IQRA HOW ARE YOU";  
document.writeln(str.match(/[I-Y]/g));  

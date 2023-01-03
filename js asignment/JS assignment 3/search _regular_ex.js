//Example no 1
let text1 = "Visit muree!"; 
let num = text1.search("muree");
console.log(num);

//EXAMPLE NO 2
let text2 = "Visit muree!";
let n = text2.search(/muree!/i);
console.log(n);

//EAMPLE NO 3
const str = "hey IQRA";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(str.search(re)); 
console.log(str.search(reDot));


//EXAMPLE NO 4
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const regex = /[^\w\s]/g;
console.log(paragraph.search(regex));
console.log(paragraph[paragraph.search(regex)]);

//EXAMPLE NO 5
let str5 = "lazy dog. If the dog barked,";
alert( str5.search( /ed/i ) ); 
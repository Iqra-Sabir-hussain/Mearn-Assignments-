// EXAMPLE NO 1
// The replace() method returns a new string with the specified string/regex replaced.
const message = "NICE IQRA";
// replace the first b with c
let result = message.replace('NICE', 'GOOD');
console.log(result);
// Output: GOOD IQRA



//EXAMPLE NO 2
const text = "Play football as fun"
// passing a string as the first parameter
let pattern = "football";
let new_text = text.replace(pattern, "hockey");
console.log(new_text);
// passing a regex as the first parameter
pattern = /football/;
new_text = text.replace(pattern, "hockey");
console.log(new_text);

//EXAMPLE N0 3
const text1 = "eat junk junk junk food."
// notice the g switch in the regex pattern
const pattern1 = /junk/g;
const new_text1 = text1.replace(pattern1, "healthy");
console.log(new_text1);


//EXAMPLE NO 4
const text2 = "eat junk JUNK junk junk food."
// notice the g switch in the regex pattern
const pattern2 = /junk/gi;
const new_text2 = text2.replace(pattern2, "healthy");
console.log(new_text2);



//EXAMPLE NO 5 
var str=" 1 Prep Course Online. Save Node.JS Now at Shopwebly! Quick Results. Easy Access. Compare Products. Many Products. Find Easily. Search and Discove.";  
document.writeln(str.replace(/Node.JS/gi,"AngularJS")); 


let text6 = "Visit W3Schools!"; 
let n = text6.search("W3Schools");
console.log(n);
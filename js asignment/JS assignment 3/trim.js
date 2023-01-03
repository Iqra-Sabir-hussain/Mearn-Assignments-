//Example no 1
const message = "   videopaly  is fun   ";
// remove leading and trailing whitespaces
const newMessage = message.trim();
console.log(newMessage);
// Output: videoplay is fun



//EXAMPLE NO 2
let str = "   HEY  ";
console.log(str.trim()); 
//--OUTPUT--HEY



//EXAMPLE NO 3
function func_trim() {   
     //original string with whitespace in beginning and end  
    var str = "     how are you?   ";   
    var str1 = str.trim();   
    document.write(str1);    
}   
func_trim(); 
// --OUTPUT-- how are you?


//EXAMPLE NO 4
let text = "     Hello World!     ";
let result = text.trim();
console.log(result);
//--output-- Hello World!

//EXAMPLE NO 5
var string = '   TechOnTheNet   ';
console.log(string.trim());
//TechOnTheNet


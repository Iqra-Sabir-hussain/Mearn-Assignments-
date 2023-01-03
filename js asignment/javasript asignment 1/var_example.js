// Example no 1 var
var first_Name = "IQRA";
var last_Name = " Sabir";
var full_Name = first_Name + " " + last_Name ;
console.log(full_Name);     //output IQRA Sabir

// Example no 2 
var eng_marks = 30;
var urdu_marks = 40;
var math_marks = 40;
var sum;
sum = eng_marks + urdu_marks + math_marks ;
console.log(sum);
var percentage =  sum / 150 *100;
console.log(percentage);  // output 73.33 



// Example no 3 var 
// global scope 
var a = "hello";
function greet () 
{

   console.log(a);//output hellow
}
console.log(a);
greet();  //output hellow

// local scope 
function dispaly_msg()
{

    var msg =" hellow_javascript";
    console.log(msg);
 
    
}
// console.log(msg);  
//  variable is decalred inside the function consol.log(msg ) not print ouside the function

dispaly_msg()
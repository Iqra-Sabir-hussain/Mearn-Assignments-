// Exapl no 1 let

let num = 100;
console.log (num); 
// let num = 200;   // num is alredy defined
// console.log(num);
//Variables defined with let cannot be Redeclared

  

// Example no 2
// Redeclaring a Variable Using let
let  x = 10;
{  
  let x = 2; //declaring a variable inside a block will not redeclare the variable outside the block:
//   Not allowed
}
console.log(x);


//Example no 3 
function letTest() { 
    let x = 1;   
    { 
      let x = 2;  
      console.log(x);  // output 2 
    }
   console.log(x); // ourput 1     global scope
  }
  letTest();


 
  
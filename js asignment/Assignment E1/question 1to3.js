/*
Question # 1:
Enlist all the reserved names that can not be used as identifiers for variables, functions, classes, etc. 
Ans =
abstract    arguments  	await*	        boolean
break      	byte	    case	             catch
char      	class*	const	        continue
debugger    default	    delete	         do
double       else	     enum*	         eval
export*      extends*    false	        final
finally     float	    for	            function
goto	       if	        implements	        import*
in      	instanceof	int	            interface
let*      	long	    native	        new
null      	package	    private	        protected
public     	return	    short	        static
super*     	switch	    synchronized	this
throw	    throws	    transient	    true
try	typeof     	var	    void
volatile

*/




/*Question # 2:
What is the purpose & application of
(i)  "use strict"
(II)  using constants as aliases

Ans (i)  =
      * The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
      With strict mode, you can not, for example, use undeclared variables.
      * You can use strict mode in all your programs. It helps you to write 
      cleaner code, like preventing you from using undeclared variables.
   
 Ans (ii)= 
*  Variable define using const keyword cannot be reassigned, or its value cannot be changed.
*  The const variable must be initialized at the time of declaration with the variable name, e.g., const x=6;
*  You cannot provide the value to the variable after declaration.
*  The value of the const variable cannot be changed.
*  The const variable has block scope. This means that a const variable within the same program can be reassigned by the same name and have different values in different blocks.
*  A const variable cannot be hoisted, which means that a variable declared/initialized using var keyword cannot be reassigned using const.
*  In JavaScript, const allows you to only modify the value of the array, but the reference to the array cannot be changed.
*  The const variable creates only reference to the value.
*  Object properties can be changed but the reference to an object cannot be changed.

Ans(ii) = when two different variable are with the same name, we use aliases to avoid conflict.
*/





/*
Question # 3:
Explain with different cases & examples
(i) when its best to declare a variable as var
(ii) when its best to declare a variable as let
when its best to declare a variable as const
when its best to declare a variable as an enum

Ans = 
(i) If you want your code to run in older browsers, you must use var.
Redeclaring a variable inside a block and aslo redeclared outside the block.
example var
// Redeclaring a JavaScript variable with var is allowed anywhere in a program:
var x = 2;
// Now x is 2
var x = 3;
// Now x is 3



(ii) Variables defined with let cannot be redeclared.
You cannot accidentally redeclare a variable. With let you can not do this:
let y = "John Doe";
let y = 0;
console.log(y);
// SyntaxError: 'y' has already been declared 



(iii)
when declare variable as constant :
Variables defined with const cannot be Redeclared.
Variables defined with const cannot be Reassigned.
Variables defined with const have Block Scope.
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error




(iv) when its best to declare a variable as an enum
Ans=
Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
* define your own enum in javascript .
*global object that behaves like an enum.
* start with constant keyword followed by name of your enum.
* Direction has UP DOWN LEFT RIGHT use upper case 
*its a constant and for the value of this property name use we can same as the property string 
example :
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
*/


/* Question # 4

(i) declare variables/data types that are either used to store initial information 
Ans= 
     let number ;
     Here I have declared the variable name number and use the keyword let .



--- (ii) declare variables that will be used to store the calculated values & answers.
Ans = 
     var x ;
     Here I have declared the variable name x and use keyword var & x use to store value .




---(iii) Give a proper reason for the variable/data type you declared along with their scope
Ans = 
   (i) 
   * In the first example declared variable name number and its type is undefined becuse we have not intialized the number and by default its type 
   is undefined and use keyword let and let is a block scope.
   (ii)
   * In the second example declared variable x and its type is undefined becuse we have not intialized the x and by default its type is undefined
   and use the keyword var and var is a global scope.

     



--- (iv) Explain & give a reason for selecting the type of variable/data type.
Ans = 
    (i)
    *In the first example let keyword use because let have local scope.
    * let can not be reclared. 
    *Redeclaring a variable inside a block will not redeclare the variable outside the block:
    (ii)
    * In the second example var keyword use because var have global scope.
    * Variables declared
    * inside a { } block can be accessed from outside the block.
*/



   









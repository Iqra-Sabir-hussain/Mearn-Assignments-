
/* Question no 4

The distance between two towns is 380 km. At the same moment, a passenger 
car and a truck start moving towards each other from different towns.
They meet 4 hours later. If the car drives 5 km/hr faster than the truck, 
what are their speeds?
*/



let speed_Of_Car = "s + 5";
let speed_Of_truck = "s";

console.log("speed of car =" + speed_Of_Car)
console.log("speed of car =" + speed_Of_truck);

let distance = 380;
let Time = 4;
console.log("distance =" +   distance + "km");
console.log("Time="  + Time + "hours");
console.log( "relitive speed ="+  "s+s+5");
/* distance/Time = relitive_speed 
   380/4 =2s + 5
   s=(95-5)/2;
*/
let s = (95-5)/2;
console.log("The speed of truck ="+ s + "kmph");







/*
 One side of a rectangle is 3 cm shorter than the other side. If we increase the length of each side by 1 cm, then the area of the rectangle will increase by 18 cm2. Find the lengths of all sides. */
 var Fraction = algebra.Fraction;
 var Expression = algebra.Expression;
 var Equation = algebra.Equation;

let eq = algebra.parse("x^2 + 5 * x + 4 - x^2 - 3 * x = 18");
let area = eq.solveFor("x");
console.log(area.toString());



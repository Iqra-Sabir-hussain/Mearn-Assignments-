//EXmple no 1
// object creation
const student_nmae = { 
    name: 'iqra',
    age: 20
};
console.log(typeof student_nmae); // object



// EXAMPLE NO 2
// Using bracket Notation
const student1 = { 
    name: 'sidra', 
    age: 22, 
};
// accessing property
console.log(student1["name"]); 





// EXAMPLE NO 3
// nested object
let student = { 
    name: 'iqra', 
    age: 20,
    mark:
     {
        urdu: 90,
        math: 55
    }
}


console.log(student.mark);
console.log(student.mark.urdu); 


//EXAMPLE NO 4
let Student1 = {
  name: "iqra",
  age: 22,
  marks: 9.9,
  display() {
    console.log("Name:", this.name);
  }
};
let stud1 = Object.create(Student1);
stud1.name = "rabia";
stud1.display();

// Output: Name: rabia



//EXAMPLE NO 5
const person = {
    firstName: "IQRA",
    lastName: "SABIR",
    age:50,
    eyeColor: "brown"
  };
  const x = person;
  x.age = 10;
  console.log(  person.firstName + " is " + person.age + " years old.")
  
// Mark and sweep algorithim is used gatbage collection

//Memory leak -> In circular reference happen. 
// class Teacher {}
// class Student {}

// let teacher = new Teacher()
// let student = new Student()
// console.log(teacher);
// console.log(student);

// teacher.student = student
// console.log(teacher);
// console.log(student);

// student = null
// console.log(teacher);
// console.log(student);

// student.teacher = teacher
// console.log(teacher);
// console.log(student);



let obj1 = {};
let obj2 = {};

obj1.reference = obj2;
obj2.reference = obj1;
console.log(obj1);
console.log(obj2);

// Here, obj1 and obj2 form a circular reference where obj1 references obj2 and obj2 references obj1. 
// This creates a cycle where neither obj1 nor obj2 can be garbage collected by JavaScript's garbage collector because they are mutually referenced



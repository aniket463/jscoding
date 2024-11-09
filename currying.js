// sum(5)(6)

// function sum(a){
//     return function(b){
//         return a+b
//     }
// }
// console.log(sum(5)(6));


//ES6
const sum1 = a=>b=>a+b
console.log(sum1(5)(6));
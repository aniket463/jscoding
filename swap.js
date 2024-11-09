let a = 5
let b = 10

// Using 3rd valiabl
// let temp = a
// a = b
// b = temp
// console.log(a, b);

// without
// a = a + b
// b = a - b
// a = a - b

[a, b] = [b, a];
console.log(a, b);
let a = [1, 2, 3, 4, 5]
// Method1
// if (toString.call(a) === "[object Array]") {
//     console.log('true');
// }else{
//     console.log('false');
// }

// Method2
console.log(Array.isArray(a));
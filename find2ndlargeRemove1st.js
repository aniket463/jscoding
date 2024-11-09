// let arr = [6,2,3,1,7,4]
// let arr = ['6','2','3','1','7','4']
// let arr = ["Banana", "Orange", "Apple", "Mango"];
// console.log(arr.sort());
// console.log(arr.sort().reverse());

// console.log(arr.sort(function (a, b) { return (a - b) }));
// console.log(arr.sort(function (a, b) { return (b - a) }));

// console.log(arr.sort(function (a, b) { return (a > b ? -1 : a < b ? 1 : 0) }));


let arr1 = ['6','2','3','1','7','4']
const fistLargestvalue = Math.max(...arr1)
console.log(fistLargestvalue);
const index = arr1.indexOf(fistLargestvalue.toString())
arr1.splice(index,1)
console.log(arr1);
const secvalue = Math.max(...arr1)
console.log(secvalue);

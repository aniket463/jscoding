let arr = [6, 2, 3, 1, 7, 4]
// sum = 0
// for( i of arr){
//     sum+=i
// }
// console.log(sum);

// const sum = arr.reduce(function (pre, cur) {
//     return pre + cur
// })
// console.log(sum);

let sum = 0
arr.forEach((i)=>{
    sum +=i
})
console.log(sum);

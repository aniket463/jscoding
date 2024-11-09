
const prompt = require('prompt-sync')();
let n = parseInt(prompt('enter the array size:'))

const arr = new Array(n);

for (let i = 0; i < n; i++) {
    const element = parseInt(prompt(`Element ${i + 1}:`));
    arr[i] = element; // Assign the element to the array at the specified index
}
console.log(arr);
const maxFun = (arr) => {
    return arr.reduce(function (pre, cur) {
        return pre > cur ? pre : cur
    })
}
const minFun = (arr) => {
    return arr.reduce(function (pre, cur) {
        return pre < cur ? pre : cur
    })
}
const max = maxFun(arr)
const min = minFun(arr)
console.log("max", max);
console.log("min", min);




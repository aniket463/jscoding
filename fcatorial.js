// Take input
// const prompt = require('prompt-sync')();
// const n = prompt('Enter number');
// console.log(n);


// const readlineSync = require('readline-sync');
// const userInput = readlineSync.question('Enter something: ');
// console.log('You entered:', userInput);

// const prompt = require('prompt-sync')();
// let n = prompt('enter the number:')
// n  = parseInt(n)
// fac = 1
// for (let i = 1; i<=n;i++){
//     fac = fac*i
// }
// console.log('ans is'+fac);

const prompt = require('prompt-sync')();
function factorial(n){
    if (n===0){
        return 1
    }
    return n*factorial(n-1)
}
let n = prompt('enter the number:')
console.log(factorial(n));

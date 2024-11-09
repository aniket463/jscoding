const prompt = require('prompt-sync')();
let n = parseInt(prompt('enter the number:'))

if (n<=0){
    console.log("Please enter valid number");
}

reseult = []
for (let index = 1; index <= n; index++) {
    if(n%index === 0){
        reseult.push(index)
    }
    
}
console.log(reseult);

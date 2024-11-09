const prompt = require('prompt-sync')();
let n = parseInt(prompt('enter the number:'))

let flag = true;
for(let i=2;i<=n-1;i++){
    if(n%i === 0){
        flag=false
        break
    }
}
if(flag === true){
    console.log("prime number");
}else{
    console.log("not prime");
}
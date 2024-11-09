//reverse
const prompt = require('prompt-sync')();
let n = parseInt(prompt('enter the number:'))
let original = n
let rev = 0
let rem = 0

while (n > 0) {
    rem = (n % 10)
    rev = (rev * 10) + rem
    n = parseInt(n / 10)
    console.log(n);
}

console.log(rev);

if(original === rev){
    console.log('pelindrom');
}else{
    console.log('Not pelindrom');
}
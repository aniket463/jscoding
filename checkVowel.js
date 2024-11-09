const prompt = require('prompt-sync')();
let ch = prompt('Enter character:')
let vowel = ['a','e','i','o','u']
ch = ch.toLocaleLowerCase()

if(vowel.includes(ch)){
    console.log(`${ch} is Vowel`);
}else{
    console.log(`${ch} is not Vowel`);
}
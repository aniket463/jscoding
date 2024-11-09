const str = "Aniket Ghosh"
// let reverStr = ''
// for (let index = str.length - 1; index >= 0; index--) {
//     console.log(str[index]);
//     reverStr += str[index]
// }

// const reverStr = str.split('').reverse().join('')

// const reverStr = str.split('').reduce((reverse, char) => { console.log(reverse, char); return char + reverse })


const reverStr = Array.from(str).reverse().join('')

console.log(reverStr);
let arr1 = [1, 3, 5, 7, 8, 9, 2]
let arr2 = [2, 4, 6, 8, 10]
let result = arr1.filter(i=>{
    return arr2.includes(i)
})
console.log('INTERCTION', result);

let uni = [...arr1,...arr2]
uni = [...new Set(uni)]
console.log("UNION",uni);
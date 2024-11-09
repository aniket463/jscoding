// 1D
let arr = [2,1,3,4,5,6,7,8,9,10]
const res = arr.reduce((acc,curr)=>{
    console.log(acc,curr);
    return acc+curr
},0)
console.log(res);

let arr1 = [[2,1],[3,4],[5,6],[7,8],[9,10]]
const res1 = arr1.reduce((acc,curr)=>{
    return acc.concat(curr)
},[]) 
console.log(res1);

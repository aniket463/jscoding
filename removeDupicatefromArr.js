
let arr = [1,2,3,4,5,2,3,6,8,1];
// method1
// let newarr = arr.filter((val,index)=>{
//     return arr.indexOf(val) === index;
// })
// console.log(newarr);

// method2
// let newarr = [... new Set(arr)]

// method3
let newarr = []
for(let i of arr){
    if(!(newarr.includes(i))){
        newarr.push(i)
    }
}

console.log(newarr);
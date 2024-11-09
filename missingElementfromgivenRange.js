let arr = [1,3,8,7,4,6,2]

function misElemt(arr){
    const maxvalue = Math.max(...arr)
    const minvalue = Math.min(...arr)
    let misArray = []
    for(let i=minvalue;i<maxvalue;i++){
        if(arr.indexOf(i)<0){
            misArray.push(i)
        }
    }
    return misArray
}

console.log(misElemt(arr));
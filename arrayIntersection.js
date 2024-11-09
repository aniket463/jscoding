const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7];

const intersection = array1.filter((item,index)=> array2.includes(item))

//Set approch
const set1 = new Set(array1)
const intersection1 = array2.filter((item,index)=> set1.has(item))
console.log(intersection1);


//UNION

const union = [...array1,...array2]
const res = [... new Set(union)]
console.log(res);
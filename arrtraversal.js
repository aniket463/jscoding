let arr = ['ES1','ES2','ES3','ES4','ES5','ES6']

// for(i in arr){
//     console.log(i); //return index
// }
// for(i of arr){
//     console.log(i); //return ELEMENT
// }

// arr.forEach((ele,index)=>{
//     console.log(ele);
//     if(index === 2){
//         // break 
//         //Cant break the loop. Illegal break statement
//     }
// })


// splice- method
 arr.splice(3,1)
 arr.splice(4,1,'New')
 console.log(arr);
 arr.splice(2,2,"mew1","another")

 console.log(arr);

//  it chang org arr so not a good practice

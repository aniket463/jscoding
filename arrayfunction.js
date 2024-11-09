// this not work
// function my(){
//     console.log(this);
// }
// my()s
// const myrr =()=>{
//     console.log(this);
// }
// myrr()

// var obj = {
//     method: function(){
//         console.log(this);
//     }
// }

// var obj1 = {
//     method: ()=>{
//         console.log(this);
//     }
// }

// obj.method()
// obj1.method()




// argument object not work 
function test(){
    console.log(arguments);
}
test(1,2,3,4)


const test1 = ()=>{
    console.log(arguments);
}
test1(1,2,3,4) //ref error

// this can be achive using spred operator
const test3 = (...arguments)=>{
    console.log(arguments);
}
test3(1,2,3,4)
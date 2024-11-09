// const genFun = function*(){
//     console.log("hello");
//     yield
//     console.log("wold");
//     yield
//     console.log("Final");
// }

// const gobj = genFun()
// // console.log(gobj.next()); 
// // console.log(gobj.next()); 
// // console.log(gobj.next()); 

// for(let i of gobj){
//     console.log(i);
// }


// yield* -> use for recursive function or call one gen fun from another gen fun.

// function* gen(){
//     console.log("hi");
// }
// function* gen1(){
//     //normal; approch
//     // const g = gen()
//     // g.next()

//     yield* gen()

// }

// const g1 = gen1()
// g1.next()

// throw() -> this is throw an exception in the location of yield which made the last suspention of generator function.

function* gen(){
    try {
       yield "x"
       yield 'Y' 
    } catch (error) {
        console.log("errror",error);
    }
    // finally{
    //     yield "F"
    // }
}

const g = gen()
console.log(g.next());
console.log(g.throw());


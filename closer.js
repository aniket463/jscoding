function outer(){
    let outervariable = "OUT"
    function inner(){
        let res = "Inner"+ outervariable
        console.log(res);
    }
    return inner
}

const a = outer()
console.log(a);
a()
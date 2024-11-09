// let str = 'hello world'
let str = ''

if((typeof str !== "string")|| (str.length === 0)){
    console.log('Enter valid string');
    return
}else{
    let str1 = str.split(" ")
    resMap = str1.map((word,index)=>{
        return word.charAt(0).toUpperCase()+ word.slice(1)
    })
    console.log(resMap.join(" "));
}


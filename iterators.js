let obj ={
    start: 10,
    end: 15,
}

obj[Symbol.iterator] = function(){
    return{
        next(){
            if(obj.start <= obj.end){
                return {value: obj.start++, done: false}
            }else{
                return{done: true}
            }
        }
    }
}


for(i of obj){
    console.log(i);
}
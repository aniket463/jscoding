const size = 6
for(let i=1;i<=size;i++){
    let pattern = '';
    for (let j = 1; j <= i; j++) {
      pattern += '* ';
    }
    console.log(pattern);
}
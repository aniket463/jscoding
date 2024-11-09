let age = 16;
try {
    if (age<18) {
        throw  new TypeError('Invalid age.................')
    }
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log("finally");
}
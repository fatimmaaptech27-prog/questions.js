// calculator using arrow functions

const add = (a,b) => a+b;
const substract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

console.log("Addition",add(49,12));
console.log("sub",substract(79,52));
console.log(" Multiplication",multiply(69,12));
console.log("Divided",divide(49,12));

//  Create a function that accepts an arrow function as a callback and displays the result of multiplying two numbers.

function calculate(a, b, callback) {
    const result = callback(a, b);

    console.log("Multiplication Result:", result);
}

const multiplication = (a, b) => a * b;

calculate(6, 4, multiplication);

//  Create an async function that waits 3 seconds and then prints "Data Loaded Successfully".

setTimeout(() =>{
    console.log ("Data Loaded Successfully");

}, 3000 );

//  Create a function that checks a student's marks using a callback:
// - Marks 40 or above: Passed.
// - Marks below 40: Failed.

function checkMarks(marks,callback){
     callback(marks);
}

 const result =(marks) =>{
    if(marks >=40){
        console.log("passed")
    }else{
        console.log("failed")
    }
 };
   checkMarks(50,result)
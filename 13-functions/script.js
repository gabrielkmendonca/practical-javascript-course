console.log(`Function is a reusable block of code designed to perform a particular task that is executed when "called"`)

function multiply(n1, n2){ //optional parameters used to properly run the code inside the function
    return n1 * n2 //used to return a value to the "caller"
}

console.log("Let's see an example that converts Farenheits to Celsius")

function temp(f){
    result = (5 / 9) * (f - 32) //variables called inside a function can only be accessed from within the function (local variables)
    return result
}
functionTemp = (f) => (5/9) * (f-32) //function shorthand —— arrow function

let celsius = functionTemp(80) //calls the function sending a argument that will be used by the parameter
console.log(celsius)

console.log(`calling the function without "()" returns the function and not the function result`)



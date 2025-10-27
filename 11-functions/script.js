console.log(`Function is a reusable block of code designed to perform a particular task that is executed when "called"`)
console.log(`Calling a function without "()" returns the function itself and not its result`)

console.log("Let's see an example that converts Farenheits to Celsius")

function temp(f) { //the parameters are optional, but they help to correctly execute the code inside the function
    result = (5 / 9) * (f - 32); //variables called inside a function can only be accessed from within the function (local variables)
    return result; //"return" is used to send the function result back to the "caller"
}
let celsius = temp(80); //calls the function sending a argument that will be used by the parameter
console.log(celsius);


console.log("Function Shorthand — Arrow Function")

functionTemp = (f) => (5/9) * (f-32) //arrow function to convert Farenheits to Celsius
let celsiusShort = functionTemp(80) 


console.log("Anonymous Function")
console.log("A function can be defined using an expression and stored inside a variable")

const x = function (n1, n2) {return n1 * n2};
let y = x(4, 3); //calls the variable containing the function expression


console.log("Anonymous Self-invoking Function")
console.log(`Function expressions can be made "self-invoking"`)

(function () { //add parentheses around the function to indicate that it is a function expression
  let x = "Hello!!"
})(); //in order to execute automatically, the expression needs to be followed by ()


console.log("Function Used as Value")
console.log("Functions can be used as a value in a expression")

sumFunction = (a = 1, b = 1) => (a + b) //parameters can have default values, that will be considered if no argument is sent during the invoke
let exp = sumFunction(2, 3) * 2; //calls the function and multiplies its returned value by 2
console.log(exp)


console.log("JavaScript call() Method")
console.log("With call(), an object can use a method belonging to another object.")

const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.call(person1); //this will return "John Doe"

console.log("The call() method can accept arguments")

const personArg = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
const person1Arg = {
  firstName:"John",
  lastName: "Doe"
}
personArg.fullName.call(person1Arg, "Oslo", "Norway");



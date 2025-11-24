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


console.log("IIFE — Immediately Invoked Function Expression")
console.log(`Function expressions can be made "self-invoking"`)

(function () { //add parentheses around the function to indicate that it is a function expression
  let x = "Hello!!"
})(); //The final () executes the function immediately

(function (name) { //IIFE can have parameters
  let x = "Hello!!" + name
})("John Doe"); 

(() => { //IIFE as an Arrow Function
  let text = "Hello! I called myself.";
})();

((name) => { //IIFE Arrow Function can also take parameters
  let text = "Hello!" + name + "I called myself.";
})("John Doe");


console.log("Function Used as Value")
console.log("Functions can be used as a value in a expression")

sumFunction = (a = 1, b = 1) => (a + b) //parameters can have default values, that will be considered if no argument is sent during the invoke
let exp = sumFunction(2, 3) * 2; //calls the function and multiplies its returned value by 2
console.log(exp)


console.log("Function Rest Parameter")

function sum(...args) { //the rest parameter allows a function to treat an indefinite number of arguments as an array
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let rest = sum(4, 9, 16, 25, 29, 100, 66, 77);


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


console.log("Generator Function")
console.log("A JavaScript Generator is a function that can return multiple values, one by one")

function* myStream() { //the Generator Function is defined using the "function*" syntax
// return {value:1, done:false}
yield 1; //pauses execution and yield a value back to the caller

// return {value:2, done:false}
yield 2;

// return {value:3, done:true}
yield 3;
}

let myGenerator = myStream();

for (const x of myGenerator){ //use iteration to display the values returned from the generator function
  console.log(x)
}


console.log("Callback Function")

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer); //"myDisplayer" is a callback — a function passed (without parenthesis) as an argument to another function 


console.log("Asynchronous Functions")

setTimeout(myFunction, 3000) //a function is especified to be executed on time-out. 3000 is the time in milliseconds (so it is 3 seconds)
setInterval(myFunction, 1000) //a function is especified to be executed for each interval


console.log("JavaScript Promise Object")
console.log("A Promise contains both the producing code and calls to the consuming code")

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

  if (x == 0) {
    myResolve("Okay"); // when successful
  } else {
    myReject("Error");  // when error
  }
});
myPromise.then(
  function(value) { myPromise(value) },
  function(error) { myPromise(error) }
  //Both callbacks are optional, so you can add a callback for success or failure only
);

console.log(`The Promise object supports two properties: state and result.
  - While a Promise object is "pending" (working), the result is undefined.
  - When a Promise object is "fulfilled", the result is a value.
  - When a Promise object is "rejected", the result is an error object.`)


console.log("JavaScript Async & Await")

async function myDisplay() { //The keyword async before a function makes the function return a promise
  let myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {resolve("I love You !!");}, 3000);
  });
  console.log(await myPromise) //The await keyword makes the function pause the execution and wait for a resolved promise before it continues
}

myDisplay();
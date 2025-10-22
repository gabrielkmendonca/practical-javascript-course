console.log(`When executing JavaScript code, different errors can occur. They can be coding errors made by the programmer, errors due to wrong input, and others`)


console.log("Catch JavaScript Errors")
console.log(`The try statement allows you to define a block of code to be tested for errors while it is being executed.
The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
    The JavaScript statements try and catch come in pairs`)

try{
    //block of code to be tested
}
catch(err){
    //block of code to handle errors
    err.name //returns the error name
    err.message //returns the error displayed message
}


console.log("JavaScript Error Names")

let x = y //ReferenceError = occurs if you use (reference) a variable that does not exist
Anna(5) //TypeError = occurs when a value is of the wrong type or an operation is invalid on that type
new Array(-1) //RangeError = occurs when a value is out of its valid range.
decodeURI("%%%") //URIError = occurs if you use illegal characters in a URI function
Math.round(4.6;) //SyntaxError = occurs when the code violates JavaScript's grammar rules — Not catchable, happen before runtime


console.log("JavaScript Silent Errors")
console.log(`A silent error will not stop the program, the execution will keep going.`)
console.log(`Silent errors aren't related to the language rules, they occur when programming logic is flawed. The program works, but not as expected`)


console.log("JavaScript Error Statements")
console.log(`Try Block = contains the code that might throw an error. Works with catch, finally and throw`)
console.log(`Catch Block = executes only if an error occurs in the try block. `)
console.log(`Finally Block = executes after the try and catch blocks, whether an error occurred or not. Commonly used for cleanup tasks.`)
console.log(`Throw Statement = allows to create a custom error messages`)
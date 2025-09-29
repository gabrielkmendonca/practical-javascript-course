let x = 1678

console.log("Basic Numbers Methods")

let s = x.toString() //returns a number as a string
let exp = x.toExponential(2) //returns a string, with a number rounded and written using exponential notation. If no parameter, it won't round
let fix = x.toFixed(4) //returns a string, with the number written with a specified number of decimals
let prec = x.toPrecision(3) //returns a string, with a number written with a specified length
let val = x.valueOf() //returns a number as a number


console.log("Static Numbers Methods")

Number() //convert variables into numbers. If the number cannot convert, it will return NaN (Not a Number)
parseInt() //parses a string and returns a whole number. Only the first number is returned
parseFloat() //parses a string and returns a number. Only the first number is returned


console.log("Number Object Methods") //boolean data type

Number.isInteger() //checks if the argument is an integer
Number.isNaN() //checks if the argument is a NaN
Number.isFinite() //checks if the argument is not infinity, -infinity nor NaN
Number.isSafeInteger() //checks if the argument is a safe integer (can be exactly represented as a double precision number)
Number.parseFloat() //converts a string to a number. Same as "parseFloat()"
Number.parseInt() //converts a string to a whole number. Same as "parseInt()"


console.log("Numbers Properties")

console.log("Locale Numbers")

let num = 10000

num.toLocaleString() //format into a string, using locale settings
num.toLocaleString("fi-FI") //format into a string, using locale settings (in this case, Finland)
num.toLocaleString("en-US", {style:"currency", currency:"USD"}) //format into a currency string, using locale settings (in this case, USA)


console.log("Number Properties")

Number.EPSILON //is the difference between the smallest floating point number greater than 1 and 1
Number.MAX_VALUE //represents the largest possible number in JavaScript
Number.MIN_VALUE //represents the lowest possible number in JavaScript
Number.MAX_SAFE_INTEGER //represents the largest possible integer number in JavaScript
Number.MIN_SAFE_INTEGER //represents the lowest possible integer number in JavaScript
Number.POSITIVE_INFINITY //infinity
Number.NEGATIVE_INFINITY //-infinity
Number.NaN //reserved word for a number that is not a legal number


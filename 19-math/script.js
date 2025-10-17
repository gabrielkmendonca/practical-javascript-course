console.log("The JavaScript Math object allows you to perform mathematical tasks")


console.log("Math Properties (Constants)")

Math.E //returns the value of Euler's Number
Math.PI //returns the value of PI
Math.SQRT2 //returns the value of the square root of 2
Math.SQRT1_2 //returns the value of the square root of 1/2
Math.LN2 //returns the value of the natural logarithm of 2
Math.LN10 //returns the value of the natural logarithm of 10
Math.LOG2E //returns the value of base 2 logarithm of E
Math.LOG10E //returns the value of base 10 logarithm of E


console.log("Math Methods")

let x = 2
let y = 3.8

Math.exp(x) //returns  the value of E to the power of x
Math.expm1(x) //returns  the value of E to the power of x minus 1
Math.round(x) //returns x rounded to its nearest integer
Math.ceil(x) //returns x rounded up to its nearest integer
Math.floor(x) //returns x rounded down to its nearest integer
Math.trunc(x) //returns only the integer part of x
Math.sign(x) //returns if x is negative, null or positive (respective return values: -1; 0; 1)
Math.pow(x, y) //returns the value of x to the power of y
Math.sqrt(x) //returns the square root of x
Math.cbrt(x) //returns the cubic root of x
Math.abs(x) //returns the absolute (positive) value of x
Math.sin(x) //returns the sine of the angle x (given in radians) — convert degrees to radians => Angle in radians = Angle in degrees * PI / 180
Math.sinh(x) //returns the hyperbolic sine of the angle x
Math.asin(x) //returns the arcsine of the angle x (given in radians)
Math.asinh(x) //returns the hyperbolic arcsine of the angle x
Math.cos(x) //returns the cosine of the angle x (given in radians)
Math.acos(x) //returns the arccosine of the angle x (given in radians)
Math.acosh(x) //returns the hyperbolic arccosine of the angle x
Math.tan(x) //returns the tangent of the angle x (given in radians)
Math.tanh(x) //returns the hyperbolic tangent of the angle x
Math.atan(x) //returns the arctangent of the angle x as a numeric value between -PI/2 and PI/2 radians
Math.atan2(y, x) //returns the arctangent of the quotient of its arguments
Math.atanh(x) //returns the hyperbolic arctangent of the angle x
Math.min() //can be used to find the lowest value in a list of arguments
Math.max() //can be used to find the highest value in a list of arguments
Math.random() //returns a random number between 0, and 1
Math.floor(Math.random() * 11) + 1 //returns a random integer between 1, and 10 (chance the numerical values for different ranges)
Math.log(x) //returns the natural logarithm of x
Math.log2(x) // returns the base 2 logarithm of x
Math.log10(x) //returns the base 10 logarithm of x

console.log(`Now, lets take a look on some operations we can do using variables`)

//Assigment (=) 
const a = 5
const b = 2

//Addition (+)
let ad = a + b

//Subtraction (-)
let sub = a - b

//Multiplication (*)
let mult = a * b

//Exponentiation (*)*
let exp = a**2

//Division (/)
let div = a / b

//Division remainder (%)
let rem = a % b

//Increment
let y = 5
y++; //add 1 to the variable

//Decrement
let z = 5
z--; //substract 1 to the variable

//Concatenate (+) - (when working with strings)
let txt1 = 'John'
let txt2 = 'Doe'
let concat = txt1 + '' + txt2 //concatenation joins strings

//Assignment operators (assigns values while operation occurs at the same time)
let x = 0
x += a // adds value to the variable
x -= a // substract value from the variable
x *= a // multiplies the value to the variable
x /= a // divides the variable by the value
x %= a // gets the division remainder of the variable by the value
x **= a // exponentiate the variable by the value

//Comparison
x == 5 //equal to
x === 5 //equal value and equal type 
x != 5 //not equal
x !== 5 //equal value and not equal type
x > 5 //greater than
x < 5 //less than
x >= 5 //greater than or equal to
x <= 5 //less than or equal to

//Logical
"&&" //logical and
"||" //logical or
"!"  //logical not

//Logical Assignment
let t = true
let f = false
let n
let ft = t &&= 10;  //if the first value is true, the second value is assigned 
let ff = f ||= 10; //if the first value is false, the second value is assigned
let fn = n ??= 10;  //if the first value is undefined or null, the second value is assigned

//Ternary Operator (?:)
"logical test" ? "what happens if true" : "what happens if false"
let average = 8.5
average >= 7 ? "Approved" : "Failed"
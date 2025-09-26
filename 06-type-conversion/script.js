console.log("Here we will check out how to convert a data type into another")

let x = "5"
console.log('x variable is a ' + typeof x)

//Convert to integer
let y = Number.parseInt(x)
console.log('y variable is a ' + typeof y)

//Convert to float
let z = Number.parseFloat(x)
console.log('z variable is a ' + typeof z)

//Number shorthand convertion — the JavaScript decides if its an integer or float
let w = Number(x) 
console.log('w variable is a ' + typeof w)

//Convert to string
let s = String(y)
console.log('s variable is a ' + typeof s)
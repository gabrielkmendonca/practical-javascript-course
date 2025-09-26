let s = "This is a JavaScript course"
let n = 1543.5

console.log("we can use some variables formatting, if that fits on what we want")

//Count the string length
console.log(s.length)

//Transform the string to uppercase
console.log(s.toUpperCase())

//Transform the string to lowercase
console.log(s.toLowerCase())

//Make the number have X decimals
console.log(n.toFixed(2))

//Replace . for , on the number
console.log(n.toFixed(2).replace(".", ","))

//Use the number as currency
console.log(n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
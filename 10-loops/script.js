console.log("Loops can execute a block of code a determined number of times, over and over again, as long as the specified condition is true.")
console.log("When working with loops, we have 3 possible statements: while; do while; for.")


console.log("While Loop") //usually used when we don't know exactly how many times it needs to repeat

let i = 1
let text0 = ""

while (i < 10){ //the condition needs to be specified inside the parenthesis
    text0 += `${i}° repetition `  
    i++ //it needs to have a increment/decrement, otherwise it will create an infinite loop
}


console.log("Do While Loop") //executes the code block once, before checking the specified condition

let x = 1
let text1 = ""

do{
    text1 += `${x}° repetition ` 
    x++
}
while(x < 10)
    console.log(text1)


console.log("For Loop") //usually used when we know how many times it needs to repeat

let text2 = ""

for (y = 1; y < 10; y++){ 
/*exp1 - defines the variable; exp2 - defines the condition; exp3 - defines the increment/decrement
----exp1 can be omitted if the variable has been set before the loop
----exp2 can be omitted, but then uses the keyword "break", otherwise it will be an infinite loop
----exp3 can be omitted if the value increments inside the loop */
    text2 += `${y}° repetition `
}
console.log(text2)

console.log("There are 2 statement commonly used in loops: break and continue.")
console.log("The 'break' statement terminates the loop immediately")

//break statement
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

console.log("The 'continue' statement skips the current iteration in a loop, skipping the remaining code")

//continue statement
for (let i = 1; i < 10; i++) {
  if (i === 3) { continue; } //if the variable "i" is equal to 3, the variable "text" will not receive the increment
  text += "The number is " + i + "<br>";
}


console.log("For...in Loop") //iterates over the enumerable properties of an object

const person = {fname:"John", lname:"Doe", age:25};
text = ""

for (let x in person) {
  text += person[x];
}


console.log("For...of Loop") //iterates over the values of iterable objects such as arrays, strings, Maps, Sets, and NodeLists
console.log("Loops can execute a block of code a determined number of times, over and over again, as long as the specified condition is true.")
console.log("When working with loops, we have 3 possible statements: while; do while; for.")

//while loop — usually used when we don't know exactly how many times it needs to repeat
let i = 1
let text0 = ""
while (i < 10){ //the condition needs to be specified inside the parenthesis
    text0 += `${i}° repetition `  
    i++ //it needs to have a increment/decrement, otherwise it will create an infinite loop
}
console.log(text0)

//do while — executes the code block once, before checking the specified condition
let x = 1
let text1 = ""
do{
    text1 += `${x}° repetition ` 
    x++
}
while(x < 10)
    console.log(text1)

//for loop 
let text2 = ""
for (y = 1; y < 10; y++){ //exp1 - defines the variable; exp2 - defines the condition; exp3 - defines the increment/decrement
    text2 += `${y}° repetition `
}
console.log(text2)



console.log("Conditional statements run different code depending on a true or false condition")
console.log("There are five conditional statements: if; if...else; if...else if...else; switch; ternary(shorthand for if...else).")

//if — executes a code block if the statement is true. If the statement is false, nothing happens
if (hour < 18){
    greeting = "Good Day"
}

//if...else — the "else" executes a code block if the statement is false
if (hour < 18){
    greeting = "Good Day"
}else{
    greeting = "Good Evening"
}

//else if — specify a new condition if the first statement if false
if (hour < 10){
    greeting = "Good Morning"
} else if (hour < 20){
    greeting = "Good Day"
}else{
    greeting = "Good Evening"
}

//Ternary Operator (?:) — Shorthand for if...else
let greeting = (hour < 18) ? "Good Day" : "Good Evening";

//Switch — executes the code blocks that matches an expression
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break; //breaks out of the switch block
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  default: //block of code that run if there is no case match
    day = "Saturday";
}
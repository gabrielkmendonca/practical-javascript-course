console.log("The Export Keyword")
console.log(`A module uses the "export" keyword to share values with other files`)


console.log("Default Export —  exports one main value from a module")
console.log("A module can provide one main function plus some helpers")
console.log("Deafult exports has flexible naming — the importer does not need to match the original")

export default function message(){
  return "Jesse is 40 years old"
}


console.log("Named Export — gives a name to each item")
console.log("Items can be exported individually, or wrapped in { } at the bottom")
console.log("Named exports has strictness naming — the importer needs to match the original")

export const name = "Jesse";
export const age = 40;

export {name, age};

export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}
export function multiply(a, b) {
  return a * b;
}
export function divide(a, b) {
  return a / b;
}

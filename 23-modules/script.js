console.log("Modules are code blocks that can export and/or import functions and values")
console.log("Modules let you to break up code into separate files.")

import { add } from './module.js'

let result = add(2,3)
console.log(result)


console.log("Module can be an HTML script, used to import/export blocks of code.")
console.log(`An HTML script using type="module" is treated as a module`)
console.log("Modules are used as they help organizing code and making it easier to maintain and debug code")


console.log("The Import Keyword")
console.log("You can import modules in two ways, based on if they are named exports or default exports")


console.log("Named Imports — exactly matchs named exports in a module enclosed in curly braces")

import {name, age, PI, substract, multiply, divide} from "./module.js"
import {add as addition} from "./module.js" //can rename items using "as"

result = addition(2,3)
let mult = multiply(2,3)


console.log("Default Imports — import the default value from a module")

import text from "./module.js" //default import can receive any name without curly braces

let message = text


console.log("Multiple Imports")

import text, {name, age} from "./module.js" //imports default and some helpers 
import * as module from "./module.js" //imports all named exports from a module as a single object  

let text = module.message


console.log("Dynamic Import — load modules at runtime, rather than at the start of your program")
console.log("Unlike Static Import (which must appear at the top of a file), Dynamic Import can be used anywhere - inside functions, conditionals, event handlers, etc")

async function run(x, y) { //dynamic modules use modern async/await
  const module = await import("./modules.js"); //dynamic module syntax — call in the module only needed
  let result = module.add(x, y); //uses the add function from the modules.js file
  return result
}
run(2,3)

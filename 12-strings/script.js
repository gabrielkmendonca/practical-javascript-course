let txt = " HELLO WORLD "
let text1 = "HELLO"
let text2 = "WORLD"

console.log(`Strings are for storing text written with single or double quotes, and backticks (template strings)`)
console.log(`If you want to display a string that contains quotes, make sure they don't match the quotes surroundings the string, or just use the template string method`)


console.log("Template String")
//strings wirtten with bacsticks

console.log(`Strings written between backticks allow you to insert special functions
    (such as multiline strings),
    as well as variables without the need for concatenation `)


console.log("Basic String Methods")
//take note the index always starts on 0

let length = txt.length //returns the length of the string
let letter = txt.at() //returns the character at a specified index (position)
let char = txt.charAt() //returns the character at a specified index 
let charCode = txt.charCodeAt() //returns the UTF-16 code of the character at a specified index
let code = txt.codePointAt() //returns the code point at a specified index
let conc = text1.concat("",text2) //joins two or more strings. Can be used instead of the plus operator
let part = txt.slice(3,5) //slice out a portion of the string on the determined index. If the value is negative, its counted backwards
let partSubs = txt.substring() //slice out a portion of the string on the determined index. Negative value is treated as 0
let upper = txt.toUpperCase() //convert to upper case
let lower = txt.toLowerCase() //convert to lower case
let form = txt.isWellFormed() //checks if the string is well formed. Returns a boolean value
let formed = txt.toWellFormed() //well forms the string
let trim = txt.trim() //removes whitespace from both sides of a string
let startTrim = txt.trimStart() //removes whitespace from the start of a string
let endTrim = txt.trimEnd() //removes whitespace from the end of a string
let paddedS = txt.padStart(4,"x") //pads a string from the start with another string until reaches a given length
let paddedE = txt.padEnd(4,"x") //pads a string from the end with another string until reaches a given length
let rep = txt.repeat(2) //returns a string with a given number of copies of a string
let newTxt = txt.replace("WORLD","UNIVERSE") //replaces a specified value with another value in a string. 
// Use //i to replace case insensitive, and //g to replace all matches
let newText = txt.replaceAll("WORLD","UNIVERSE") //replaces all matches with another value
txt.split() //convert the string to an array

let txt1 = "Hello World, welcome to the Universe"

console.log("String Search Methods")

let index = txt1.indexOf("the") //returns the index of the first occurrence of a string in a string, or returns -1 if not found 
let lasIndex = txt1.lastIndexOf("the") //returns the index of the last occurrence of a string in a string, or returns -1 if not found
//both methods above accepts a second parameter as the starting position of the research
let search = txt1.search(/welcome/) //search for a string or regular expression and returns its position
let match = txt1.match("come") //returns an array containing the results of matching a string against a string or a regular expression
let iterator = txt1.matchAll("welcome") //returns an iterator containing the results of matching a string or a regular expression
let inc = txt1.includes("World") //checks if the string contains a specified value. Returns a boolean value. Allows a start position exp
let start = txt1.startsWith("Hellow") //checks if the string starts with a specified value. Returns a boolean value. Allows a start position exp
let end = txt1.endsWith("world") //checks if the string ends with a specified value. Returns a boolean value. Allows a end position exp
console.log(`A RegExp (Regular Expression) is a sequence of characters that forms a search pattern, used for:
    -Text searching
    -Text replacing
    -Text validation`)

console.log("RegExp Flags")

/d //performs substring matches — specifies the start and the end of a match
/g //performs a global match — matches all occurrences of the pattern
/i //performs case-insensitive matching
/m //performs multiline matching
/s //allows . (dot) to match line terminators
/u //enables Unicode support 
/v //an upgrade to the /u flag for better Unicode support 
/y //performs a "sticky" search 


console.log("RegExp Flags Properties")

const pattern = /W3Schools/g
const txt = /o/

pattern.dotAll //checks if the /s flag is set
pattern.global //checks if the /g flag is set
pattern.hasIndices //checks if the /d flag is set
pattern.ignoreCase //checks if the /i flag is set
pattern.multiline //checks if the /m flag is set
pattern.sticky //checks if the /y flag is set
pattern.toString() //return the string value of the regular expression
txt.test(pattern) //test for a match in a string
pattern.unicode //checks if the /u flag is set
pattern.unicodeSets //checks if the /v flag is set


console.log("RegExp Methods")

let text0 = "The rain in SPAIN stays mainly in the plain"
let text1 = "Mr Blue has a blue house and a blue car"

text0.match(/ain/) //searches a match and returns an Array of results
text0.match(/ain/g) //searches all matches and returns an Array of results
text1.replace(/blue/, "red") //searches a match and replace the value
text1.replaceAll(/blue/g, "red") //searches all matches and replace the values
text1.search(/blue/) //returns the index of the first match
text1.split(" ") //split the words in a string and returns an Array of results


console.log("RegExp Character Classes")
console.log("Character Classes are characters enclosed in square brackets [], that matches any character from a set within brackets")

const pattern0 = /[a]/g //matches the character between the brackets
const pattern1 = /[^a]/g //matches all characters NOT between the brackets
const pattern2 = /[abc]/g //matches all characters between the brackets
const pattern3 = /[^abc]/g //matches all characters NOT between the brackets
const pattern4 = /[a-z]/g //matches all characters in the range from a to z
const pattern5 = /[^a-z]/g //matches all characters NOT in the range from a to z
const pattern6 = /[0-9]/g //matches all characters in the range from 0 to 9
const pattern7 = /[^0-9]/g //matches all characters NOT in the range from 0 to 9


console.log("RegExp Metacharacters")
console.log("Metacharacters are characters with a special meaning, used to match digits, words, spaces, and more")

const pattern8 = /\d/g //matches digits
const pattern9 = /\D/g //matches non-digits characters
const pattern10 = /\w/g //matches alphanumeric word characters (a-z, A-Z, 0-9, including _ (underscore))
const pattern11 = /\W/g //matches non-alphanumeric word characters
const pattern12 = /\s/g //matches whitespaces characters (space, tab, and newline)
const pattern13 = /\S/g //matches non-spaces characters
const pattern14 = /\ddd/g //matches characters by the octal numer ddd
const pattern15 = /\xhh/g //matches characters by the hexadecimaL number hh
const pattern16 = /\uhhhh/g //matches unicode characters by the hex number hhhh
const pattern17 = /a|b/g //matches "a" or "b"
const pattern18 = /[\b]/ //matches backspace characters
const pattern19 = /\0/ //matches NULL characters
const pattern20 = /\n/ //matches newline characters
const pattern21 = /\f/ //matches form feed characters
const pattern22 = /\r/ //matches carriage returns characters
const pattern23 = /\t/ //matches tab characters
const pattern24 = /\v/ //matches vertical tab characters
const pattern25 = /\p{}/ //matches characters with the given Unicode Property
const pattern26 = /\P{}/ //matches characters NOT with the given Unicode Property


console.log("RegExp Assertions")
console.log(`Assertions matches string/word boundaries and lookarounds (lookaheads and lookbehinds)`)

let text2 = "W3Schools Tutorials"

const pattern27 = /^W3Schools/ //"^" is a string boundary that matches the beginning of a string
const pattern28 = /W3Schools$/ //"$" is a string boundary that matches the end of a string
const pattern29 = /\bW3/ //"\b" is a word boundary that matches the beginning or the end of a word
const pattern30 = /\BSc/ //"\B" is a word boundary that NOT matches the beginning nor the end of a word
const pattern31 = /W3Schools(?= Tutorials)/ //"x(?=y)" is a Lookahead that matches "x" if its followed by "y"
const pattern32 = /W3Schools(?! Hello)/ //"x(?!y)" is a Lookahead that matches "x" if its NOT followed by "y"
const pattern33 = /(?<= W3Schools)Tutorials/  //"(?<=y)x" is a Lookbehind that matches "x" if its preceded by "y"
const pattern34 = /(?<! Hello)Tutorials/  //"(?<!y)x" is a Lookbehind that matches "x" if its NOT preceded by "y"


console.log("RegExp Quantifiers")
console.log("Quantifiers define the numbers of characters or expressions to match")

let text3 = "Hellooo World! Hello W3Schools!"

const pattern35 = /lo+/g //"x+" matches at leats one x
const pattern36 = /lo*/g //"x*" matches 0 or more occurrances of x
const pattern37 = /lo?/g //"x?" matches 0 or one occurrances of x
const pattern38 = /\D{5}/g //"x{n}" matches n occurrances of x 
const pattern39 = /\D{5,8}/g //"x{n, m}" matches from n to m occurances of x
const pattern40 = /\D{8,}/g //"x{n,}" matches n or more occurances of x
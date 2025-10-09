console.log("An Array is an object type designed for storing data collections")
console.log(`Key characteristics of JavaScript arrays are:
            Elements: An array is a list of values, known as elements.
            Ordered: Array elements are ordered based on their index.
            Zero indexed: The first element is at index 0, the second at index 1, and so on.
            Dynamic size: Arrays can grow or shrink as elements are added or removed.
            Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).`)
console.log('To properly declare an array, declare it as a const and use [] to add the elements separated by comas')

const cars = ["Saab", "BMW", "Volvo"] //you can create an empty array, and provide elements later using the array's index


console.log("Basic Array Methods")

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myGirls = ["Cecilie", "Lone"]
const myBoys = ["Emil", "Tobias", "Linus"]
const myArr = [[1,2],[3,4],[5,6]]
const numbers = [4, 9, 16, 25, 29]

let size = fruits.length //returns the length (size) of an array
let myList = fruits.toString() //returns the elements of an array as a comma separated string
let fruit = fruits.at() //returns an indexed element from an array — same as "fruits.at[]"
fruits.join(" * ") //joins all array elements into a string, and in addition you can specify the separator
fruits.pop() //removes the last element from an array
let pop = fruits.pop() //returns the value that was "popped out"
fruits.push("Kiwi") //adds a new element to the end of a array
let push = fruits.push("Kiwi") //returns the new array length
fruits.shift() //removes the first array element and "shifts" all other elements to a lower index
let shift = fruits.shift() //returns the value that was "shifted out"
fruits.unshift("Lemon") //adds a new element to be beginning of the array, and "unshifts" older elements
let unshift = fruits.unshift("Lemon") //returns the new array length
fruits[fruits.length] = "Kiwi" //easy way to append a new element to an array
const myChildren = myGirls.concat(myBoys) //creates a new array by concatenating existing arrays — can also take strings as arguments
fruits.copyWithin(2, 0) //copies array elements to another position in an array — the first element is the one that is being overwritten, the second is the one being copied
const newArr = myArr.flat() //creates a new array with sub-array elements concatenated to a specified depth
const flat = myArr.flatMap(x => [x, x * 10]); //maps all elements of an array and then creates a new array by flattening the array
fruits.splice(2, 0, "Lemon", "Kiwi"); //first parameter defines where should be added, second parameter defines how many should be removed, and the other parameters are the elements that will be added
const spliced = fruits.toSpliced(2, 0, "Lemon", "Kiwi") //the same as splice, but created a new array instead of modifying the existing one
const citrus = fruits.slice(1) //slices out a piece of an array into a new array — can take 2 arguments (starting and ending points)


console.log("Array Search Methods")

let position = fruits.indexOf("Apple") //searches an array for an element value and returns its position — returns "-1" if not found
let lastPosition = fruits.lastIndexOf("Apple") //returns the position of the last occurrence of the specified element
let inc = fruits.includes("Mango") //checks if an element is present in an array
let firstValue = numbers.find(x => x > 18) //returns the value of the first array element that satisfies a condition
let firstIndex = numbers.findIndex(x => x > 18) //returns the index of the first array element that satisfies a condition
let lastValue = numbers.findLast(x => x > 18) //returns the value of the last array element that satisfies a condition
let lastIndex = numbers.findLastIndex(x => x > 18) //returns the index of the last array element that satisfies a condition


console.log("Array Alphabetic Sort")


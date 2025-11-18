console.log("A Map object holds key-value pairs where the keys can be any datatype.")
console.log(`There are two ways of creating a Map:
    - passing an array to "new Map()"
    - create a map and use "Map.set()"`)

const fruits1 = new Map([["apples", 500], ["bananas", 300], ["oranges", 200]])

const fruits2 = new Map()
fruits2.set("apples", 500)
fruits2.set("bananas", 300)
fruits2.set("oranges", 200)
fruits2.set("apples", 200) //can also be used to change existing values


console.log("Map Methods")

new Map() //map constructor
fruits1.set() //add elements to the map
fruits1.get("apples") //get the value of a key in a map
fruits1.size //return the number of elements in a map
fruits1.delete("apples") //removes a map element
fruits1.clear() //removes all the elements from a map
fruits2.has("apples") //checks if a key exists in a map
fruits2.forEach(function(){}) //invokes a callback for each key-value pair in a map
fruits2.entries() //returns an iterator object with the [key,values] in a map
fruits2.keys() //returns an iterator object with the keys in a map
fruits2.values() //returns an iterator object with the values in a map
const result = Map.groupBy(fruits2, myCallback) //groups elements of an object according to string values returned from a callback function
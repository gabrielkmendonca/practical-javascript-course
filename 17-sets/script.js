console.log("A JS Set is a collection of unique values (occur once in a set), that can be of any type, primitive values or objects")
console.log(`There are two ways of creating a set:
        - passing an array to "new Set()"
        - creating an empty set and adding the values with "add()"`)

const letters0 = new Set(["a", "b", "c", "d", "e", "f", "g", "h"])

const letters1 = new Set(["a", "b", "c"])        

const letters2 = new Set()
letters2.add("d")
letters2.add("e")
letters2.add("f")

const letters3 = new Set()
const f = "f" 
const g = "g"
const h = "h"
letters3.add(f)
letters3.add(g)
letters3.add(h)
letters3.add(h) //if you add equal elements, only the first one will be saved


console.log("Basic Sets Methods")

new Set() //set constructor
letters1.add() //add an element to the set — if add equal elements, only the first will be saved
letters1.delete() //removes an element from a set
letters0.clear() //removes all elements from a set
letters1.size //counts the amount of elements
let answer = letters2.has("e") //checks if a specified value exists in a set
letters1.forEach() //invokes a function for each set element
const values = letters3.values() //returns an iterator object with the values in a set
const entry = letters2.entries() //returns an iterator with [value,value] pairs from a set


console.log("Logical Sets Methods")

const uni = letters1.union(letters2) //return the union of two sets
const inter = letters2.intersection(letters3) //returns the intersection of two sets
const diff = letters2.difference(letters3) //returns the difference between two sets
const symDiff = letters2.symetricDiferrence(letters3) //returns the symetric difference between two sets
let answerSub = letters2.isSubsetOf(letters3) //checks if all elements in this set is also elements in the argument set
let answerSup = letters2.isSupersetOf(letters3) //checks if all elements in the argument are also in this set
let answerDis = letters1.isDisjointFrom(letters2) //checks if the argument has no elements in common with the argument set

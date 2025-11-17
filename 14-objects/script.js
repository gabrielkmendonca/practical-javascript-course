console.log(`An Object is a variable that can hold many variables. Objects are collections of key-value pairs, where each key (known as property names) has a value.`)
console.log(`Declare objects with the const keyword. By that way you cannot later reassign it to point to a different variable, but can still modify its properties and values. `)

console.log("Creating Objects")

const car = {type:"Fiat", model:"500", color:"white"}; //An object literal is a list of "key:value" pairs inside curly braces { }


console.log("Object Properties")

console.log(`There are 2 ways of access objects properties:
        - objectName.propertyName
        - objectName["propertyName"]`)


console.log("Object Methods")

const fruits = [["apples", 300],["pears", 900],["bananas", 500]];
const person1 = {firstName: "John",lastName: "Doe",age: 50,eyeColor: "blue"};
const person2 = {firstName: "Anne",lastName: "Smith"};
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

Object.assign(person1, person2) //copies properties from one or more source objects to a target object
const man = Object.create(fruits) //creates an object from an existing object
let text0 = Object.entries(fruits) //returns an array of the key/value pairs in an object
const myObj = Object.fromEntries(fruits) //creates an object from a list of key/value pairs
let values = Object.values(fruits) //returns a single dimension array of the object values
let keys = Object.keys(fruits) //returns an array with the keys of an object
const result = Object.groupBy(fruits, myCallback) //groups elements of an object according to string values returned from a callback function


console.log("Object Constructor Function")
console.log("Sometimes we need to create many objects of the same type, for that we use function to create an object type.")

function Person(first, last, age, eye){
    this.firstName = first; 
    this.lastName = last; 
    this.age = age; 
    this.eyeColor = eye;
    this.nationality = "Brazilian" //A value given to a property will be a default value for all objects created by the constructor
}
const myFather = new Person("John", "Doe", 50, "blue");
myFather.nationality = "English" //Adding a property to a created object
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");


console.log("Explicit Function Binding")

const person3 = { fullName: function(city) { return this.firstName + " " + this.lastName + " " + city}}
const person4 = {firstName:"John", lastName: "Doe"}
const member = {firstName:"Hege", lastName: "Nilsen"}

person3.fullName.call(person4); //call an object method with another object as argument
let fullName = person3.fullName.bind(member) //borrow a method from another object
person3.fullName.apply(person4, ["Oslo"]) //call an object method with another object as argument, taking/accepting arguments as an array


console.log("Object Destructuring")
console.log("The destructuring assignment syntax unpack object properties into variables")

const person5 = {firstName: "John", lastName: "Doe", age: 50};

let {firstName, lastName} = person5 //assigns variables containing the object values
let {firstName : name} = person5 //Object Property Alias — assign the firstName value to "name"


console.log("Object Prototype Property")
console.log("The JavaScript prototype property allows you to add new properties to object constructors")

Person.prototype.pet = "Dog" //add a property called "pet" to the Person object constructor, with "dog" as the default value
Person.prototype.fullName = function() {return this.firstName + " " + this.lastName} //prototype property also allows to add new methods


console.log("Object Protection Methods")

const vehicle = {type:"Fiat", model:"500", color:"white"} //using const you can not re-assign the object
Object.preventExtensions(vehicle) //prevents adding properties to an object
let ext = Object.isExtensible(vehicle) //checks if an object is extensible
Object.seal(vehicle) //prevents additions or deletions of new properties
let seal = Object.isSealed(vehicle) //checks if an object is sealed
Object.freeze(vehicle) //prevents any changes to an object. No modification, addition or deletion of properties are allowed
let frz = Object.isFrozen(vehicle) //checks if an object is frozen
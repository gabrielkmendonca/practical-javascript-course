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

const man = Object.create(person) //Object.create() method creates an object from an existing object
const myObj = Object.fromEntries(fruits) //Object.fromEntries() method creates an object from iterable key / value pairs
Object.assign(person1, person2) //Object.assign() method copies properties from one or more source objects to a target object


console.log("Object Constructor Function")
console.log("Sometimes we need to create many objects of the same type, for that we use function to create an object type.")

function person(first, last, age, eye){
    this.firstName = first; 
    this.lastName = last; 
    this.age = age; 
    this.eyeColor = eye;
    this.nationality = "Brazilian" //A value given to a property will be a default value for all objects created by the constructor
}
const myFather = new person("John", "Doe", 50, "blue");
myFather.nationality = "English" //Adding a property to a created object
const myMother = new person("Sally", "Rally", 48, "green");
const mySister = new person("Anna", "Rally", 18, "green");
const mySelf = new person("Johnny", "Rally", 22, "green");


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


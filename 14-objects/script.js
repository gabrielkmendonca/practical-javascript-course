console.log(`An Object is a variable that can hold many variables. Objects are collections of key-value pairs, where each key (known as property names) has a value.`)
console.log(`You should declare objects with the const keyword. By that way you cannot later reassign it to point to a different variable, but can still modify its properties and values. `)

console.log("Creating Objects")

const car = {type:"Fiat", model:"500", color:"white"}; //An object literal is a list of "key : value" pairs inside curly braces { }


console.log("Object Properties")

console.log(`There are 2 ways of access objects properties:
        - objectName.propertyName
        - objectName["propertyName"]`)



console.log("Object Constructor Functions")
//We can use the "new" property to create many objects

function Person(first, last, age, eye){
    this.firstName = first; 
    this.lastName = last; 
    this.age = age; 
    this.eyeColor = eye;
}
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");

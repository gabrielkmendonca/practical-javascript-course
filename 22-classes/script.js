console.log("JavaScript Classes are templates for JavaScript Objects")


console.log("JavaScript Class Syntax")
console.log(`Use the keyword "class" to create a class, and ALWAYS add a method named "constructor()"`)

class Car { //this creates a class named "car"
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar1 = new Car("Ford", 2014) //uses the class to create an object
const myCar2 = new Car("Audi", 2019) //the constructor method is called automatically when a new object is created


console.log("Class Inheritance")

class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

class Model extends Car { //use the "extends" keyword to inherits all the methods from another class
  constructor(brand, mod) {
    super(brand); //"super()" calls the parent's constructor method and gets access to the it's properties and methods
    this.model = mod;
  }
}

let myCar = new Model("Ford", "Mustang");
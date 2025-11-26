console.log(`Metaprogramming is writing code that can:
    -> Inspect Object Properties
    -> Intercept Operations
    -> Control Operations
    -> Modify Objects
    -> Modify Properties
    -> Modify Functions
    -> Modify classes
    -> Generate code dynamically`)
console.log("Normally, code handles data. With metaprogramming, code handles code")


console.log("Proxies for Metaprogramming")
console.log("A Proxy is an object that can wrap other objects and lets you control operations on them — most commonly used with Reflect")
console.log("A typical Proxy example is logging of object changes")

const user = { name: "Jan", age: 40 };

//Create a Proxy
const proxy = new Proxy(user, {
  get(target, property) {
    log("Getting: " + property);     // safe forwarding
    return Reflect.get(target, property);
  },
  set(target, property, value) {
    log("Setting: " + property);     // safe forwarding
    return Reflect.set(target, property, value);
  }
});

proxy.name = "John";
proxy.age = 42;

let text1 = proxy.name;
let text2 = proxy.age

console.log(`Proxies allow you to:
  - Add logging
  - Validate changes
  - Auto-generate properties
  - Protect sensitive data
  - Create virtual or computed objects
  - Intercept function calls
  - Create reactive systems (like Vue.js)`)


console.log("Proxy Traps")

get()	//A property is read
set()	//A property is changed
has()	//Using the "in" operator
deleteProperty()	//A property is deleted
apply()	//A function is called
construct()	//An object is cretated (with new)
getOwnPropertyDescriptor()	//A property descriptor is retrieved
defineProperty()	//A property is defined
getPrototypeOf()	//A prototype is retrieved
setPrototypeOf()	//A prototype is set
isExtensible()	//Extensibility is checked
preventExtensions()	//Existenibility is prevented
ownKeys()	//Properties are listed


console.log("Proxy Trap Handler")

({
  get(obj, prop, receiver) { //triggered by: proxy.property OR proxy["property"] OR object.property()
//obj -> target object; prop -> the property being accessed; receiver -> this value for getters (usually the proxy itself)
    return Reflect.get(obj, prop, receiver); //returns the property value
}
})

({
  set(obj, prop, value, receiver) { //triggered by: proxy.property = value OR proxy["property"] = value
//obj -> target object; prop -> the property being accessed; value -> new property value; receiver -> the this value for setters (usually the proxy itself)
    return Reflect.set(obj, prop, value, receiver); //returns TRUE or FALSE
}
})

({
  has(obj, prop) { //triggered by: "property" in proxy
//obj -> target object; prop -> the property being accessed; receiver -> the this value for setters (usually the proxy itself)
    return Reflect.has(obj, prop); //returns TRUE or FALSE
}
})

({
  deleteProperty(obj, prop) { //triggered by: delete proxy.property
//obj -> target object; prop -> the property to delete
    return Reflect.deleteProperty(obj, prop); //returns TRUE for sucess and FALSE for failure
}
})

({
  apply(func, thisArg, args) { //triggered by: proxy() OR proxy.call() OR proxy.apply()
//func -> the callable function; thisArg - the this argument for the call; args -> the function arguments array
    return Reflect.apply(func, this, args); //returns the return value of the function
}
})

({
  construct(obj, args, newTarget) { //triggered by: new proxy()
//obj -> the constructor object; args -> the array of arguments passed; newTarget -> the constructor
    return Reflect.construct(obj, args, newTarget); //returns an Object
}
})

({
  getOwnPropertyDescriptor(obj, prop) { //triggered by: Object.getOwnPropertyDescriptor(obj, prop)
//obj -> the target object; prop -> the property to describe
    return Reflect.getOwnPropertyDescriptor(obj, prop); //returns a Property descriptor — undefined
}
})

({
  defineProperty(obj, prop, descriptor) { //triggered by: Object.defineProperty()
//obj -> the target object; prop -> the property to describe; descriptor -> the property descriptor
    return Reflect.defineProperty(obj, prop, descriptor); //returns TRUE if sucess
}
})

({
  getPrototypeOf(obj) { //triggered by: Object.getPrototypeOf()
//obj -> the target object
    return Reflect.getPrototypeOf(obj); //returns an Object — NULL
}
})

({
  setPrototypeOf(obj, prototype) { //triggered by: Object.settPrototypeOf()
//obj -> the target object; prototype -> the new prototype or null
    return Reflect.setPrototypeOf(obj, prototype); //returns an Object — NULL
}
})

({
  isExtensible(obj) { //triggered by: Object.isExtensible()
//obj -> the target object
    return Reflect.isExtensible(obj); //returns TRUE or FALSE
}
})

({
  preventExtensions(obj) { //triggered by: Object.preventExtensions()
//obj -> the target object
    return Reflect.preventExtensions(obj); //returns TRUE for sucess
}
})

({
  ownKeys(obj) { //triggered by: Object.keys() OR Object.getOwnPropertyNames() OR Object.getOwnPropertySymbols()
//obj -> the target object
    return Reflect.ownKeys(obj); //returns an Array of keys with no duplicates
}
})


console.log("Meta Reflect")
console.log("Reflect is a JavaScript object with methods for low-level operations on objects — works perfectly with Proxy")

const person = {name: "John", lastname: "Doe", age: 45};

function greet(message) {
  return message + ", " + this.name;
}

const newUser = {}

let answer = Reflect.has(person, "name") //checking if a property exists
Reflect.deleteProperty(person, "name") //deleting a property
let age = Reflect.get(person, "age") //getting a property
Reflect.set(person, "age", 41) //setting a property
let msg = Reflect.apply(greet, person, ["Hello"]) //calling a function
const color = Reflect.construct(Array, ["red", "blue", "green"]) //creating an Object (like new)
Reflect.defineProperty(newUser, "id", {value: 123}) //defining a property
let keys = Reflect.ownKeys(person) //getting all object keys
answer = Reflect.isExtensible(person) //checking if the object can grow
Reflect.preventExtensions(person) //perventing object from growing
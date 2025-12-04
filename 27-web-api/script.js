console.log("API stands for Application Programming Interface — it can extend the functionality of the browser, greatly simplify complex functions, and provide easy syntax to complex code")
console.log(`A Web API is an application programming interface for the Web.
A Browser API can extend the functionality of a web browser.
A Server API can extend the functionality of a web server.`)

console.log("All browsers have a set of built-in Web APIs to support complex operations, and to help accessing data. Third party APIs are not built into your browser, to use these APIs, you will have to download the code from the Web")


console.log("Validation API")

console.log(`Constraint Validation DOM Methods:
    -> checkValidity()	    //Returns true if an input element contains valid data
    -> setCustomValidity()	//Sets the validationMessage property of an input element`)

console.log(`Constraint Validation DOM Properties:
    -> validity            //Contains boolean properties related to the validity of an input element.
    -> validationMessage   //Contains the message a browser will display when the validity is false.
    -> willValidate        //Indicates if an input element will be validated.`)

console.log(`Validity Properties:
    -> customError         //Set to true, if a custom validity message is set.
    -> patternMismatch     //Set to true, if an element's value does not match its pattern attribute.
    -> rangeOverflow       //Set to true, if an element's value is greater than its max attribute.
    -> rangeUnderflow      //Set to true, if an element's value is less than its min attribute.
    -> stepMismatch        //Set to true, if an element's value is invalid per its step attribute.
    -> tooLong             //Set to true, if an element's value exceeds its maxLength attribute.
    -> typeMismatch        //Set to true, if an element's value is invalid per its type attribute.
    -> valueMissing        //Set to true, if an element (with a required attribute) has no value.
    -> valid               //Set to true, if an element's value is valid.`)


console.log("History API")
console.log("The Web History API provides easy methods to access the windows.history object")

console.log(`History Object Properties:
    -> length	           //Returns the number of URLs in the history list`)

console.log(`History Object Methods:
    -> window.history.back();    //loads the previous URL in the windows.history list
    -> window.history.go(-2);    //loads a specific URL from the history list
    -> window.history.forward(); //Loads the next URL in the history list`)


console.log("Storage API")
console.log("The Web Storage API is a simple syntax for storing and retrieving data in the browser")

console.log(`Related Pages for Web Storage API:
    -> window.localStorage	      //Allows to save key/value pairs in a web browser. Stores the data with no expiration date
    -> window.sessionStorage	  //Allows to save key/value pairs in a web browser. Stores the data for one session`)

console.log(`Storage Object Properties and Methods:
    -> key(n)	                  //Returns the name of the nth key in the storage
    -> length	                  //Returns the number of data items stored in the Storage object
    -> getItem(keyname)	          //Returns the value of the specified key name
    -> setItem(keyname, value)	  //Adds a key to the storage, or updates a key value (if it already exists)
    -> removeItem(keyname)	      //Removes that key from the storage
    -> clear()	                  //Empty all key out of the storage`)


console.log("Workers API")
console.log("A web worker is a JavaScript running in the background, independently of other scripts, without affecting the performance of the page")
console.log("Create the web worker in an external JavaScript and call it from an HTML page")
console.log("When a web worker object is created, it will continue to listen until it is terminated. To terminate a web worker, use the terminate() method")


console.log("Fetch API")
console.log("The Fetch API interface allows web browser to make HTTP requests to web servers — No need for XMLHttpRequest anymore")

//the example below fetches a file and displays the content
fetch(file)
.then(x => x.text())
.then(y => myDisplay(y));

//since Fetch is based on async and await, the example above might be easier to understand like this
async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  myDisplay(y);
}


console.log("Geolocation API")
console.log("The HTML Geolocation API is used to get the geographical position of a user — Since this can compromise privacy, the position is not available unless the user approves it")
console.log("The Geolocation API will only work on secure contexts such as HTTPS.")

navigator.geolocation.getCurrentPosition(showPosition); //the getCurrentPosition() method is used to return the user's position

console.log("The getCurrentPosition() Method - Return Data")
console.log(`The getCurrentPosition() method returns an object on success. The latitude, longitude and accuracy properties are always returned. The other properties are returned if available:
    -> coords.latitude	          //The latitude as a decimal number                  //(always returned)
    -> coords.longitude	          //The longitude as a decimal number                 //(always returned)
    -> coords.accuracy	          //The accuracy of position                          //(always returned)
    -> coords.altitude	          //The altitude in meters above the mean sea level   //(returned if available)
    -> coords.altitudeAccuracy	  //The altitude accuracy of position                 //(returned if available)
    -> coords.heading	          //The heading as degrees clockwise from North       //(returned if available)
    -> coords.speed	              //The speed in meters per second                    //(returned if available)
    -> timestamp	              //The date/time of the response                     //(returned if available)`)

console.log(`The Geolocation object also has other interesting methods:
    -> watchPosition()   //Returns the current position of the user and continues to return updated position as the user moves
    -> clearWatch()      //Stops the watchPosition() method.`)
console.log("JSON (JavaScript Object Notation) is a plain text format for storing and transporting data, similar to the syntax for creating JavaScript objects.")
console.log("JSON make it easy to send and store data between computers. JSON is text only and language independent (the syntax is derived from JavaScript object syntax)")

'{"name":"John", "age":30, "car":null}'


console.log("JSON and JavaScript")

console.log("The JSON format is syntactically identical to the code for creating JavaScript objects. Because of this, a JavaScript program can easily convert JSON data into native JavaScript objects")
console.log(`JavaScript has a built in function for converting JSON strings into JavaScript objects -> JSON.parse()
and also has a built in function for converting an object into a JSON string -> JSON.stringify()`)


console.log("Storing Data")

console.log("When storing data, the data has to be a certain format, and regardless of where you choose to store it, text is always one of the legal formats. JSON makes it possible to store JavaScript objects as text.")
/*Text that defines an employees object with an array of 3 employee objects:

{
"employees":[                                  —> JSON arrays are written inside square brackets
  {"firstName":"Peter", "lastName":"Jones"}    —> JSON objects are written inside curly braces
  {"firstName":"John", "lastName":"Doe"},      —> JSON data is written as name/value pairs  
  {"firstName":"Anna", "lastName":"Smith"},    —> Double quotes are required and string values must be written with double quotes
]
}
*/


console.log("Converting a JSON Text to a JavaScript Object")

//First, create a JavaScript string containing JSON syntax
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
//Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object
const obj = JSON.parse(text);
//Then you can use the new JavaScript object in your page


console.log("JSON vs XML")
console.log("Both JSON and XML can be used to receive data from a web server")

/*
JSON:

{"employees":[
  { "firstName":"John", "lastName":"Doe" },
  { "firstName":"Anna", "lastName":"Smith" },
  { "firstName":"Peter", "lastName":"Jones" }
]}


XML:

<employees>
  <employee>
    <firstName>John</firstName> <lastName>Doe</lastName>
  </employee>
  <employee>
    <firstName>Anna</firstName> <lastName>Smith</lastName>
  </employee>
  <employee>
    <firstName>Peter</firstName> <lastName>Jones</lastName>
  </employee>
</employees>
*/

console.log(`Likes:
  -> Both JSON and XML are "self describing" (human readable)
  -> Both JSON and XML are hierarchical (values within values)
  -> Both JSON and XML can be parsed and used by lots of programming languages
  -> Both JSON and XML can be fetched with an XMLHttpRequest
Unlikes:
  -> JSON doesn't use end tag
  -> JSON is shorter
  -> JSON is quicker to read and write
  -> JSON can use arrays
  -> XML has to be parsed with an XML parser while JSON can be parsed by a standard JavaScript function`)


console.log("JSON Data Types")
console.log(`In JSON, values must be one of the following data types:
  -> string                 -> {"name":"John"}
  -> number                 -> {"age":30}
  -> object (JSON object)   -> { "employee":{"name":"John", "age":30, "city":"New York"} }
  -> array                  -> { "employees":["John", "Anna", "Peter"] }
  -> boolean                -> {"sale":true}
  -> null                   -> {"middlename":null} `) 
console.log(`JSON values CANNOT be one of the following data types:
  -> function
  -> date
  -> undefined`)


console.log("JSON Data Parse")
console.log("A common use of JSON is to exchange data to/from a web server. When receiving data from a web server, the data is always a string. Parse the data with JSON.parse(), and the data becomes a JavaScript object.")

/*
-> Imagine receiving the following text from a Web Server, and use the function JSON.parse() to convert text into a JavaScript object:

'{"name":"John", "age":30, "city":"New York"}'
const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');


-> When using the JSON.parse() on a JSON derived from an array, the method will return a JavaScript array, instead of a JavaScript object

const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
*/

console.log("When receiving data from a web server, the data is always a string. Parse the data with JSON.parse(), and the data becomes a JavaScript object.")

/* 
-> Imagine having the following object in JavaScript, and use the function JSON.stringify() to convert it into a string:

const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);

-> The result will be a string following the JSON notation, ready to be sent to a server
*/


console.log("JSON From a Server")
console.log("We can request JSON from the server by using an AJAX request. As long as the response from the server is written in JSON format, it's possible to parse the string into a JavaScript object.")

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj.name;
};
xmlhttp.open("GET", "json_demo.txt");
xmlhttp.send();


console.log("JSON with Padding (JSONP)")
console.log("JSONP is a method for sending JSON data without worrying about cross-domain issues. JSONP does not use the XMLHttpRequest object, it uses the <script> tag instead")
console.log("Requesting a file from another domain can cause problems, due to cross-domain policy, while requesting an external script from another domain does not have this problem")

/*  —> script tag that targets a PHP file example:
<script src="demo_jsonp.php">   
*/

/*  —> example of a file on the server, that wraps the result inside a function call — the function must exist on the client:
<?php
$myJSON = '{ "name":"John", "age":30, "city":"New York" }';

echo "myFunc(".$myJSON.");";
?>
*/

/*  —> client side function ready to handle the JSON data:
function myFunc(myObj) {
  document.getElementById("demo").innerHTML = myObj.name;
}
*/
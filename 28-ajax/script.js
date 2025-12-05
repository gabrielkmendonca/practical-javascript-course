console.log(`With AJAX (Asynchronous JavaScript And XML) you can:
    -> Read data from a web server - after the page has loaded
    -> Update a web page without reloading the page
    -> Send data to a web server - in the background`)
console.log("AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.")


console.log("The XMLHttpRequest Object")
console.log("The XMLHttpRequest object is used to request data from a server")

//create an XMLHttpRequest object
xhttp = new XMLHttpRequest(); 
//create a callback function
xhttp.onload = function() { 

}
//send a request to a server
xhttp.open("GET", "ajax_info.txt");
xhttp.send();


console.log("XMLHttpRequest Object Methods")

new XMLHttpRequest()	              //Creates a new XMLHttpRequest object
abort()	                              //Cancels the current request
getAllResponseHeaders()	              //Returns header information
getResponseHeader()	                  //Returns specific header information
open(method, url, async, user, psw)	  //Specifies the request 
/*
-> method: the request type GET or POST; 
-> url: the file location; 
-> async: true (asynchronous) or false (synchronous); 
-> user: optional user name; 
-> psw: optional password
*/
send()	                              //Sends the request to the server — Used for GET requests
send("string")	                      //Sends the request to the server — Used for POST requests
setRequestHeader("header, value")	  //Adds a label/value pair to the header to be sent


console.log("XMLHttpRequest Object Properties")

onload	                              //Defines a function to be called when the request is received (loaded)
onreadystatechange	                  //Defines a function to be called when the readyState property changes
readyState	                          //Holds the status of the XMLHttpRequest.
/*
-> 0: request not initialized
-> 1: server connection established
-> 2: request received
-> 3: processing request
-> 4: request finished and response is ready
*/
responseText	                      //Returns the response data as a string
responseXML	                          //Returns the response data as XML data
status	                              //Returns the status-number of a request
/*
-> 200: "OK"
-> 403: "Forbidden"
-> 404: "Not Found"
*/
statusText	                          //Returns the status-text (e.g. "OK" or "Not Found")


console.log("Request — GET or POST")
console.log(`GET is simpler and faster than POST, and can be used in most cases. However, always use POST requests when:
    -> A cached file is not an option (update a file or database on the server)
    -> Sending a large amount of data to the server (POST has no size limitations)
    -> Sending user input (which can contain unknown characters), POST is more robust and secure than GET`)

//A simple GET request
xhttp.open("GET", "demo_get.asp");
xhttp.send();
//In the example above, you may get a cached result. To avoid this, add a unique ID to the URL
xhttp.open("GET", "demo_get.asp?t=" + Math.random());
xhttp.send();
//If you want to send information with the GET method, add the information to the URL:
xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford");
xhttp.send();

//A simple POST request
xhttp.open("POST", "demo_post.asp");
xhttp.send();
//To POST data like an HTML form, add an HTTP header with setRequestHeader(). Specify the data you want to send in the send() method
xhttp.open("POST", "ajax_test.asp");
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford");


console.log("Server Response")

console.log(`Server Response Properties:
    -> responseText                          //returns the server response as a JavaScript string
    -> responseXML                           //returns the server response as an XML DOM object`)
console.log(`Server Response Methods:
    -> getResponseHeader()	                 //returns specific header information from the server response
    -> getAllResponseHeaders()	             //returns all header information from the server response`)

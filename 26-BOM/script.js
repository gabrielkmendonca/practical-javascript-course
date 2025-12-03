console.log(`The Browser Object Model (BOM) allows JavaScript to "talk to" the browser`)


console.log("The Window Object")
console.log("The window object is supported by all browsers. It represents the browser's window.")
console.log("All global JavaScript objects, functions, and variables automatically become members of the window object.")

window.document.getElementById("header"); //is the same as -> document.getElementById("header");

console.log("Window Size")

window.innerHeight //returns the inner height of the browser window (in pixels)
window.innerWidth //returns the inner width of the browser window (in pixels)

console.log("Other Window Methods")

window.open() //open a new window
window.close() //close the current window
window.moveTo() //move the current window
window.resizeTo() //resize the current window


console.log("Window Screen")
console.log("The window.screen object contains information about the user's screen — can be written without the window prefix")

screen.width //returns the width of the visitor's screen in pixels
screen.height //returns the height of the visitor's screen in pixels
screen.availWidth //returns the width of the visitor's screen, in pixels, minus interface features like the Windows Taskbar
screen.availHeight //returns the height of the visitor's screen, in pixels, minus interface features like the Windows Taskbar
screen.colorDepth //returns the number of bits used to display one color — 24 bits (True Colors) or 32 bits (Deep Colors)
screen.pixelDepth //returns the pixel depth of the screen in bits


console.log("Window Location")
console.log("The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page — can be written without the window prefix")

window.location.href //returns the href (URL) of the current page
window.location.hostname //returns the domain name of the web host of the current page
window.location.pathname //returns the path and filename of the current page
window.location.protocol //returns the web protocol used (http: or https:)
window.location.port //returns the number of the internet host port of the current page
window.location.assign() //loads a new document


console.log("Window History")
console.log("The window.history object contains the browsers history — can be written without the window prefix")

history.back() //loads the previous URL in the history list
history.forward() //loads the next URL in the history list


console.log("Window Navigator")
console.log("The window.navigator object contains information about the visitor's browser — can be written without the window prefix")

navigator.cookieEnabled //checks if cookies are enabled
navigator.language //returns the browser's language
navigator.onLine //checks if the browser is online


console.log("Window Popup Boxes")
console.log(`JavaScript has three kinds of popup boxes:
    -> Window Alert box
    -> Window Confirm box
    -> Window Prompt box`)

window.alert(/*sometext*/) //make sure information comes through to the user — the user will have to click "OK" to proceed
window.confirm(/*sometext*/) //user verify or accept something — the user will have to click either "OK" or "Cancel" to proceed
window.prompt(/*sometext","defaultText*/) //input a value before entering a page — the user will have to click either "OK" or "Cancel" to proceed after entering an input value


console.log("Window Timing Events")
console.log("The window object allows execution of code at specified time intervals, called timing events")

window.setTimeout(/*function, milliseconds*/) //executes a function, after waiting a specified number of milliseconds
window.clearTimeout(/*timeoutVariable*/) //stops the execution of the function specified in setTimeout()
window.setInterval(/*function, milliseconds*/) //repeats a given function at every given time-interval
window.clearInterval(/*timerVariable*/) //stops the executions of the function specified in the setInterval() method


console.log("Window Cookies")
console.log("Cookies are data, stored in small text files, on your computer — invented to remember information about the user, even if the connection is shut down")
console.log("Cookies are saved in name-value pairs like: username = John Doe")

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC"; //create/change a cookie — expiry date is optional, by default, the cookie is deleted when the browser is closed
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/"; //you can tell the browser what path the cookie belongs to
let x = document.cookie; //reads cookies — returns all cookies in one string much like: cookie1=value; cookie2=value; cookie3=value;
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; //to delete a cookie just set the expire parameter to a past date
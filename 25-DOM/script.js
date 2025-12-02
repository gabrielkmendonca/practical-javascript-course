console.log("With the HTML DOM (Document Object Model), JavaScript can access and change all the elements of an HTML document.")
console.log(`With the object model, JavaScript gets all the power it needs to create dynamic HTML:
    -> change all the HTML elements in the page
    -> change all the HTML attributes in the page
    -> change all the CSS styles in the page
    -> remove existing HTML elements and attributes
    -> add new HTML elements and attributes
    -> react to all existing HTML events in the page
    -> create new HTML events in the page`)


console.log("DOM Methods")

document.getElementById(/*id*/)	//Find an element by element id
document.getElementsByTagName(/*name*/)	//Find elements by tag name
document.getElementsByClassName(/*name*/) //Find elements by class name
document.querySelectorAll(/*CSS selector*/) //Find all HTML elements that match a specified CSS selector
element.setAttribute(/*attribute, value*/) //Change the attribute value of an HTML element
document.createElement(/*element*/)	//Create an HTML element
document.removeChild(/*element*/) //Remove an HTML element
document.appendChild(/*element*/) //Add an HTML element
document.replaceChild(/*new, old*/)	//Replace an HTML element
document.write(/*text*/) //Write into the HTML output stream
document.getElementById(/*id*/).onclick = function(){/*code*/}	//Adding event handler code to an onclick event


console.log("DOM Properties")

element.innerHTML =  "new html content"	//Change the inner HTML of an element
element.attribute = "new value"	//Change the attribute value of an HTML element
element.style.property = "new style" //Change the style of an HTML element
document.baseURI //Returns the absolute base URI of the document	
document.body //Returns the <body> element	
document.cookie //Returns the document's cookie	
document.doctype //Returns the document's doctype	
document.documentElement //Returns the <html> element	
document.documentMode //Returns the mode used by the browser	
document.documentURI //Returns the URI of the document	
document.embeds //Returns all <embed> elements	
document.forms //Returns all <form> elements	
document.head //Returns the <head> element	
document.image //Returns all <img> elements	
document.implementation //Returns the DOM implementation	
document.inputEncoding //Returns the document's encoding (character set)	
document.lastModified //Returns the date and time the document was updated	
document.links //Returns all <area> and <a> elements that have a href attribute	
document.readyState //Returns the (loading) status of the document	
document.referrer //Returns the URI of the referrer (the linking document)	
document.scripts //Returns all <script> elements	
document.strictErrorChecking //Returns if error checking is enforced	
document.title //Returns the <title> element	
document.URL //Returns the complete URL of the document


console.log("DOM Events")
console.log("DOM Events allow JavaScript to add event listener or event handlers to HTML elements")

abort //The loading of a media is aborted	
afterprint //A page has started printing	
animationend //A CSS animation has completed	
animationiteration //A CSS animation is repeated	
animationstart //A CSS animation has started	
beforeprint //A page is about to be printed	
beforeunload //Before a document is about to be unloaded	
blur //An element loses focus	
canplay //The browser can start playing a media (has buffered enough to begin)	
canplaythrough //The browser can play through a media without stopping for buffering	
change //The content of a form element has changed	
click //An element is clicked on	
contextmenu //An element is right-clicked to open a context menu	
copy //The content of an element is copied	
cut //The content of an element is cut	
dblclick //An element is double-clicked	
drag //An element is being dragged	
dragend //Dragging of an element has ended	
dragenter //A dragged element enters the drop target	
dragleave //A dragged element leaves the drop target	
dragover //A dragged element is over the drop target	
dragstart //Dragging of an element has started	
drop //A dragged element is dropped on the target	
durationchange //The duration of a media is changed	
ended //A media has reach the end ("thanks for listening")	
error //An error has occurred while loading a file	
focus //An element gets focus	
focusin //An element is about to get focus	
focusout //An element is about to lose focus	
fullscreenchange //An element is displayed in fullscreen mode	
fullscreenerror //An element can not be displayed in fullscreen mode	
hashchange //There has been changes to the anchor part of a URL	
input //An element gets user input	InputEvent, 
invalid //An element is invalid	
keydown //A key is down	
keypress //A key is pressed	
keyup //A key is released	
load //An object has loaded	
loadeddata //Media data is loaded	
loadedmetadata //Meta data (like dimensions and duration) are loaded	
loadstart //The browser starts looking for the specified media	
message //A message is received through the event source	
mousedown //The mouse button is pressed over an element	
mouseenter //The pointer is moved onto an element	
mouseleave //The pointer is moved out of an element	
mousemove //The pointer is moved over an element	
mouseover //The pointer is moved onto an element	
mouseout //The pointer is moved out of an element	
mouseup //A user releases a mouse button over an element
offline //The browser starts working offline	
online //The browser starts working online	
open //A connection with the event source is opened	
pagehide //User navigates away from a webpage	
pageshow //User navigates to a webpage	
paste //Some content is pasted in an element	
pause //A media is paused	
play //The media has started or is no longer paused	
playing //The media is playing after being paused or buffered	
popstate //The window's history changes	
progress //The browser is downloading media data	
ratechange //The playing speed of a media is changed	
resize //The document view is resized	
reset //A form is reset	
scroll //A scrollbar is being scrolled	UiEvent, 
search //Something is written in a search field	
seeked //Skipping to a media position is finished	
seeking //Skipping to a media position is started	
select //User selects some text	UiEvent, 
show //A <menu> element is shown as a context menu	
stalled //The browser is trying to get unavailable media data	
storage //A Web Storage area is updated	
submit //A form is submitted	
suspend //The browser is intentionally not getting media data	
timeupdate //The playing position has changed (the user moves to a different point in the media)	
toggle //The user opens or closes the <details> element	
touchcancel //The touch is interrupted	
touchend //A finger is removed from a touch screen	
touchmove //A finger is dragged across the screen	
touchstart //A finger is placed on a touch screen	
transitionend //A CSS transition has completed	
unload //A page has unloaded	
volumechange //The volume of a media is changed (includes muting)	
waiting //A media is paused but is expected to resume (e.g. buffering)	
wheel //The mouse wheel rolls up or down over an element	


console.log("DOM Event Listener")
console.log(`The addEventListener() method:
    -> attaches an event handler to the specified element;
    -> makes it easier to control how the event reacts to bubbling
    -> allows to add many events handlers to the same element`)

element.addEventListener("event, function, useCapture");
/*
-> event: the type of the event (click, mousedown...)
-> function: the function we want to call when the event occurs
-> useCapture: boolean value specifying whether to use event bubbling or event capturing — this parameter is optional 
*/

element.addEventListener("click", function(){ alert("Hello World!"); }); //this example will alert "Hello World!" when the user clicks

element.addEventListener("click", myFunction); //it refers to a external "named" function, but does the same alert
function myFunction() {
  alert ("Hello World!");
}

//the following example add many events, of different types, to the same element
element.addEventListener("mouseover", myFunction);
element.addEventListener("click", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);


console.log("DOM Event Propagation")
console.log(`Event propagation is a way of defining the element order when an event occurs. There are two ways of event propagation in the HTML DOM:
    -> bubbling (the inner most element's event is handled first)
    -> capturing (outer most element's event is handled first)`)
console.log(`With the addEventListener() method you can specify the propagation type by using the "useCapture" parameter:
    -> false(default) = bubbling
    -> true = capturing`)


console.log("DOM Event Listener Remover")

element.removeEventListener("mousemove", myFunction); //removes event handlers that have been attached with the addEventListener() method


console.log("DOM Nodes Navigation")
console.log(`You can use the following node properties to navigate between nodes with JavaScript:
    -> parentNode
    -> childNodes[nodenumber]
    -> firstChild
    -> lastChild
    -> nextSibling
    -> previousSibling`)


console.log("DOM Node Manipulation")

//Creating New HTML Elements
{
    const para = document.createElement("p"); //creates a new <p> element
    const node = document.createTextNode("This is new."); //to add text to the <p> element, you must create a text node first
    para.appendChild(node); //append the text node to the <p> element
    const element = document.getElementById("div1"); //finds an existing element
    element.appendChild(para); //appends the new element to the existing element
}

//Creating new HTML Elements — insertBefore()
{
    const para = document.createElement("p");
    const node = document.createTextNode("This is new.");
    para.appendChild(node);
    const element = document.getElementById("div1");
    const child = document.getElementById("p1");
    element.insertBefore(para, child); //selects where the new element will be inserted
}

//Removing Existing HTML Elements
{
    const elmnt = document.getElementById("p1"); elmnt.remove();
}

//Removing a Child Node
{
    const parent = document.getElementById("div1");
    const child = document.getElementById("p1");
    parent.removeChild(child); //remove the child from the parent
    child.parentNode.removeChild(child); //here is a common workaround
}

//Replacing HTML Elements 
{
    const para = document.createElement("p");
    const node = document.createTextNode("This is new.");
    para.appendChild(node);
    const parent = document.getElementById("div1");
    const child = document.getElementById("p1");
    parent.replaceChild(para, child); //to replace an element to the HTML DOM, use the replaceChild() method
}


console.log("DOM Node Property")

nodeName //specifies the name of a node 
/*
nodeName of an element node is the same as the tag name
nodeName of an attribute node is the attribute name
nodeName of a text node is always #text
nodeName of the document node is always #document
*/  

nodeValue //specifies the value of a node
/*
nodeValue for element nodes is null
nodeValue for text nodes is the text itself
nodeValue for attribute nodes is the attribute value
*/

nodeType //returns the type of a node
/*
NODE               Type
--------------------------
ELEMENT_NODE	     1	
ATTRIBUTE_NODE	     2	 
TEXT_NODE	         3	
COMMENT_NODE	     8	
DOCUMENT_NODE	     9	
DOCUMENT_TYPE_NODE	10
*/
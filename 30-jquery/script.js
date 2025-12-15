console.log("jQuerry was designed to handle Browser Incompatibilities and to simplify HTML DOM Manipulation, Event Handling, Animations, and Ajax.")
console.log("For years jQuery has been the most popular JavaScript library in the world. However, after JavaScript Version 5 (2009), most of the jQuery utilities can be solved with a few lines of standard JavaScript")


console.log("jQuerry DOM Selectors")

//Finding HTML Element by Id
myElement = $("#id01");                                         //jQuerry
myElement = document.getElementById("id01");                    //JavaScript

//Finding HTML Elements by Tag Name
myElements = $("p"); 
myElements = document.getElementsByTagName("p");

//Finding HTML Elements by Class Name
myElements = $(".intro"); 
myElements = document.getElementsByClassName("intro");

//Finding HTML Elements by CSS Selectors
myElements = $("p.intro"); 
myElements = document.querySelectorAll("p.intro");


console.log("jQuerry HTML Elements")

//Set Text Content
myElement.text("Hello Sweden!");                                //jQuerry
myElement.textContent = "Hello Sweden!";                        //JavaScript

//Get Text Content
myText = $("#02").text();
myText = document.getElementById("02").textContent;

//Set HTML Content
myElement.html("<p>Hello World</p>");
myElement.innerHTML = "<p>Hello World</p>";

//Get HTML Content
content = myElement.html();
content = myElement.innerHTML;


console.log("jQuery CSS Styles")

//Hiding HTML Elements
myElement.hide();                                               //jQuerry
myElement.style.display = "none";                               //JavaScript

//Showing HTML Elements
myElement.show();
myElement.style.display = "";

//Styling HTML Elements
$("#demo").css("font-size","35px");
document.getElementById("demo").style.fontSize = "35px";


console.log("jQuery HTML DOM")

//Removing HTML Elements
$("#id02").remove();                                            //jQuerry
document.getElementById("id02").remove();                       //JavaScript

//Get Parent Element
myParent = $("#02").parent().prop("nodeName"); 
myParent = document.getElementById("02").parentNode.nodeName;
// Listing 2-13. Two Examples of How Closures Can Improve the Clarity of Your Code
// Find the element with an ID of 'main'
var obj = document.getElementById("main");
// Change it's border styling
obj.style.border = "1px solid red";
// Initialize a callback that will occur in one second
setTimeout(function () {
  // Which will hide the object
  obj.style.display = "none";
}, 1000);
// A generic function for displaying a delayed alert message
function delayedAlert(msg, time) {
  // Initialize an enclosed callback
  setTimeout(function () {
    // Which utilizes the msg passed in from the enclosing function
    alert(msg);
  }, time);
}
// Call the delayedAlert function with two arguments
delayedAlert("Welcome!", 2000);
// The first function call to setTimeout shows a popular instance where new JavaScript
// developers have problems. It’s not uncommon to see code like this in a new developer’s
// program:
setTimeout("otherFunction()", 1000);
// or even…
setTimeout("otherFunction(" + num + "," + num2 + ")", 1000);

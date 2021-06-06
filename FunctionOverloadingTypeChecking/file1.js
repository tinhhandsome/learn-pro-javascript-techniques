// Listing 2-5. Two Examples of Function Overloading in JavaScript
// A simple function for sending a message
function sendMessage(msg, obj) {
  // If both a message and an object are provided
  if (arguments.length == 2)
    // Send the message to the object
    obj.handleMsg(msg);
  // Otherwise, assume that only a message was provided
  // So just display the default error message
  else alert(msg);
}
// Call the function with one argument – displaying the message using an alert
sendMessage("Hello, World!");
// Otherwise, we can pass in our own object that handles
// a different way of displaying information
sendMessage("How are you?", {
  handleMsg: function (msg) {
    alert("This is a custom message: " + msg);
  },
});
// A function that takes any number of arguments and makes
// an array out of them
function makeArray() {
  // The temporary array
  var arr = [];
  // Go through each of the submitted arguments
  for (var i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  // Return the resulting array
  return arr;
}

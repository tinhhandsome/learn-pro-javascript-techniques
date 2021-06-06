// Listing 2-15. Example of Using Anonymous Functions to Hide Variables from the Global Scope
// Create a new anonymous function, to use as a wrapper
(function () {
  // The variable that would, normally, be global
  var msg = "Thanks for visiting!";
  // Binding a new function to a global object
  window.onunload = function () {
    // Which uses the 'hidden' variable
    alert(msg);
  };
  // Close off the anonymous function and execute it
})();

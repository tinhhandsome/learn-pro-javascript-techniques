// Listing 2-14. Example of Function Currying Using Closures
// A function that generates a new function for adding numbers
function addGenerator(num) {
  // Return a simple function for adding two numbers
  // with the first number borrowed from the generator
  return function (toAdd) {
    return num + toAdd;
  };
}
// addFive now contains a function that takes one argument,
// adds five to it, and returns the resulting number
var addFive = addGenerator(5);
// We can see here that the result of the addFive function is 9,
// when passed an argument of 4
alert(addFive(4) == 9);
// There’s another, common, JavaScript-coding problem that closures can solve. New
// JavaScript developers tend to accidentally leave a lot of extra variables sitting in the global scope. This is generally considered to be bad practice, as those extra variables could quietly
// interfere with other libraries, causing confusing problems to occur. Using a self-executing,
// anonymous function you can essentially hide all normally global variables from being seen
// by other code, as shown in Listing 2-15

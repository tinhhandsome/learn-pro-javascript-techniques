// Listing 3-5. Two Functions Used by Prototype to Simulate Object-Oriented JavaScript Code
// Create a global object named 'Class'
var Class = {
  // it has a single function that creates a new object constructor
  create: function () {
    // Create an anonymous object constructor
    return function () {
      // This calls its own initialization method
      this.initialize.apply(this, arguments);
    };
  },
};
// Add a static method to the Object object which copies
// properties from one object to another
Object.extend = function (destination, source) {
  // Go through all of the properties to extend
  for (property in source) {
    // and add them to the destination object
    destination[property] = source[property];
  }
  // return the modified object
  return destination;
};
// Prototype really only uses two distinct functions to create and manipulate its whole
// object-oriented structure. You may notice, simply from looking at the code, that it is also
// decidedly less powerful than Base or Crockford’s classical method. The premises for the two
// functions are simple:
// 46 CHAPTER 3 ■ CREATING REUSABLE CODE
// 7273ch03final.qxd 11/16/06 8:21 AM Page 46Class.create(): This function simply returns an anonymous function wrapper that can be
// used as a constructor. This simple constructor does one thing: it calls and executes the
// initialize property of the object. This means that there should be, at the very least, an initialize property containing a function on your object; otherwise, the code will throw an
// exception.
// Object.extend(): This simply copies all properties from one object into another. When you
// use the prototype property of constructors you can devise a simpler form of inheritance
// (simpler than the default prototypal inheritance that’s available in JavaScript).
// Now that you know how the underlying code works in Prototype, Listing 3-6 shows some
// examples of how it’s used in Prototype itself to extend native JavaScript objects with additional
// layers of functionality.

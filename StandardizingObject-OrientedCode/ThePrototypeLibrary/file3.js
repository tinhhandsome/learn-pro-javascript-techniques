// Listing 3-7. Prototype’s Helper Functions for Creating Classes and Implementing Simple
// Inheritance
// Create a new Person object with dummy constructor
var Person = Class.create();
// Copy the following functions into the Person prototype
Object.extend(Person.prototype, {
  // The function called immediately by the Person constructor
  initialize: function (name) {
    this.name = name;
  },
  // A simple function for the Person object
  getName: function () {
    return this.name;
  },
});
// Create a new User object with a dummy constructor
var User = Class.create();
// The User object inherits all the functions of its parent class
User.prototype = Object.extend(new Person(), {
  // Overwrite the old initialize function with the new one
  initialize: function (name, password) {
    this.name = name;
    this.password = password;
  },
  // and add a new function to the object
  getPassword: function () {
    return this.password;
  },
});
// While the object-oriented techniques proposed by the Prototype library aren’t revolutionary, they are powerful enough to help a developer create simpler, easier-to-write code.
// Ultimately, however, if you’re writing a significant amount of object-oriented code, you’ll
// most likely want to choose a library such as Base to help your writing efforts.
// Next we’re going to look at how you can take your object-oriented code and get it ready
// for other developers and libraries to use and interact with it.

// Listing 3-4. Examples of Dean Edwards’s Base Library for Simple Class Creation and Inheritance
// Create a new Person class
var Person = Base.extend({
  // The constructor of the Person class
  constructor: function (name) {
    this.name = name;
  },
  // A simple method of the Person class
  getName: function () {
    return this.name;
  },
});
// Create a new User class that inherits from the Person class
var User = Person.extend({
  // Create the User class constructor
  constructor: function (name, password) {
    // which, in turn calls the parent classes' constructor method
    this.base(name);
    this.password = password;
  },
  // Create another, simple, method for the User
  getPassword: function () {
    return this.password;
  },
});
// Let’s look at how it is that Base achieved the three goals outlined in Listing 3-4 to create
// a simple form of object creation and inheritance:
// Base.extend( … );: This expression is used to create a new base constructor object. This
// function takes one property, a simple object containing properties and values, all of
// which are added to the object and used as its prototypal methods.
// Person.extend( … );: This is an alternate version of the Base.extend() syntax. All constructors created using the .extend() method gain their own .extend() method, meaning
// that it’s possible to inherit directly from them. In Listing 3-4 you create the User constructor by inheriting directly from the original Person constructor.
// this.base();: Finally, the this.base() method is used to call a parent function that has
// been overridden. You’ll notice that this is rather different from the this.uber() function
// that Crockford’s classical library used, as you don’t need to provide the name of the
// parent function (which can help to really clean up and clarify your code). Of all the
// object-oriented JavaScript libraries, Base’s overridden parent method functionality
// is the best.
// Personally, I find that Dean’s Base library produces the most readable, functional, and
// understandable object-oriented JavaScript code. Ultimately, it is up to a developer to
// choose a library that best suits him. Next you’re going to see how object-oriented code is
// implemented in the popular Prototype library.

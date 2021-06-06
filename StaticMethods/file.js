// Listing 2-26. A Simple Example of a Static Method
// A static method attached to the User object
User.cloneUser = function (user) {
  // Create, and return, a new user
  return new User(
    // that is a clone of the other user object
    user.getName(),
    user.getAge()
  );
};

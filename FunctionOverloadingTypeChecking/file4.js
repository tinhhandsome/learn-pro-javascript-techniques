// Listing 2-8. Example of Using the Constructor Property to Determine the Type of an Object
// Check to see if our number is actually a string
if (num.constructor == String)
  // If it is, then parse a number out of it
  num = parseInt(num);
// Check to see if our string is actually an array
if (str.constructor == Array)
  // If that's the case, make a string by joining the array using commas
  str = str.join(",");

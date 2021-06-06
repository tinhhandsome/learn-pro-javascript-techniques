// Listing 2-1. Example of Multiple Variables Referring to a Single Object
// Set obj to an empty object
var obj = new Object();
// objRef now refers to the other object
var objRef = obj;
// Modify a property in the original object
obj.oneProperty = true;
// We now see that that change is represented in both variables
// (Since they both refer to the same object)
alert(obj.oneProperty === objRef.oneProperty);

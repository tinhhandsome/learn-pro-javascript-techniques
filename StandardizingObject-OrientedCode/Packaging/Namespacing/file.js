// Listing 3-8. Namespacing in JavaScript and How It’s Implemented
// Create a default, global, namespace
var YAHOO = {};
// Setup some child namespaces, using objects
YAHOO.util = {};
// Create the final namespace, which contains a property with a function
YAHOO.util.Event = {
  addEventListener: function () {/*-*/},
};
// Call the function within that particular namespace
YAHOO.util.Event.addEventListener(/*-*/);
// Let’s look at some examples of namespacing used within some different, popular libraries
// and how that plays into a solid, expandable, plug-in architecture

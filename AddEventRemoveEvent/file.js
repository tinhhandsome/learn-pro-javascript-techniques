// In a contest run by Peter-Paul Koch (of http://quirksmode.org) in late 2005, he asked
// the general JavaScript-coding public to develop a new pair of functions, addEvent and
// removeEvent, which would provide a reliable way for users to add and remove events onto
// a DOM element. I ended up winning that contest with a very concise piece of code that
// worked well enough. However, afterward, one of the judges (Dean Edwards) then came out
// with another version of the functions that far surpassed what I wrote. His implementation
// uses the traditional means of attaching event handlers, completely ignoring the modern
// methods. Due to this fact, his implementation is able to work in a large number of browsers, while still providing all the necessary event niceties (such as the this keyword and
// standard event object). Listing 6-14 shows a sample piece of code, using all of the different
// aspects of event handling, which makes great use of the new addEvent function, including
// the prevention of the default browser event, the inclusion of the correct event object, and
// the inclusion of the correct this keyword.
// Listing 6-14. A Sample Piece of Code Using the addEvent Function
// Wait for the page to finish loading
addEvent(window, "load", function () {
  // Watch for any keypresses done by the user
  addEvent(document.body, "keypress", function (e) {
    // If the user hits the Spacebar + Ctrl key
    if (e.keyCode == 32 && e.ctrlKey) {
      // Display our special form
      this.getElementsByTagName("form")[0].style.display = "block";
      // Make sure that nothing strange happens
      e.preventDefault();
    }
  });
});
// The addEvent function provides an incredibly simple but powerful way of working
// with DOM events. Just looking at the advantages and disadvantages, it becomes quite clear
// that this function can serve as a consistent and reliable way to deal with events. The full
// source code to it can be found in Listing 6-15, which works in all browsers, doesn’t leak any
// memory, handles the this keyword and the event object, and normalizes common event
// object functions.
// The addEvent/removeEvent Library Written by Dean Edwards
// addEvent/removeEvent written by Dean Edwards, 2005
// with input from Tino Zijdel
// http://dean.edwards.name/weblog/2005/10/add-event/
function addEvent(element, type, handler) {
  // assign each event handler a unique ID
  if (!handler.$$guid) handler.$$guid = addEvent.guid++;
  // create a hash table of event types for the element
  if (!element.events) element.events = {};
  // create a hash table of event handlers for each element/event pair
  var handlers = element.events[type];
  if (!handlers) {
    handlers = element.events[type] = {};
    // store the existing event handler (if there is one)
    if (element["on" + type]) {
      handlers[0] = element["on" + type];
    }
  }
  // store the event handler in the hash table
  handlers[handler.$$guid] = handler;
  // assign a global event handler to do all the work
  element["on" + type] = handleEvent;
}
// a counter used to create unique IDs
addEvent.guid = 1;

function removeEvent(element, type, handler) {
  // delete the event handler from the hash table
  if (element.events && element.events[type]) {
    delete element.events[type][handler.$$guid];
  }
}

function handleEvent(event) {
  var returnValue = true;
  // grab the event object (IE uses a global event object)
  event = event || fixEvent(window.event);
  // get a reference to the hash table of event handlers
  var handlers = this.events[event.type];
  // execute each event handler
  for (var i in handlers) {
    this.$$handleEvent = handlers[i];
    if (this.$$handleEvent(event) === false) {
      returnValue = false;
    }
  }
  return returnValue;
}

// Add some "missing" methods to IE's event object
function fixEvent(event) {
  // add W3C standard event methods
  event.preventDefault = fixEvent.preventDefault;
  event.stopPropagation = fixEvent.stopPropagation;
  return event;
}

fixEvent.preventDefault = function () {
  this.returnValue = false;
};

fixEvent.stopPropagation = function () {
  this.cancelBubble = true;
};
// Advantages of addEvent
// The advantages of Dean Edwards’s addEvent event-binding method are the following:
// • It works in all browsers, even older unsupported browsers.
// • The this keyword is available in all bound functions, pointing to the current element.
// • All browser-specific functions for preventing the default browser action and for stopping event bubbling are neutralized.
// • The event object is always passed in as the first argument, regardless of the browser
// type.
// Disadvantage of addEvent
// The disadvantage of Dean Edwards’s addEvent event-binding method is the following:
// • It only works during the bubbling phase (since it uses the traditional method of event
// binding under the hood).
// 128 CHAPTER 6 ■ EVENTS
// 7273ch06final.qxd 11/16/06 8:16 AM Page 128Considering just how powerful the addEvent/removeEvent functions are, there is
// absolutely no reason not to use them in your code. On top of what’s shown in Dean’s default
// code, it’s really trivial to add things such as better event object normalization, event triggering,
// and bulk event removal, all things that are very difficult to do with the normal event structure

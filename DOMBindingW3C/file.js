// The W3C’s method of binding event handlers to DOM elements is the only truly standardized
// means of doing so. With that in mind, every modern browser supports this way of attaching
// events except for Internet Explorer.
// The code for attaching a new handler function is simple. It exists as a function of every
// DOM element (named addEventListener) and takes three parameters: the name of the event
// (e.g., click), the function that will handle the event, and a Boolean flag to enable or disable
// event capturing. An example of addEventListener in use is shown in Listing 6-12.
// Listing 6-12. Sample Pieces of Code That Use the W3C Way of Binding Event Handlers
// Find the first <form> element and attach a 'submit' event handler to it
document.getElementsByTagName("form")[0].addEventListener(
  "submit",
  function (e) {
    // Stop all form submission attempts
    return stopDefault(e);
  },
  false
);
// Attach a keypress event handler to the <body> element of the document
document.body.addEventListener("keypress", myKeyPressHandler, false);
// Attach an load event hanlder to the page
window.addEventListener("load", function () {}, false);
// Advantages of W3C Binding
// The advantages to the W3C event-binding method are the following:
// • This method supports both the capturing and bubbling phases of event handling. The
// event phase is toggled by setting the last parameter of addEventListener to false (for
// bubbling) or true (for capturing).
// • Inside of the event handler function, the this keyword refers to the current element.
// • The event object is always available in the first argument of the handling function.
// • You can bind as many events to an element as you wish, with none overwriting previously bound handlers.
// Disadvantage of W3C Binding
// The disadvantage to the W3C event-binding method is the following:
// • It does not work in Internet Explorer; you must use IE’s attachEvent function instead.
// If Internet Explorer utilized the W3C’s method of attaching event handlers, this chapter
// would be much shorter than it is now, as there would be virtually no need to discuss alternative methods of binding events. Until that day, however, the W3C’s event-binding methods
// are still the most comprehensive and easy to use.
// DOM Binding: IE
// In a lot of ways, the Internet Explorer way of binding events appears to be very similar to the
// W3C’s. However, when you get down to the details, it begins to differ in some very significant ways. Some examples of attaching event handlers in Internet Explorer can be found in
// Listing 6-13.
// Listing 6-13. Samples of Attaching Event Handlers to Elements Using the Internet Explorer Way
// of Binding Events
// Find the first <form> element and attach a 'submit' event handler to it
document.getElementsByTagName("form")[0].attachEvent("onsubmit", function () {
  // Stop all form submission attempts
  return stopDefault();
});
// Attach a keypress event handler to the <body> element of the document
document.body.attachEvent("onkeypress", myKeyPressHandler);
// Attach an load event hanlder to the page
window.attachEvent("onload", function () {});
// Advantage of IE Binding
// The advantage to Internet Explorer’s event-binding method is the following:
// • You can bind as many events to an element as you desire, with none overwriting previously bound handlers.
// Disadvantages of IE Binding
// The disadvantages to Internet Explorer’s event-binding method are the following:
// • Internet Explorer only supports the bubbling phase of event capturing.
// • The this keyword inside of event listener functions points to the window object, not the
// current element (a huge drawback of IE).
// • The event object is only available in the window.event parameter.
// • The name of the event must be named as ontype—for example, onclick instead of just
// requiring click.
// • It only works in Internet Explorer. You must use the W3C’s addEventListener for
// non-IE browsers.
// As far as semistandard event features go, Internet Explorer’s event-binding implementation is sorely lacking. Due to its many shortcomings, workarounds will continue to have to
// exist to force it to behave reasonably. However, all is not lost: A standard function for adding
// events to the DOM does exist and it will greatly ease our pain.

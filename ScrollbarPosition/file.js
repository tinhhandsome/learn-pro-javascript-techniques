// Listing 7-18. Two Functions for Determining Where the Viewport Is Positioned on Top of a Document
// A function for determining how far horizontally the browser is scrolled
function scrollX() {
  // A shortcut, in case we're using Internet Explorer 6 in Strict Mode
  var de = document.documentElement;
  // If the pageXOffset of the browser is available, use that
  return (
    self.pageXOffset ||
    // Otherwise, try to get the scroll left off of the root node
    (de && de.scrollLeft) ||
    // Finally, try to get the scroll left off of the body element
    document.body.scrollLeft
  );
}

// A function for determining how far vertically the browser is scrolled
function scrollY() {
  // A shortcut, in case we're using Internet Explorer 6 in Strict Mode
  var de = document.documentElement;
  // If the pageYOffset of the browser is available, use that
  return (
    self.pageYOffset ||
    // Otherwise, try to get the scroll top off of the root node
    (de && de.scrollTop) ||
    // Finally, try to get the scroll top off of the body element
    document.body.scrollTop
  );
}
// Next you’re going to look at how to determine the position of the browser’s scrollbar (or, in
//     another sense, looking at how far down the page the viewport is currently located). Having
//     these numbers (which can be retrieved using the functions shown in Listing 7-18) is necessary
//     to provide dynamic scrolling within an application beyond what the browser provides by
//     default.

// Listing 7-17. Two Functions for Determining the Length and Width of the Current Web Page
// Returns the height of the web page
// (could change if new content is added to the page)
function pageHeight() {
  return document.body.scrollHeight;
}
// Returns the width of the web page
function pageWidth() {
  return document.body.scrollWidth;
}
// The first set of properties that you need to look at are the height and width of the current
// web page. It’s most likely that most of the actual page is cropped by the viewport (which
// can be determined by checking the viewport size and scrollbar position). The two functions shown in Listing 7-17 use the aforementioned scrollWidth and scrollHeight properties, which detail the total possible width and height of an item, not just what’s currently
// shown.

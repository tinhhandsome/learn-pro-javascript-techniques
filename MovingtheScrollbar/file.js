// Listing 7-19. Examples of Using the scrollTo Method to Adjust the Position of the Browser Window
// If you wanted to scroll the browser up to the top of the browser, you could do:
window.scrollTo(0, 0);
// If you wanted to scroll to the position of a specific element, you could do:
window.scrollTo(0, pageY(document.getElementById("body")));

// Now that you have the current scrollbar offset into a page and the length of the page itself,
// you can look at the scrollTo method, provided by browsers, which can be used to adjust the
// current position of the viewport on the page.
// The scrollTo method exists as a property of the window object (and any other element
// that contains scrollable content or an <iframe>) and takes two parameters, the x and y offset,
// to scroll the viewport (or element or <iframe>) to. Listing 7-19 shows two examples of using
// the scrollTo method.
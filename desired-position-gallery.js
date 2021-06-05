// Listing 9-13. Two Functions Necessary to Direct Users to Their Desired Position in the Gallery
function prevImage() {
  // Locate the previous gallery image and show it
  showImage(prev(curImage));
  // Prevent the link from operating as normal
  return false;
}
// Find the next image and show it
function nextImage() {
  // Locate the next gallery image and show it
  showImage(next(curImage));
  // Prevent the link from operating as normal
  return false;
}

// With your image displaying above the rest of the page (and an overlay between it and the page
// itself), you need to add in a better means of navigation between the different images of the
// gallery. Earlier, when you specified the HTML for the gallery overlay, you included links that
// you could use as navigation. Using these links makes it possible for a user to move forward
// and backward through a gallery completely from the revealed overlay.
// You’re able to add this functionality to your image gallery by keeping track of which image
// is currently being viewed (in this case, a reference to the image stored in the curImage variable). Using this state, you can easily determine where a user is in the gallery and direct them
// to their desired location, as shown in Listing 9-13.


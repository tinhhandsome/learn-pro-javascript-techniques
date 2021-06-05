
//Listing 9-10. Showing the Image Gallery Based Upon the Selected Image
// Show the current gallery image
function showImage(cur) {
  // Remember which image we're currently dealing with
  curImage = cur;
  // Find the gallery image
  var img = id("gallery_image");
  // Remove the image, if there's one already there
  if (img.firstChild) img.removeChild(img.firstChild);
  // And add our new image in, instead
  img.appendChild(cur.firstChild.cloneNode(true));
  // We're setting the caption of the gallery image to
  // the 'alt' contents of the regular image
  id("gallery_title").innerHTML = cur.firstChild.firstChild.alt;
  // Locate the main gallery
  var gallery = id("gallery");
  // Set the correct class (so that it's the correct size)
  gallery.className = cur.className;
  // Then fade it in smoothly
  fadeIn(gallery, 100, 10);
  // Make sure that the gallery is positioned in the right place
  // on the screen
  adjust();
}

// Listing 9-11. Repositioning the Gallery Based on Height and Width of the Image and Where the
// User Scrolls
// Reposition the gallery to be at the center of the page
// even when the page has been scrolled
function adjust() {
  // Locate the gallery
  var obj = id("gallery");
  // Make sure that the gallery exists
  if (!obj) return;
  // Find its current height and width
  var w = getWidth(obj);
  var h = getHeight(obj);
  // Position the box, vertically, in the middle of the window
  var t = scrollY() + windowHeight() / 2 - h / 2;
  // But no heigher than the top of the page
  if (t < 0) t = 0;
  // Position the box, horizontally, in the middle of the window
  var l = scrollX() + windowWidth() / 2 - w / 2;
  // But no less than the left of the page
  if (l < 0) l = 0;
  // Set the adjusted position of the element
  setY(obj, t);
  setX(obj, l);
}
// Readjust the position of the gallery every time
// the user scrolls the page or resizes the browser
window.onresize = document.onscroll = adjust;

// Finally, Listing 9-12 shows the CSS that is necessary to keep the gallery positioned correctly. As you’ll note, it’s really nothing more than an absolutely positioned div with a large
// z-index style property that places it above everything else on the page.

// In the showImage function, the last step is a call to the adjust function. The adjust function is responsible for repositioning the image gallery at the exact center of the user’s window
// (even if the user has scrolled the mouse or resized the window). This is an important step,
// shown in Listing 9-11, which allows the gallery to behave and look very natural.

#overlay {
    background: #000;
    opacity: 0.5;
    display: none;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 100;
    cursor: pointer;
    cursor: hand;
  }
  
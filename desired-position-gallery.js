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

#gallery {
  position: absolute;
  width: 650px;
  height: 510px;
  background: #fff;
  z-index: 110;
  display: none;
}
#gallery_title {
  position: absolute;
  bottom: 5px;
  left: 5px;
  width: 100%;
  font-size: 16px;
  text-align: center;
}
#gallery img {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 640px;
  height: 480px;
  border: 0px;
  z-index: 115;
}
#gallery.tall {
  width: 430px;
  height: 590px;
}
#gallery.tall img {
  width: 420px;
  height: 560px;
}

// With the CSS, HTML, and JavaScript working together you now have a positioned image
// gallery that looks rather sharp, as you can see in Figure 9-5.


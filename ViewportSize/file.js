// Listing 7-20. Two Functions for Determining the Height and Width of the Browser Viewport
// Find the height of the viewport
function windowHeight() {
  // A shortcut, in case we're using Internet Explorer 6 in Strict Mode
  var de = document.documentElement;
  // If the innerHeight of the browser is available, use that
  return (
    self.innerHeight ||
    // Otherwise, try to get the height off of the root node
    (de && de.clientHeight) ||
    // Finally, try to get the height off of the body element
    document.body.clientHeight
  );
}
// Find the width of the viewport
function windowWidth() {
  // A shortcut, in case we're using Internet Explorer 6 in Strict Mode
  var de = document.documentElement;
  // If the innerWidth of the browser is available, use that
  return (
    self.innerWidth ||
    // Otherwise, try to get the width off of the root node
    (de && de.clientWidth) ||
    // Finally, try to get the width off of the body element
    document.body.clientWidth
  );
}

// Không thể nói quá về tính hữu ích của việc làm việc với khung nhìn. Bạn chỉ cần
// để xem một ứng dụng web hiện đại, chẳng hạn như Gmail hoặc Campfire, để xem các trường hợp
// thao tác với chế độ xem cung cấp kết quả hấp dẫn (với Gmail cung cấp
// lớp phủ và Lửa trại cung cấp các cuộc trò chuyện tự động cuộn). Trong Chương 11, tôi thảo luận về các
// các cách mà cửa sổ xem có thể được sử dụng để cung cấp trải nghiệm tốt hơn với tính tương tác cao
// Ứng dụng web. 

// The usefulness of working with the viewport cannot be overstated. You simply need 
// to look at a modern web application, such as Gmail or Campfire, to see instances where
// manipulation of the viewport provides compelling results (with Gmail providing contextual
// overlays and Campfire providing autoscrolling chats). In Chapter 11 I discuss different
// ways that the viewport can be used to provide a better experience with highly interactive
// web applications.
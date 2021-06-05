// Listing 7-22. The Fully Documented DOM-Drag Library
var Drag = {
  // The current element being dragged
  obj: null,
  // The initalization function for the drag object
  // o = The element to act as the drag handle
  // oRoot = The element to be dragged, if not specified,
  // the handle will be the element dragged.
  // minX, maxX, minY, maxY = The min and max coordinates allowed for the element
  // bSwapHorzRef = Toggle the horizontal coordinate system
  // bSwapVertRef = Toggle the vertical coordinate system
  // fxMapper, fyMapper = Functions for mapping x and y coordinates to others
  init: function (
    o,
    oRoot,
    minX,
    maxX,
    minY,
    maxY,
    bSwapHorzRef,
    bSwapVertRef,
    fXMapper,
    fYMapper
  ) {
    // Watch for the drag event to start
    o.onmousedown = Drag.start;
    // Figure out which coordinate system is being used
    o.hmode = bSwapHorzRef ? false : true;
    o.vmode = bSwapVertRef ? false : true;
    // Figure out which element is acting as the draggable 'handle'
    o.root = oRoot && oRoot != null ? oRoot : o;
    // Initalize the specified coordinate system
    if (o.hmode && isNaN(parseInt(o.root.style.left)))
      o.root.style.left = "0px";
    if (o.vmode && isNaN(parseInt(o.root.style.top))) o.root.style.top = "0px";
    if (!o.hmode && isNaN(parseInt(o.root.style.right)))
      o.root.style.right = "0px";
    if (!o.vmode && isNaN(parseInt(o.root.style.bottom)))
      o.root.style.bottom = "0px";
    // Look to see if the user provided min/max x/y coordinates
    o.minX = typeof minX != "undefined" ? minX : null;
    o.minY = typeof minY != "undefined" ? minY : null;
    o.maxX = typeof maxX != "undefined" ? maxX : null;
    o.maxY = typeof maxY != "undefined" ? maxY : null;
    // Check for any specified x and y coordinate mappers
    o.xMapper = fXMapper ? fXMapper : null;
    o.yMapper = fYMapper ? fYMapper : null;
    // Add shells for all the user-defined functions
    o.root.onDragStart = new Function();
    o.root.onDragEnd = new Function();
    o.root.onDrag = new Function();
  },
  start: function (e) {
    // Figure out the object that's being dragged
    var o = (Drag.obj = this);
    // Normalize the event object
    e = Drag.fixE(e);
    // Get the current x and y coordinates
    var y = parseInt(o.vmode ? o.root.style.top : o.root.style.bottom);
    var x = parseInt(o.hmode ? o.root.style.left : o.root.style.right);
    // Call the user's function with the current x and y coordinates
    o.root.onDragStart(x, y);
    // Remember the starting mouse position
    o.lastMouseX = e.clientX;
    o.lastMouseY = e.clientY;
    // If we're using the CSS coordinate system
    if (o.hmode) {
      // set the min and max coordiantes, where applicable
      if (o.minX != null) o.minMouseX = e.clientX - x + o.minX;
      if (o.maxX != null) o.maxMouseX = o.minMouseX + o.maxX - o.minX;
      // Otherwise, we're using a traditional mathematical coordinate system
    } else {
      if (o.minX != null) o.maxMouseX = -o.minX + e.clientX + x;
      if (o.maxX != null) o.minMouseX = -o.maxX + e.clientX + x;
    }
    // If we're using the CSS coordinate system
    if (o.vmode) {
      // set the min and max coordiantes, where applicable
      if (o.minY != null) o.minMouseY = e.clientY - y + o.minY;
      if (o.maxY != null) o.maxMouseY = o.minMouseY + o.maxY - o.minY;
      // Otherwise, we're using a traditional mathematical coordinate system
    } else {
      if (o.minY != null) o.maxMouseY = -o.minY + e.clientY + y;
      if (o.maxY != null) o.minMouseY = -o.maxY + e.clientY + y;
    }
    // Watch for 'dragging' and 'drag end' events
    document.onmousemove = Drag.drag;
    document.onmouseup = Drag.end;
    return false;
  },
  // A function to watch for all movements of the mouse during the drag event
  drag: function (e) {
    // Normalize the event object
    e = Drag.fixE(e);
    // Get our reference to the element being dragged
    var o = Drag.obj;
    // Get the position of the mouse within the window
    var ey = e.clientY;
    var ex = e.clientX;
    // Get the current x and y coordinates
    var y = parseInt(o.vmode ? o.root.style.top : o.root.style.bottom);
    var x = parseInt(o.hmode ? o.root.style.left : o.root.style.right);
    var nx, ny;
    // If a minimum X position was set, make sure it doesn't go past that
    if (o.minX != null)
      ex = o.hmode ? Math.max(ex, o.minMouseX) : Math.min(ex, o.maxMouseX);
    // If a maximum X position was set, make sure it doesn't go past that
    if (o.maxX != null)
      ex = o.hmode ? Math.min(ex, o.maxMouseX) : Math.max(ex, o.minMouseX);
    // If a minimum Y position was set, make sure it doesn't go past that
    if (o.minY != null)
      ey = o.vmode ? Math.max(ey, o.minMouseY) : Math.min(ey, o.maxMouseY);
    // If a maximum Y position was set, make sure it doesn't go past that
    if (o.maxY != null)
      ey = o.vmode ? Math.min(ey, o.maxMouseY) : Math.max(ey, o.minMouseY);
    // Figure out the newly translated x and y coordinates
    nx = x + (ex - o.lastMouseX) * (o.hmode ? 1 : -1);
    ny = y + (ey - o.lastMouseY) * (o.vmode ? 1 : -1);
    // and translate them using an x or y mapper function (if provided)
    if (o.xMapper) nx = o.xMapper(y);
    else if (o.yMapper) ny = o.yMapper(x);
    // Set the new x and y coordinates onto the element
    Drag.obj.root.style[o.hmode ? "left" : "right"] = nx + "px";
    Drag.obj.root.style[o.vmode ? "top" : "bottom"] = ny + "px";
    // and remember the last position of the mouse
    Drag.obj.lastMouseX = ex;
    Drag.obj.lastMouseY = ey;
    // Call the user's onDrag function with the current x and y coordinates
    Drag.obj.root.onDrag(nx, ny);
    return false;
  },
  // Function that handles the end of a drag event
  end: function () {
    // No longer watch for mouse events (as the drag is done)
    document.onmousemove = null;
    document.onmouseup = null;
    // Call our special onDragEnd function with the x and y coordinates
    // of the element at the end of the drag event
    Drag.obj.root.onDragEnd(
      parseInt(Drag.obj.root.style[Drag.obj.hmode ? "left" : "right"]),
      parseInt(Drag.obj.root.style[Drag.obj.vmode ? "top" : "bottom"])
    );
    // No longer watch the object for drags
    Drag.obj = null;
  },
  // A function for normalizes the event object
  fixE: function (e) {
    // If no event object exists, then this is IE, so provide IE's event object
    if (typeof e == "undefined") e = window.event;
    // If the layer properties aren't set, get the values from the equivalent
    // offset properties
    if (typeof e.layerX == "undefined") e.layerX = e.offsetX;
    if (typeof e.layerY == "undefined") e.layerY = e.offsetY;
    return e;
  },
};
// Một trong những tương tác người dùng phổ biến nhất hiện có trong trình duyệt là có thể kéo
// một phần tử xung quanh một trang. Sử dụng các kỹ năng bạn đã học được (khả năng xác định
// vị trí của phần tử, cách điều chỉnh vị trí của nó và sự khác biệt giữa các loại
// định vị), bây giờ bạn có thể hiểu đầy đủ cách hoạt động của hệ thống phần tử có thể kéo.
// CHƯƠNG 7 ■ JAVASCRIPT VÀ CSS 157
// 7273ch07final.qxd 16/11/06 8:15 AM Trang 157Để khám phá công nghệ này, tôi đã chọn xem thư viện DOM-Drag do Aaron tạo
// Boodman (http://boring.youngpup.net/2001/domdrag). Thư viện của anh ấy cung cấp rất nhiều
// các tính năng, bao gồm những điều sau:
// Kéo chốt điều khiển: Bạn có thể có một phần tử mẹ đang thực sự được di chuyển và một phần tử khác
// phụ tố đang được kéo. Điều này rất tốt để tạo các phần tử giống như cửa sổ cho một
// giao diện.
// Các chức năng gọi lại: Bạn có thể theo dõi các sự kiện cụ thể, chẳng hạn như khi người dùng bắt đầu kéo ging một phần tử, đang kéo một phần tử hoặc đã ngừng kéo phần tử đó, cùng với
// thông tin về vị trí hiện tại của phần tử.
// Vùng kéo tối thiểu / tối đa: Bạn có thể hạn chế việc kéo một phần tử ra bên ngoài một vùng nhất định
// khu vực (chẳng hạn như bên ngoài màn hình). Điều này là hoàn hảo để xây dựng thanh cuộn.
// Hệ thống tọa độ tùy chỉnh: Bạn có thể chọn làm việc với bất kỳ sự kết hợp nào của ánh xạ hệ thống x / y coordi nate nếu bạn không cảm thấy thoải mái khi làm việc với tọa độ CSS
// hệ thống.
// Dịch hệ thống tọa độ x và y tùy chỉnh: Bạn có thể khiến phần tử được kéo của mình
// di chuyển theo những cách phi truyền thống (chẳng hạn như dao động hoặc dao động xung quanh).
// Sử dụng hệ thống DOM-Drag tương đối đơn giản. Bạn bắt đầu bằng cách gắn một kéo
// xử lý đến một phần tử (chỉ định thêm bất kỳ tùy chọn bổ sung nào mà bạn có) cùng với bất kỳ
// chức năng quan sát bổ sung. Một số ví dụ về việc sử dụng DOM-Drag được hiển thị trong Liệt kê 7-21.

// One of the most popular user interactions available in a browser is that of being able to drag
// an element around a page. Using the skills that you’ve learned (the ability to determine an
// element’s position, how to adjust its position, and the difference between the various types
// of positioning), you can now fully understand how a dragable-element system works.
// CHAPTER 7 ■ JAVASCRIPT AND CSS 157
// 7273ch07final.qxd 11/16/06 8:15 AM Page 157To explore this technology, I’ve chosen to look at the DOM-Drag library created by Aaron
// Boodman (http://boring.youngpup.net/2001/domdrag). His library provides a lot of handy
// features, including the following:
// Drag handles: You can have one parent element that is actually being moved and another
// subelement that is being dragged. This is great for creating windowlike elements for an
// interface.
// Callback functions: You can watch for specific events, such as when the user begins dragging an element, is dragging an element, or has stopped dragging the element, along with
// information about the current location of the element.
// Min/max drag area: You can restrict an element from being dragged outside of a certain
// area (such as outside of the screen). This is perfect for building scrollbars.
// Custom coordinate systems: You can choose to work with any combination of x/y coordinate system mapping if you don’t feel comfortable working with the CSS coordinate
// system.
// Custom x and y coordinate system translation: You can cause your dragged element to
// move in nontraditional ways (such as fluctuating or waving around).
// Using the DOM-Drag system is relatively straightforward. You begin by attaching a drag
// handler to an element (additionally specifying any extra options that you have) along with any
// extra watcher functions. Some examples of using DOM-Drag are shown in Listing 7-21

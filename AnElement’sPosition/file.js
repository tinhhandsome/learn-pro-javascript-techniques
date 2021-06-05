// here an element is located varies depending on its CSS parameters and the content immediately adjacent to it. One thing that accessing CSS properties or their actual computed values
// does not afford you is the ability to know an element’s exact position within the page or even
// within another element.
// To start with, let’s look at finding an element’s position within a page. You have a couple
// element properties at your disposal that you can use to find this information. All modern
// browsers support the following three properties; how they handle them, however, is another
// matter:
// offsetParent: Theoretically, this is the parent that an element is positioned within. However, in practice, the element that offsetParent refers to depends on the browser (for
// example, in Firefox it refers to the root node, and in Opera, the immediate parent).
// offsetLeft and offsetTop: These parameters are the horizontal and vertical offsets of the
// element within the context of the offsetParent. Thankfully, this is always accurate in
// modern browsers.
// The trick, now, is to find a way that you can determine a consistent cross-browser measure of an element’s location. The most consistent way to do this is by using the methods
// presented in Listing 7-4, traversing up the DOM tree using the offsetParent property and
// adding up the offset values along the way.
// CHAPTER 7 ■ JAVASCRIPT AND CSS 143
// Figure 7-5. Fixed positioning, with the element positioned in the upper-right corner of the page,
// even though the browser window has been scrolled down the page
// Two Helper Functions for Determining the x and y Locations of an Element Relative
// to the Entire Document
// Find the X (Horizontal, Left) position of an element
function pageX(elem) {
  // See if we're at the root element, or not
  return elem.offsetParent
    ? // If we can still go up, add the current offset and recurse upwards
      elem.offsetLeft + pageX(elem.offsetParent)
    : // Otherwise, just get the current offset
      elem.offsetLeft;
}
// Find the Y (Vertical, Top) position of an element
function pageY(elem) {
  // See if we're at the root element, or not
  return elem.offsetParent
    ? // If we can still go up, add the current offset and recurse upwards
      elem.offsetTop + pageY(elem.offsetParent)
    : // Otherwise, just get the current offset
      elem.offsetTop;
}
// The next piece of the positioning puzzle is figuring out the horizontal and vertical positioning of an element within its parent. It’s important to note that it’s not sufficient to simply
// use an element’s style.left or style.top properties, as you may want to find an element’s position that has not yet been styled using JavaScript or CSS.
// Using the position of an element relative to its parent, you can add additional elements
// to the DOM, positioned relative to the parent. This value is perfect for building contextual
// tooltips, for example.
// In order to find the positioning of an element relative to its parent element, you must
// again turn to the offsetParent property. Since that property is not guaranteed to return the
// actual parent of the specified element, you must use your pageX and pageY functions to
// find the difference between the parent element and the child element. In the two functions
// shown in Listing 7-5, I attempt to first use offsetParent, if it is the actual parent of the current element; otherwise, I continue to traverse up the DOM using the pageX and pageY
// methods to determine its actual positioning.
// Two Functions for Determining the Position of an Element Relative to Its
// Parent Element
// Find the horizontal positioing of an element within its parent
function parentX(elem) {
  // If the offsetParent is the element's parent, break early
  return elem.parentNode == elem.offsetParent
    ? elem.offsetLeft
    : // Otherwise, we need to find the position relative to the entire
      // page for both elements, and find the difference
      pageX(elem) - pageX(elem.parentNode);
}
// Find the vertical positioning of an element within its parent
function parentY(elem) {
  // If the offsetParent is the element's parent, break early
  return elem.parentNode == elem.offsetParent
    ? elem.offsetTop
    : // Otherwise, we need to find the position relative to the entire
      // page for both elements, and find the difference
      pageY(elem) - pageY(elem.parentNode);
}
// The final piece to working with an element’s positioning is finding out the position of
// an element relative to its CSS container. As discussed previously, an element can actually be
// contained within one element but be positioned relative to another parent (with the use of
// relative and absolute positioning). With this in mind, you can turn back to the getStyle function to find the computed value of the CSS offsets, since that is what the positioning is
// equivalent to.
// To handle this, there are two simple wrapper functions, shown in Listing 7-6, that you
// can use. They both simply call the getStyle function, but also remove any “extraneous”
// (unless you’re using a non-pixel-based layout, then it’s important) unit information (for
// example 100px would become 100).
// Listing 7-6. Helper Functions for Finding the CSS Positioning of an Element
// Find the left position of an element
function posX(elem) {
  // Get the computed style and get the number out of the value
  return parseInt(getStyle(elem, "left"));
}
// Find the top position of an element
function posY(elem) {
  // Get the computed style and get the number out of the value
  return parseInt(getStyle(elem, "top"));
}
// Tiền đề đằng sau một phần tử động là nó là một phần tử được thao tác bằng cách sử dụng
// JavaScript và CSS để tạo hiệu ứng không tĩnh (một ví dụ đơn giản là hộp kiểm cho biết
// bạn quan tâm đến một bản tin và khu vực nhập e-mail bật lên).
// Về cơ bản, có ba thuộc tính quan trọng được sử dụng để tạo động
// hiệu ứng: vị trí, kích thước và khả năng hiển thị. Sử dụng ba thuộc tính này, bạn có thể mô phỏng hầu hết
// tương tác của người dùng thông thường trong một trình duyệt web hiện đại.
// Vị trí của một phần tử
// Làm việc với vị trí của một phần tử là một khối xây dựng quan trọng để phát triển các phần tử hoạt động liên trong một trang. Truy cập và sửa đổi các thuộc tính vị trí CSS cho phép bạn
// mô phỏng hiệu quả một số hoạt ảnh và tương tác phổ biến (chẳng hạn như kéo và
// rơi).
// CHƯƠNG 7 ■ JAVASCRIPT VÀ CSS 137
// 7273ch07final.qxd 16/11/06 8:15 AM Trang 137 Một bước quan trọng để làm việc với định vị phần tử là biết cách định vị
// hệ thống hoạt động trong CSS mà bạn sẽ sử dụng rộng rãi. Trong CSS, các phần tử được định vị bằng cách sử dụng
// bù đắp. Phép đo được sử dụng là lượng chênh lệch từ góc trên bên trái của phần tử
// cha mẹ. Ví dụ về hệ tọa độ được sử dụng trong CSS được thể hiện trong Hình 7-1.
// Tất cả các phần tử trên một trang có một số dạng của đỉnh (tọa độ dọc) và lệch trái (tọa độ đường chân trời). Nói chung, hầu hết các phần tử chỉ đơn giản được định vị tĩnh trong
// mối quan hệ với các yếu tố xung quanh chúng. Một phần tử có thể có một số lược đồ phân vị trí khác nhau, như được đề xuất bởi tiêu chuẩn CSS. Để hiểu điều này tốt hơn, hãy xem
// trang web HTML đơn giản được hiển thị trong Liệt kê 7-3.

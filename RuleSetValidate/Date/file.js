// Listing 8-7. Checking Whether a Field Has a Date in It
// A generic function for checking to see if an input element has
// a date entered into it
function checkDate(elem) {
  // Make sure that something is entered, and that it
  // looks like a valid MM/DD/YYYY date
  return !elem.value || /^\d{2}\/\d{2}\/\d{2,4}$/.test(elem.value);
}
// Get an input element to check
var elem = document.getElementById("date");
// Check to see if the field contains a valid date
if (!checkDate(elem)) {
  alert("Field is not a date.");
}

// Phần cuối cùng mà bạn sẽ xem xét là xác nhận ngày tháng. Một lần nữa, bạn sẽ
// xem xét phong cách viết ngày làm trung tâm của Hoa Kỳ (MM / DD / YYYY). Như với số điện thoại hoặc khác
// các trường khác nhau trên phạm vi quốc tế, biểu thức chính quy xác thực có thể dễ dàng điều chỉnh để phù hợp
// quốc tịch của bạn, nếu cần. Với chức năng xác thực cụ thể, được hiển thị trong Liệt kê 8-7, bạn
// thực hiện kiểm tra đơn giản để xác minh nội dung của trường ngày tháng

// Phần cuối cùng mà bạn sẽ xem xét là xác nhận ngày tháng. Một lần nữa, bạn sẽ
// xem xét phong cách viết ngày làm trung tâm của Hoa Kỳ (MM / DD / YYYY). Như với số điện thoại hoặc khác
// các trường khác nhau trên phạm vi quốc tế, biểu thức chính quy xác thực có thể dễ dàng điều chỉnh để phù hợp
// quốc tịch của bạn, nếu cần. Với chức năng xác thực cụ thể, được hiển thị trong Liệt kê 8-7, bạn
// thực hiện kiểm tra đơn giản để xác minh nội dung của trường ngày tháng

// Listing 8-13. Watching Fields for a Change Before Running Any Field Validation Functions
function watchFields(form) {
  // Go through all the field elements in form
  for (var i = 0; i < form.elements.length; i++) {
    // and attach a 'change' event handler (which watches for a user
    // to lose focus of an input element)
    addEvent(form.elements[i], "change", function () {
      // Once the focus has been lost, re-validate the field
      return validateField(this);
    });
  }
}
// Locate the first form on the page
var form = document.getElementsByTagName("form")[0];
// Watch all the fields in the form for changes
watchFields(form);

// Một kỹ thuật khác có thể được sử dụng để xác thực biểu mẫu là theo dõi các thay đổi trong
// các trường biểu mẫu riêng lẻ. Điều này có thể được thực hiện bằng cách sử dụng một sự kiện nhấn phím; tuy nhiên, điều này
// dẫn đến kết quả không như mong muốn. Kiểm tra lỗi xảy ra mỗi khi một phím được nhấn trong
// một trường có thể rất khó hiểu đối với người dùng. Họ có thể bắt đầu nhập địa chỉ e-mail của mình (đối với
// ví dụ) và gặp lỗi cho biết địa chỉ của họ không chính xác. Tuy nhiên, điều này có thể không
// trường hợp này, vì họ vẫn đang nhập nó vào trường. Nói chung, cách làm này không được khuyến khích, vì
// nó cung cấp trải nghiệm người dùng không tốt.
// Cách thứ hai để theo dõi các thay đổi của trường là đợi cho đến khi người dùng rời khỏi trường
// (hy vọng sau khi đã nhập tất cả thông tin của họ). Thực hiện xác thực theo cách này mang lại trải nghiệm người dùng mượt mà hơn nhiều, vì người dùng có nhiều cơ hội để nhập tất cả
// thông tin mà họ mong muốn, trong khi vẫn được cung cấp với lỗi xác thực nhanh hơn
// tin nhắn.
// Ví dụ về việc triển khai kỹ thuật này được hiển thị trong Liệt kê 8-13.
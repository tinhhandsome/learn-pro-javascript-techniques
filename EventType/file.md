Các loại sự kiện
Các sự kiện JavaScript phổ biến có thể được phân loại thành một vài loại khác nhau. Có lẽ là
danh mục được sử dụng phổ biến nhất là tương tác chuột, theo sau là bàn phím và
các sự kiện hình thành. Danh sách sau cung cấp một cái nhìn tổng quan về các lớp sự kiện khác nhau
tồn tại và có thể được xử lý trong một ứng dụng web. Đối với rất nhiều ví dụ về các sự kiện đang hoạt động,
vui lòng tham khảo Phụ lục B.
Sự kiện chuột: Các sự kiện này được chia thành hai loại: sự kiện theo dõi vị trí con chuột được đặt ở đâu cho thuê (di chuột qua, di chuột ra) và sự kiện theo dõi vị trí con chuột đang nhấp
(mouseup, mousedown, click).
Sự kiện bàn phím: Các sự kiện này chịu trách nhiệm theo dõi khi các phím bàn phím được nhấn và
trong ngữ cảnh nào — ví dụ: theo dõi các lần nhấn bàn phím bên trong các phần tử biểu mẫu như
trái ngược với các lần nhấn phím xảy ra trong toàn bộ trang. Như với con chuột, ba sự kiện
các loại được sử dụng để theo dõi bàn phím: nhấn phím, nhấn phím xuống và nhấn phím.
Sự kiện giao diện người dùng: Những sự kiện này được sử dụng để theo dõi khi người dùng sử dụng một khía cạnh của trang
khác. Với điều này, bạn có thể biết một cách đáng tin cậy khi nào người dùng đã bắt đầu nhập vào biểu mẫu ele ment, chẳng hạn. Hai sự kiện được sử dụng để theo dõi điều này là tiêu điểm và làm mờ (đối với khi
đối tượng mất tiêu điểm).
Sự kiện biểu mẫu: Những sự kiện này liên quan trực tiếp đến các tương tác chỉ xảy ra với biểu mẫu và biểu mẫu
các yếu tố đầu vào. Sự kiện gửi được sử dụng để theo dõi khi nào một biểu mẫu được gửi; sự thay đổi
đồng hồ sự kiện để người dùng nhập vào một phần tử; và sự kiện đã chọn sẽ kích hoạt khi <select>
phần tử đã được cập nhật.
Sự kiện tải và sự kiện lỗi: Lớp sự kiện cuối cùng là những sự kiện liên quan đến chính trang,
quan sát trạng thái tải của nó. Chúng được gắn với thời điểm người dùng tải trang đầu tiên (sự kiện tải)
và khi người dùng cuối cùng rời khỏi trang (sự kiện dỡ tải và tải trước khi tải xuống). Đặc biệt, các lỗi JavaScript được theo dõi bằng cách sử dụng sự kiện lỗi, cho phép bạn
xử lý các lỗi riêng lẻ.
Với những loại sự kiện chung này, tôi khuyên bạn nên chủ động xem qua
tài liệu trong Phụ lục B, nơi tôi phân tích tất cả các sự kiện phổ biến, cách chúng hoạt động và cách chúng
hoạt động trong các trình duyệt khác nhau và mô tả tất cả những điều phức tạp cần thiết để khiến chúng làm những gì
bạn muốn.
Tập lệnh DOM không phô trương
Mọi thứ bạn đã học được cho đến thời điểm này đều hướng đến một mục tiêu cực kỳ quan trọng: viết JavaScript của bạn để nó tương tác với người dùng của bạn một cách tự nhiên và không phô trương. Việc lái xe
Lực lượng đằng sau phong cách viết kịch bản này là bây giờ bạn có thể tập trung sức lực của mình vào việc viết mã tốt
sẽ hoạt động trong các trình duyệt hiện đại trong khi không thành công đối với các trình duyệt cũ hơn (không được hỗ trợ).
CHƯƠNG 6 ■ SỰ KIỆN 129
7273ch06final.qxd 16/11/06 8:16 SA Trang 129 Để đạt được điều này, bạn có thể kết hợp ba kỹ thuật mà bạn đã học để thực hiện một ứng dụng đơn giản theo kịch bản:

1. Tất cả các chức năng trong ứng dụng của bạn phải được xác minh. Ví dụ, nếu bạn muốn
   truy cập vào HTML DOM mà bạn cần xác minh rằng nó tồn tại và có tất cả các chức năng
   bạn cần sử dụng nó (ví dụ: if (document && document.getElementById)). Công nghệ nique này được thảo luận trong Chương 2.
2. Sử dụng DOM để truy cập nhanh chóng và thống nhất các phần tử trong tài liệu của bạn. Kể từ khi bạn
   đã biết rằng trình duyệt hỗ trợ các chức năng DOM, bạn có thể thoải mái viết
   mã đơn giản và không có hack hoặc kludges.
3. Cuối cùng, bạn liên kết động tất cả các sự kiện với tài liệu bằng cách sử dụng DOM và
   hàm addEvent. Không nơi nào bạn phải có một cái gì đó như sau: <a href = "#"
   onclick = "doStuff ();">… </a>. Điều này rất tệ trong con mắt của việc viết mã một cách không phô trương, như
   mã đó sẽ thực sự không có tác dụng gì nếu JavaScript bị tắt hoặc nếu người dùng có
   phiên bản của trình duyệt mà bạn không hỗ trợ. Vì bạn chỉ hướng người dùng đến một
   URL vô nghĩa, nó sẽ không mang lại tương tác cho những người dùng không thể hỗ trợ
   chức năng viết kịch bản.
   Nếu nó chưa rõ ràng, bạn cần phải giả vờ rằng người dùng không có JavaScript
   đã được cài đặt, hoặc trình duyệt của anh ấy có thể kém hơn theo một cách nào đó. Hãy tiếp tục, mở trình duyệt của bạn,
   truy cập trang web yêu thích của bạn và tắt JavaScript; Nó vẫn hoạt động? Làm thế nào về tất cả các CSS; có thể
   bạn vẫn điều hướng đến nơi bạn cần đến? Cuối cùng, có thể sử dụng trang web của bạn mà không cần chuột không?
   Tất cả những điều này phải là một phần của mục tiêu cuối cùng cho trang web của bạn. Rất may, vì bạn đã xây dựng
   hiểu biết tuyệt vời về cách viết mã JavaScript thực sự hiệu quả, chi phí của việc chuyển đổi này là không đáng kể và có thể được thực hiện với nỗ lực tối thiểu.
   Dự đoán JavaScript bị vô hiệu hóa
   Mục tiêu đầu tiên mà bạn nên đạt được là loại bỏ hoàn toàn tất cả ràng buộc sự kiện nội tuyến
   bên trong tài liệu HTML của bạn. Có một vài lĩnh vực vấn đề mà bạn có thể tìm kiếm trong
   tài liệu thường xuyên phát sinh:
   • Nếu bạn tắt JavaScript trên trang của mình và nhấp vào bất kỳ / tất cả các liên kết, chúng có đưa bạn đến trang web không
   trang? Thông thường các nhà phát triển sẽ có các URL như href = "" hoặc href = "#", nghĩa là
   họ đang làm việc bổ sung một số voodoo JavaScript để mang lại cho người dùng kết quả của họ.
   • Nếu bạn tắt JavaScr

Ajax is a term coined by Jesse James Garrett of Adaptive Path to explain the asynchronous
client-to-server communication that’s made possible using the XMLHttpRequest object,
provided by all modern browsers. Standing for Asynchronous JavaScript and XML, Ajax is
simply a term used to encapsulate the techniques necessary to create a dynamic web application. Additionally, the individual components of the Ajax technique are completely
interchangeable—using HTML instead of XML (for example) is perfectly valid.
In this chapter you’re going to see the details that make up the full Ajax process (which
is itself centered on making a request to a server from a browser). I discuss everything from
the physical request itself, to the JavaScript interaction, and the data manipulation necessary to get the job done. This includes the following:
• Examining the different types of HTTP requests and determining how to best send data
objects to a server.
• Looking at the entire HTTP response and attempting to handle all the errors that can
occur with it, including server time-outs.
• Reading, traversing, and manipulating the data result that comes from the server in its
response.
Through this full understanding of how the Ajax process works and how it can be
implemented, you’ll see how it can be used in everything from common situations to full
applications. In Chapters 11, 12, and 13, you will also explore a series of case studies that
utilize Ajax techniques.
Using Ajax
Much code isn’t required to create a simple Ajax implementation, however, what the implementation affords you is great. For example, instead of having to force the user to request 
an entirely new web page after a form submission, the submission process can be handled
asynchronously, and then a small portion of desired results can be loaded upon completion.
For example, the process of searching for available domain names (to purchase) can be slow
and laborious. Every time you want to search for a new name you have to type your request
into a form, submit it, and watch the page reload. By using Ajax, you can get an instantaneous result, such as with the online application site Instant Domain Search (http://
instantdomainsearch.com/), for example, which is shown in Figure 10-1.
215
C H A P T E R 10
■ ■ ■
7273ch10final.qxd 11/16/06 8:11 AM Page 215HTTP Requests
The most important and probably most consistent aspect of Ajax is the HTTP request portion
of the process. The Hypertext Transfer Protocol (HTTP) was designed to simply transfer HTML
documents and similar files. Thankfully, all modern browsers support a means of establishing
HTTP connections dynamically, using JavaScript. This proves to be incredibly useful in developing more responsive web applications.
Asynchronously sending data to the server and receiving additional data back is the ultimate purpose of Ajax. How the data is formatted ultimately depends on your specific requirements, which I discuss in detail in the “Handling Response Data” section of this chapter.
In the following sections you’re going see how to format data to be transferred to a server
using the different HTTP requests. You’re then going to look at how to establish basic connections with the server, and you’ll see the necessary details to make this happen in a
cross-browser environment.
Establishing a Connection
The primary aspect of the Ajax process is the opening of a connection to the server. There
are a number of different ways to achieve this goal, but we’ll be looking at a specific means
through which you can both send and receive data easily. This technique is generally called
“using the XMLHttpRequest object.”
The communication of data is conducted in two different ways using the
XMLHttpRequest object, depending on the user’s browser:
1. Internet Explorer, which pioneered this means of browser-based communication,
establishes all of its connections using an ActiveXObject (the exact version of which
changes depending on the version of Internet Explorer). Thankfully, Internet 
Explorer 7 has native support for the XMLHttpRequest object.
2. All other modern browsers have localized the capabilities of the XMLHttpRequest
object into an object of the same name. This includes Firefox, Opera, and Safari.
216 CHAPTER 10 ■ INTRODUCTION TO AJAX
Figure 10-1. An example of Instant Domain Search looking for domain names as you type
7273ch10final.qxd 11/16/06 8:11 AM Page 216Thankfully, even though Internet Explorer’s method of creating an XMLHttpRequest
object is different from all other modern browsers, it still has the same set of useful functionalities. The XMLHttpRequest object has a number of methods that are used to establish a
connection and read data from the server. Listing 10-1 shows how to establish a basic GET
request with the server.Ajax is a term coined by Jesse James Garrett of Adaptive Path to explain the asynchronous
client-to-server communication that’s made possible using the XMLHttpRequest object,
provided by all modern browsers. Standing for Asynchronous JavaScript and XML, Ajax is
simply a term used to encapsulate the techniques necessary to create a dynamic web application. Additionally, the individual components of the Ajax technique are completely
interchangeable—using HTML instead of XML (for example) is perfectly valid.
In this chapter you’re going to see the details that make up the full Ajax process (which
is itself centered on making a request to a server from a browser). I discuss everything from
the physical request itself, to the JavaScript interaction, and the data manipulation necessary to get the job done. This includes the following:
• Examining the different types of HTTP requests and determining how to best send data
objects to a server.
• Looking at the entire HTTP response and attempting to handle all the errors that can
occur with it, including server time-outs.
• Reading, traversing, and manipulating the data result that comes from the server in its
response.
Through this full understanding of how the Ajax process works and how it can be
implemented, you’ll see how it can be used in everything from common situations to full
applications. In Chapters 11, 12, and 13, you will also explore a series of case studies that
utilize Ajax techniques.
Using Ajax
Much code isn’t required to create a simple Ajax implementation, however, what the implementation affords you is great. For example, instead of having to force the user to request 
an entirely new web page after a form submission, the submission process can be handled
asynchronously, and then a small portion of desired results can be loaded upon completion.
For example, the process of searching for available domain names (to purchase) can be slow
and laborious. Every time you want to search for a new name you have to type your request
into a form, submit it, and watch the page reload. By using Ajax, you can get an instantaneous result, such as with the online application site Instant Domain Search (http://
instantdomainsearch.com/), for example, which is shown in Figure 10-1.
215
C H A P T E R 10
■ ■ ■
7273ch10final.qxd 11/16/06 8:11 AM Page 215HTTP Requests
The most important and probably most consistent aspect of Ajax is the HTTP request portion
of the process. The Hypertext Transfer Protocol (HTTP) was designed to simply transfer HTML
documents and similar files. Thankfully, all modern browsers support a means of establishing
HTTP connections dynamically, using JavaScript. This proves to be incredibly useful in developing more responsive web applications.
Asynchronously sending data to the server and receiving additional data back is the ultimate purpose of Ajax. How the data is formatted ultimately depends on your specific requirements, which I discuss in detail in the “Handling Response Data” section of this chapter.
In the following sections you’re going see how to format data to be transferred to a server
using the different HTTP requests. You’re then going to look at how to establish basic connections with the server, and you’ll see the necessary details to make this happen in a
cross-browser environment.
Establishing a Connection
The primary aspect of the Ajax process is the opening of a connection to the server. There
are a number of different ways to achieve this goal, but we’ll be looking at a specific means
through which you can both send and receive data easily. This technique is generally called
“using the XMLHttpRequest object.”
The communication of data is conducted in two different ways using the
XMLHttpRequest object, depending on the user’s browser:
1. Internet Explorer, which pioneered this means of browser-based communication,
establishes all of its connections using an ActiveXObject (the exact version of which
changes depending on the version of Internet Explorer). Thankfully, Internet 
Explorer 7 has native support for the XMLHttpRequest object.
2. All other modern browsers have localized the capabilities of the XMLHttpRequest
object into an object of the same name. This includes Firefox, Opera, and Safari.
216 CHAPTER 10 ■ INTRODUCTION TO AJAX
Figure 10-1. An example of Instant Domain Search looking for domain names as you type
7273ch10final.qxd 11/16/06 8:11 AM Page 216Thankfully, even though Internet Explorer’s method of creating an XMLHttpRequest
object is different from all other modern browsers, it still has the same set of useful functionalities. The XMLHttpRequest object has a number of methods that are used to establish a
connection and read data from the server. Listing 10-1 shows how to establish a basic GET
request with the server.

Ajax là một thuật ngữ được đặt ra bởi Jesse James Garrett của Con đường thích ứng để giải thích sự không đồng bộ
giao tiếp từ máy khách đến máy chủ có thể thực hiện được bằng cách sử dụng đối tượng XMLHttpRequest,
được cung cấp bởi tất cả các trình duyệt hiện đại. Đại diện cho JavaScript và XML không đồng bộ, Ajax là
chỉ đơn giản là một thuật ngữ được sử dụng để đóng gói các kỹ thuật cần thiết để tạo một cation thiết bị web động. Ngoài ra, các thành phần riêng lẻ của kỹ thuật Ajax hoàn toàn
có thể hoán đổi cho nhau — sử dụng HTML thay vì XML (ví dụ) là hoàn toàn hợp lệ.
Trong chương này, bạn sẽ thấy các chi tiết tạo nên quy trình Ajax đầy đủ (
chính nó tập trung vào việc thực hiện một yêu cầu đến một máy chủ từ một trình duyệt). Tôi thảo luận mọi thứ từ
bản thân yêu cầu vật lý, đối với tương tác JavaScript và thao tác dữ liệu cần thiết để hoàn thành công việc. Điều này bao gồm những điều sau:
• Kiểm tra các loại yêu cầu HTTP khác nhau và xác định cách gửi dữ liệu tốt nhất
đối tượng của một máy chủ.
• Xem xét toàn bộ phản hồi HTTP và cố gắng xử lý tất cả các lỗi có thể
xảy ra với nó, bao gồm cả thời gian chờ của máy chủ.
• Đọc, duyệt và thao tác kết quả dữ liệu đến từ máy chủ trong nó
phản ứng.
Thông qua sự hiểu biết đầy đủ này về cách hoạt động của quy trình Ajax và cách nó có thể
được triển khai, bạn sẽ thấy cách nó có thể được sử dụng trong mọi thứ, từ các tình huống thông thường đến đầy đủ
các ứng dụng. Trong các Chương 11, 12 và 13, bạn cũng sẽ khám phá một loạt các nghiên cứu điển hình
sử dụng các kỹ thuật Ajax.
Sử dụng Ajax
Không cần nhiều mã để tạo một triển khai Ajax đơn giản, tuy nhiên, những gì mà đề xuất mang lại cho bạn thật tuyệt vời. Ví dụ: thay vì phải buộc người dùng yêu cầu
một trang web hoàn toàn mới sau khi gửi biểu mẫu, quá trình gửi có thể được xử lý
không đồng bộ, và sau đó một phần nhỏ kết quả mong muốn có thể được tải sau khi hoàn thành.
Ví dụ: quá trình tìm kiếm các tên miền có sẵn (để mua) có thể chậm
và cần cù. Mỗi khi bạn muốn tìm kiếm một tên mới, bạn phải nhập yêu cầu của mình
vào một biểu mẫu, gửi nó và xem trang tải lại. Bằng cách sử dụng Ajax, bạn có thể nhận được kết quả tức thì, chẳng hạn như với trang web ứng dụng trực tuyến Tìm kiếm miền tức thì (http: //
Ví dụ: Instantdomainsearch.com/), được hiển thị trong Hình 10-1.
215
C H A P T E R 10
■ ■ ■
7273ch10final.qxd 16/11/06 8:11 SA Trang 215HTTP Yêu cầu
Khía cạnh quan trọng nhất và có lẽ nhất quán nhất của Ajax là phần yêu cầu HTTP
của quy trình. Giao thức truyền siêu văn bản (HTTP) được thiết kế để chuyển HTML một cách đơn giản
tài liệu và các tệp tương tự. Rất may, tất cả các trình duyệt hiện đại đều hỗ trợ một phương tiện thiết lập
Các kết nối HTTP động, sử dụng JavaScript. Điều này được chứng minh là vô cùng hữu ích trong việc phát triển các ứng dụng web đáp ứng nhiều hơn.
Gửi dữ liệu đến máy chủ một cách không đồng bộ và nhận lại dữ liệu bổ sung là mục đích của Ajax. Dữ liệu được định dạng như thế nào cuối cùng phụ thuộc vào các yêu cầu cụ thể của bạn, điều này tôi sẽ thảo luận chi tiết trong phần “Xử lý dữ liệu phản hồi” của chương này.
Trong các phần sau, bạn sẽ thấy cách định dạng dữ liệu để chuyển đến máy chủ
sử dụng các yêu cầu HTTP khác nhau. Sau đó, bạn sẽ xem xét cách thiết lập các kết nối cơ bản với máy chủ và bạn sẽ thấy các chi tiết cần thiết để thực hiện điều này trong
môi trường trình duyệt chéo.
Thiết lập kết nối
Khía cạnh chính của quá trình Ajax là việc mở kết nối đến máy chủ. Ở đó
là một số cách khác nhau để đạt được mục tiêu này, nhưng chúng tôi sẽ xem xét một phương tiện cụ thể
qua đó bạn có thể gửi và nhận dữ liệu một cách dễ dàng. Kỹ thuật này thường được gọi là
“Sử dụng đối tượng XMLHttpRequest.”
Việc truyền đạt dữ liệu được thực hiện theo hai cách khác nhau bằng cách sử dụng
Đối tượng XMLHttpRequest, tùy thuộc vào trình duyệt của người dùng:
1. Internet Explorer, công ty đi tiên phong trong phương tiện giao tiếp dựa trên trình duyệt này,
thiết lập tất cả các kết nối của nó bằng cách sử dụng ActiveXObject (phiên bản chính xác của nó
thay đổi tùy thuộc vào phiên bản của Internet Explorer). Rất may, Internet
Explorer 7 có hỗ trợ riêng cho đối tượng XMLHttpRequest.
2. Tất cả các trình duyệt hiện đại khác đã bản địa hóa các khả năng của XMLHttpRequest
đối tượng thành một đối tượng cùng tên. Điều này bao gồm Firefox, Opera và Safari.
216 CHƯƠNG 10 ■ GIỚI THIỆU VỀ AJAX
Hình 10-1. Ví dụ về Tìm kiếm miền tức thì tìm kiếm tên miền khi bạn nhập
7273ch10final.qxd 16/11/06 8:11 SA Trang 216 Rất cảm ơn, mặc dù phương pháp tạo XMLHttpRequest của Internet Explorer
đối tượng khác với tất cả các trình duyệt hiện đại khác, nó vẫn có cùng một tập hợp các chức năng hữu ích. Đối tượng XMLHttpRequest có một số phương thức được sử dụng để thiết lập
kết nối và đọc dữ liệu từ máy chủ. Liệt kê 10-1 cho thấy cách thiết lập GET cơ bản
yêu cầu với máy chủ. 